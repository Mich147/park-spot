import supabase from './supabase'

// create user
export async function createUser({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.error(error.message)
    throw new Error('Could not create user')
  }
  return data
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession()
  if (!data.session) return null

  if (error) {
    console.error(error.message)
    throw new Error('Could not retrieve a session')
  }

  return data
}
