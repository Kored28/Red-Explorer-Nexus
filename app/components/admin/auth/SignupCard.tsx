"use client";

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import AuthCard from './AuthCard';
import Heading from '../AuthHeading';
import AuthInput from '../inputs/AuthInput';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const SignupCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
      .then(() => {
        toast.success("Registered successfully");
        router.push('/login');
      })
      .catch((error) => {
        toast.error("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const bodyContent  = (
    <div className='flex flex-col gap-4'>
      <Heading 
        title='Welcome to the Admin'
        subtitle='Create an account'
      />

      <AuthInput 
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <AuthInput 
        id='username'
        label='Username'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <AuthInput 
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <AuthInput 
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  

  return (
    <div>
      <AuthCard 
        disabled={isLoading}
        title='Signup'
        actionLabel='Submit'
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </div>
  )
}

export default SignupCard