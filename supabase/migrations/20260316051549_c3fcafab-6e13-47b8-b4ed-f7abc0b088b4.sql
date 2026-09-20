
-- Create a security definer function to check if user is superadmin
CREATE OR REPLACE FUNCTION public.is_superadmin(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM auth.users
    WHERE id = _user_id
      AND email = 'admin@versos.com'
  )
$$;

-- Allow superadmin to view all poems
CREATE POLICY "Superadmin can view all poems"
ON poems FOR SELECT
TO authenticated
USING (public.is_superadmin(auth.uid()));

-- Allow superadmin to update any poem
DROP POLICY IF EXISTS "Users can update own poems" ON poems;
CREATE POLICY "Users can update own poems"
ON poems FOR UPDATE
TO authenticated
USING (auth.uid() = user_id OR public.is_superadmin(auth.uid()));

-- Allow superadmin to delete any poem
DROP POLICY IF EXISTS "Users can delete own poems" ON poems;
CREATE POLICY "Users can delete own poems"
ON poems FOR DELETE
TO authenticated
USING (auth.uid() = user_id OR public.is_superadmin(auth.uid()));
