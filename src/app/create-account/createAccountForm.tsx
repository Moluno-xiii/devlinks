"use client";
import React from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import FormValidationError from "@/components/UI/FormValidationError";
import { createUserAccount } from "../../../appwrite";
import { FaUserAlt } from "react-icons/fa";
type Props = {};

interface CreateAccountFormData {
  email: `${string}@${string}.${string}`;
  password: string;
  confirmPassword: string;
  name: string;
}
const CreateAccountForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<CreateAccountFormData>();

  const onSubmit = (data: CreateAccountFormData) => {
    const { email, password, name } = data;
    console.log(data);
    createUserAccount({ email, password, name });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-2 sm:px-8"
      aria-labelledby="create account form"
    >
      <Input
        aria-labelledby="create account email input"
        variant="faded"
        label="Email"
        endContent={<IoMail />}
        type="text"
        description="e.g akeye@gmail.com"
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
        <FormValidationError errorMessage={errors.email.message as string} />
      )}

      <Input
        aria-labelledby="create account username input"
        variant="faded"
        label="Username"
        endContent={<FaUserAlt />}
        type="text"
        labelPlacement="outside"
        description="At least 3 characters"
        isRequired
        {...register("name", {
          required: "Enter a valid username",
          pattern: {
            value: /^[a-zA-Z0-9._]{3,20}$/,
            message: "Invalid user name",
          },
        })}
      />
      {errors.name && (
        <FormValidationError errorMessage={errors.name.message as string} />
      )}

      <Input
        aria-labelledby="create account password input"
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
        <FormValidationError errorMessage={errors.password.message as string} />
      )}
      <Input
        aria-labelledby="create account confirm password input"
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
        <FormValidationError
          errorMessage={errors.confirmPassword.message as string}
        />
      )}

      <Button
        aria-labelledby="create account submit button"
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
