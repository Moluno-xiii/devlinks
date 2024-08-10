"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { verifyLogin } from '../../../appwrite'
// import { redirect } from 'next/navigation'

type Props = {}

const Verification = (props: Props) => {
    const router = useRouter()
    // const {userId, secret} = router.query
    const searchParams = useSearchParams()
    const userId = searchParams.get("userId")
    const secret = searchParams.get("secret")


  useEffect(() => {
    if (userId && secret) {
      verifyLogin(userId as string, secret as string)
        .then(() => {
          console.log('Verification successful');
          router.push('/login');
        // redirect('/login')
        })
        .catch((error) => {
          console.log('Verification failed', error);
        });
    }
  }, [userId, secret, router]);
  return (
    <div>verifying your account...</div>
  )
}

export default Verification