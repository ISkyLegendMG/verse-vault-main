
-- Allow poems to have nullable user_id for system/seed poems
ALTER TABLE public.poems ALTER COLUMN user_id DROP NOT NULL;

-- Update INSERT policy to still require user_id for user-created poems
DROP POLICY "Users can insert own poems" ON public.poems;
CREATE POLICY "Users can insert own poems" ON public.poems FOR INSERT TO authenticated 
WITH CHECK (auth.uid() = user_id);
