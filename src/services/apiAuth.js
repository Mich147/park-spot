import supabase from './supabase'

// create user
export async function createUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
  })
}
