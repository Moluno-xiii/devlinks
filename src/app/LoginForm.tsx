"use client";
import React, { use, useEffect } from "react";
import { IoLockClosed, IoMail } from "react-icons/io5";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import FormValidationError from "@/components/UI/FormValidationError";
import { loginUser } from "../../appwrite";
import { fetchCurrentUser, login } from "./store/authSlice/authThunks";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import useRedirect from "@/hooks/useRedirect";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { lchown } from "fs/promises";
import { Login } from "@/types";
type Props = {};
const LoginForm = (props: Props) => {
  const router = useRouter();
// const {user} = useRedirect()
const {user, loading, errorMessage} = useSelector((state : RootState) => state.auth)
const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = (data: Login) => {
    const { email, password } = data;
    // loginUser({ email, password });
    dispatch(login({email, password}))
    console.log(data);
  };

  useEffect(function (){
    dispatch(fetchCurrentUser())
  }, [dispatch])

  useEffect(function () {
    if (user && user.emailVerification === true) {
      router.push("/homepage");
      console.log(user)
    }else {
      return
    }
  }, [user, router]);

  if (errorMessage) return <p>{errorMessage}</p>

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
        isLoading = {loading}
        color="primary"
        type="submit"
        className="mt-4 w-full text-base font-semibold"
      >
        Login
      </Button>
      <Link href="password-reset" className="place-self-end text-xs text-error">
        Forgot Password ?
      </Link>
    </form>
  );
};

export default LoginForm;
