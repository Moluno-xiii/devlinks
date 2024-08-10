"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { updateVerification } from '../../../appwrite'

type Props = {}

const Verification = (props: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const userId = searchParams.get("userId")
    const secret = searchParams.get("secret")
    const [status, setStatus] = useState<string>("Verifying your account...")


  useEffect(() => {
    if (userId && secret) {
      updateVerification(userId as string, secret as string)
        .then(() => {
            setStatus('Verification successful. Redirecting to login...');
            console.log("login successful")
            setTimeout(() => router.push('/login'), 3000);
        })
        .catch((error) => {
          console.log('Verification failed', error);
          setStatus('Verification failed. Please try again or contact support.')
          throw error
        });
    } else {
        setStatus('Invalid verification link. Please check your email and try again.');
      }
  }, [userId, secret, router]);
  return (
    <div>{status}</div>
  )
}

export default Verification