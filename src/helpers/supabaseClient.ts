import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const url ='https://bwddyidkdaatnqumcuia.supabase.co'
export const supabase = createClient(url, import.meta.env.VITE_KEY)
