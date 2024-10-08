'use client';
import React from 'react';
import { IoLockClosed, IoMail } from 'react-icons/io5';
import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import FormValidationError from '../../_components/UI/FormValidationError';
import { useSearchParams } from 'next/navigation';
import { updateRecovery } from '../store/authSlice/authServices';
import { useRouter } from 'next/navigation';
type Props = {};
interface LoginFormData {
  password?: string;
  confirmPassword: string;
}

const ResetForm = (props: Props) => {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId') as string;
  const secret = searchParams.get('secret') as string;
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>();

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    const { confirmPassword } = data;
    try {
      await updateRecovery(confirmPassword, userId, secret);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
    }

  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-2 sm:px-8"
    >
      <Input
        variant="faded"
        label="New Password"
        type="password"
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
        <FormValidationError errorMessage={errors.password.message as string} />
      )}
      <Input
        type="password"
        label="Confirm Password"
        isRequired
        labelPlacement="outside"
        description="At least 8 characters"
        variant="faded"
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: (value) =>
            value === getValues('password') || 'Passwords do not match',
        })}
        endContent={<IoLockClosed />}
      />
      {errors.confirmPassword && (
        <FormValidationError
          errorMessage={errors.confirmPassword.message as string}
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
  );
};

export default ResetForm;
