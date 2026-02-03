"use client";

import axios from 'axios';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import AuthCard from './AuthCard';
import Heading from '../AuthHeading';
import AuthInput from '../inputs/AuthInput';


const LoginCard = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
        setIsLoading(true);

        const callback = await signIn('credentials', {
          ...data,
          redirect: false,
          callbackUrl: '/admin',
        });

        if(callback?.ok){
          toast.success('Logged In') 
          router.push("/admin")         
        }

        if(callback?.error){
            toast.error(callback.error)
        }
    } catch (error) {
        toast.error("Something went wrong")
    } finally{
        setIsLoading(false);
    }
    
  }

  const bodyContent  = (
    <div className='flex flex-col gap-4'>
      <Heading 
        title='Welcome to the Admin'
        subtitle='Sign in'
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
        title='Login'
        actionLabel='Submit'
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </div>
  )
}

export default LoginCard