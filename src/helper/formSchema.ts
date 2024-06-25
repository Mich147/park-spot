import * as yup from 'yup'
import { LoginTypes, RegisterTypes } from '../types'

export const registerSchema: yup.ObjectSchema<RegisterTypes> = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).max(10).required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
})

export const loginShema: yup.ObjectSchema<LoginTypes> = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(8).max(10).required('Password is required'),
})
