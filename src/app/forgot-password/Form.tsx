'use client';
import React from 'react';
import { IoMail } from 'react-icons/io5';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import FormValidationError from '../../_components/UI/FormValidationError';
import { passwordRecovery } from '../store/authSlice/authServices';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

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
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error:any) {
      toast.error(error.message)
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
          placeholder="e.g akeye@gmail.com"
          type="text"
          labelPlacement="outside"
          isRequired
          endContent={<IoMail />}
          {...register('userEmail', {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
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
