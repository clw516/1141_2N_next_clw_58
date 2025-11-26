import { createClient } from '@supabase/supabase-js'

const SUPABASEUrl = import.meta.env.VITE_SUPABASE_URL
const SUPABASEKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(SUPABASEUrl, SUPABASEKey)
