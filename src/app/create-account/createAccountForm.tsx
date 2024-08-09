"use client";
import React from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
type Props = {};

interface CreateAccountFormData {
  email: string;
  password: string;
  confirmPassword: string;
}
const CreateAccountForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<CreateAccountFormData>();

  const onSubmit = (data: CreateAccountFormData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-2 sm:px-8"
    >
      <Input
        variant="faded"
        label="Email"
        type="text"
        key="email"
        description="e.g osinachi@gmail.com"
        labelPlacement="outside"
        isRequired
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p role="alert" className="text-red-500">
          {errors.email.message as string}
        </p>
      )}

      <Input
        key="create-password"
        type="password"
        label="Create Password"
        isRequired
        labelPlacement="outside"
        description="At least 8 characters"
        variant="faded"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        endContent={<IoLockClosed />}
      />
      {errors.password && (
        <p role="alert" className="text-red-500">
          {errors.password.message as string}
        </p>
      )}
      <Input
        key="confirm-password"
        type="password"
        label="Confirm Password"
        isRequired
        labelPlacement="outside"
        description="At least 8 characters"
        variant="faded"
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        endContent={<IoLockClosed />}
      />
      {errors.confirmPassword && (
        <p role="alert" className="text-red-500">
          {errors.confirmPassword.message as string}
        </p>
      )}

      <Button
        variant="solid"
        color="primary"
        type="submit"
        className="mt-4 w-full text-base font-semibold"
      >
        Create Account
      </Button>
    </form>
  );
};

export default CreateAccountForm;
