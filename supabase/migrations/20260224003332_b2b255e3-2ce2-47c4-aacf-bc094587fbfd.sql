-- Add category column to poems table
ALTER TABLE public.poems 
ADD COLUMN category text NOT NULL DEFAULT 'poemas';

-- Update existing poems to have the 'poemas' category
UPDATE public.poems SET category = 'poemas' WHERE category = 'poemas';

-- Create index for category filtering
CREATE INDEX idx_poems_category ON public.poems (category);
CREATE INDEX idx_poems_language_category ON public.poems (language, category);