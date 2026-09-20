
-- Add approved column to poems (default false = pending)
ALTER TABLE poems ADD COLUMN IF NOT EXISTS approved boolean NOT NULL DEFAULT false;

-- Drop existing SELECT policies
DROP POLICY IF EXISTS "Anyone can view non-premium poems" ON poems;
DROP POLICY IF EXISTS "Authenticated can view premium poems" ON poems;

-- Anyone can view approved non-premium poems
CREATE POLICY "Anyone can view approved poems"
ON poems FOR SELECT
TO anon, authenticated
USING (approved = true AND is_premium = false);

-- Authenticated can view approved premium poems
CREATE POLICY "Authenticated can view approved premium poems"
ON poems FOR SELECT
TO authenticated
USING (approved = true AND is_premium = true);

-- Users can view their own poems (regardless of approval)
CREATE POLICY "Users can view own poems"
ON poems FOR SELECT
TO authenticated
USING (auth.uid() = user_id);
