
-- Fix permissive INSERT policy on daily_poems - only allow if user owns the poem
DROP POLICY "Authenticated can insert daily poems" ON public.daily_poems;
CREATE POLICY "Users can insert daily poems for own poems" ON public.daily_poems 
FOR INSERT TO authenticated 
WITH CHECK (
  EXISTS (SELECT 1 FROM public.poems WHERE poems.id = poem_id AND poems.user_id = auth.uid())
);
