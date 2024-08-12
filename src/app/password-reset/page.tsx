"use client";
import React from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import FormValidationError from "../../components/UI/FormValidationError";
import { updateRecovery } from "../../../appwrite";
import Link from "next/link";
type Props = {};
interface LoginFormData {
  password?: string;
  confirmPassword: string;
  randomString : string
}

const ForgotPassword = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    const { confirmPassword } = data;
    updateRecovery(confirmPassword, "string", "another string");
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-y-4 text-center m-5 sm:w-[600px] sm:mx-auto">
      <p className="text-3xl font-semibold">Reset Password</p>
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
        {errors.password && (
          <FormValidationError
            errorMessage={errors.password.message as string}
          />
        )}
        <Input
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
          variant="solid"
          color="primary"
          type="submit"
          className="mt-4 w-full text-base font-semibold"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
