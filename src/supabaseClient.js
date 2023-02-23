import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tecjxxjuosyqtdczryeq.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlY2p4eGp1b3N5cXRkY3pyeWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2ODg4NzUsImV4cCI6MTk5MjI2NDg3NX0.MmkO3sVKg0sRVOW-ky3TM0dtZlv5HBzI3nQXldIUUSg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
