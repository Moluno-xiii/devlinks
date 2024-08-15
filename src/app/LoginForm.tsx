"use client";
import React, { useEffect } from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import FormValidationError from "@/components/UI/FormValidationError";
import { fetchCurrentUser, login } from "./store/authSlice/authThunks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { Login } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};
const LoginForm = (props: Props) => {
  const router = useRouter();
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = (data: Login) => {
    const { email, password } = data;
    dispatch(login({ email, password }));
    console.log(data);
  };

  useEffect(
    function () {
      dispatch(fetchCurrentUser());
    },
    [dispatch],
  );

  useEffect(
    function () {
      if (user && user.emailVerification === true) {
        setTimeout(() => {
          router.push("/homepage");
        }, 3000);
        toast.success("Login successful");
        console.log(user);
      } else {
        return;
      }
    },
    [user, router],
  );

  if (errorMessage) toast.error(errorMessage);

  return (
    <>
      <ToastContainer autoClose={3000} theme="light" position="top-right" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-y-2 sm:px-8"
      >
        <Input
          type="email"
          label="Email"
          disabled={loading}
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
          disabled={loading}
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
        <Button
          variant="solid"
          isLoading={loading}
          color="primary"
          type="submit"
          className="mt-4 w-full text-base font-semibold"
        >
          Login
        </Button>
        <Link
          href="password-reset"
          className="place-self-end text-xs text-error"
        >
          Forgot Password ?
        </Link>
      </form>
    </>
  );
};

export default LoginForm;
