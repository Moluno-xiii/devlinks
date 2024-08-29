'use client';
import React from 'react';
import { IoMail } from 'react-icons/io5';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import FormValidationError from '../../components/UI/FormValidationError';
import { passwordRecovery } from '../store/authSlice/authServices';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

type Props = {};
interface PasswordRecovery {
  userEmail: string;
}

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordRecovery>();

  const router = useRouter();
  const onSubmit = async (data: PasswordRecovery) => {
    const { userEmail } = data;

    try {
      await passwordRecovery(userEmail);
      console.log(data);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.error('Failed to recover password:', error);
    }
  };
  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-2 sm:px-8"
      >
        <Input
          variant="faded"
          label="Email"
          placeholder="e.g samueljackson95@gmail.com"
          type="text"
          labelPlacement="outside"
          isRequired
          endContent={<IoMail />}
          {...register('userEmail', {
            required: 'email is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
        {errors.userEmail && (
          <FormValidationError
            errorMessage={errors.userEmail.message as string}
          />
        )}
        <Button
          variant="solid"
          color="primary"
          type="submit"
          className="mt-4 w-full text-base font-semibold"
        >
          Reset Password
        </Button>
      </form>
    </>
  );
};

export default Form;
