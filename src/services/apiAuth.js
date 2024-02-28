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

export async function getTheUser() {
  const { data, error } = await supabase.auth.getSession()

  if (error) {
    console.error(error.message)
    throw new Error('Could not retrieve a session')
  }

  if (!data.session) return null

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error(error.message)
    throw new Error('Could not login')
  }

  return data
}
