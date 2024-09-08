'use client';
import React, { useEffect, useState } from 'react';
import { IoLockClosed, IoMail } from 'react-icons/io5';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import FormValidationError from '@/_components/UI/FormValidationError';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { useDispatch } from 'react-redux';
import { Login } from '@/types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAuthenticated, setUser } from './store/authSlice/authSlice';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from './store/authSlice/authServices';

type Props = {};
const LoginForm = (props: Props) => {
  const [isUserFetched, setIsUserFetched] = useState(false);
  const router = useRouter();
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  const {mutate, isPending} = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch(setUser(data));
      dispatch(setAuthenticated(true))
    },
    onError: (err) => toast.error(err.message)
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = (data: Login) => {
    const { email, password } = data;
    mutate({email, password})
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const stored_user = localStorage.getItem('user');
        if (stored_user) {
          const parsedUser = JSON.parse(stored_user);
          dispatch(setUser(parsedUser));
        }
        setIsUserFetched(true);
      } catch (error) {
        toast.error('An error occurred while fetching the user data.');
      }
    };

    fetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (!isUserFetched || loading) return;
    try {
      if (user) {
        // if (user && user.emailVerification === true) {
        setTimeout(() => {
          router.push('/homepage');
        }, 3000);
        toast.success('Login successful');
      } else {
        toast.error('No active session');
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [isUserFetched, user, loading, router]);

  if (errorMessage) toast.error(errorMessage);

  return (
    <>
      <ToastContainer autoClose={3000} theme="light" position="top-right" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-2 sm:px-8"
        aria-labelledby="user login form"
      >
        <Input
          aria-labelledby="email input"
          type="email"
          label="Email"
          disabled={isPending}
          isRequired
          labelPlacement="outside"
          description="e.g enomavictor@gmail.com"
          variant="faded"
          endContent={<IoMail />}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <FormValidationError errorMessage={errors.email.message as string} />
        )}
        <Input
          aria-labelledby="password input"
          variant="faded"
          label="Password"
          type="password"
          disabled={isPending}
          labelPlacement="outside"
          isRequired
          endContent={<IoLockClosed />}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        {errors.password && (
          <FormValidationError
            errorMessage={errors.password.message as string}
          />
        )}
        <Button
          variant="solid"
          isLoading={isPending}
          color="primary"
          type="submit"
          className="mt-4 w-full text-base font-semibold"
          aria-labelledby="login button"
        >
          Login
        </Button>
        <Link
          aria-labelledby="password reset link"
          href="forgot-password"
          className="place-self-end text-xs text-error"
        >
          Forgot Password ?
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
