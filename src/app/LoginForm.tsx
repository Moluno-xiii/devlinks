"use client";
import React from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import FormValidationError from "@/components/UI/FormValidationError";
import { loginUser } from "../../appwrite";
import Link from "next/link";
type Props = {};
interface LoginFormData {
  password: string;
  email: string;
}
const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    const { password, email } = data;
    loginUser({ email, password });
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-y-2 sm:px-8"
    >
      <Input
        type="email"
        label="Email"
        isRequired
        labelPlacement="outside"
        description="e.g adekola@gmail.com"
        variant="faded"
        endContent={<IoMail />}
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
        variant="faded"
        label="Password"
        type="password"
        labelPlacement="outside"
        isRequired
        endContent={<IoLockClosed />}
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
      />
      {errors.password && (
        <FormValidationError errorMessage={errors.password.message as string} />
      )}
      <Button
        variant="solid"
        color="primary"
        type="submit"
        className="mt-4 w-full text-base font-semibold"
      >
        Login
      </Button>
      <Link href="password-reset" className="text-error text-xs place-self-end">
      Forgot Password ?
      </Link>
    </form>
  );
};

export default LoginForm;
