export type CredentialTypes = {
  email: string
  password: string
}

export type FAQItemTypes = {
  id: number
  question: string
  answer: string
}

// export type IconTypes = {
//   id: number
//   name: string
//   icon: string
// }

export type ListingItemTypes = {
  id: string
  location: string
  parkType: string
  distance: number
  carType: string[]
  ratings: number
  img: string
}

export type RegisterTypes = {
  email: string
  password: string
  confirmPassword: string
}

export type LoginTypes = Omit<RegisterTypes, 'confirmPassword'>
