
-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Poems table
CREATE TABLE public.poems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT '',
  language TEXT NOT NULL DEFAULT 'es',
  preview TEXT[] NOT NULL DEFAULT '{}',
  full_text TEXT[] NOT NULL DEFAULT '{}',
  modal_style TEXT NOT NULL DEFAULT 'scroll',
  link TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.poems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view non-premium poems" ON public.poems FOR SELECT USING (is_premium = false);
CREATE POLICY "Authenticated can view premium poems" ON public.poems FOR SELECT TO authenticated USING (is_premium = true);
CREATE POLICY "Users can insert own poems" ON public.poems FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own poems" ON public.poems FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own poems" ON public.poems FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Daily poems table (for hidden/calendar section)
CREATE TABLE public.daily_poems (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  poem_id UUID NOT NULL REFERENCES public.poems(id) ON DELETE CASCADE,
  scheduled_date DATE NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.daily_poems ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can view daily poems" ON public.daily_poems FOR SELECT TO authenticated USING (true);
CREATE POLICY "Authenticated can insert daily poems" ON public.daily_poems FOR INSERT TO authenticated WITH CHECK (true);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_poems_updated_at BEFORE UPDATE ON public.poems FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
