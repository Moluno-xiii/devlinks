"use client";

import Image from "next/image";
import Link from "next/link";
import CreateAccountForm from "./createAccountForm";
import { Button } from "@nextui-org/react";
import { checkEmailVerification } from "../../../appwrite";

export default function Home() {
  return (
    <main className="mx-auto h-[100dvh] leading-[150%] text-dark-gray max-sm:m-10 sm:flex sm:max-w-[476px] sm:flex-col sm:items-center sm:justify-center">
      <header className="mx-auto flex max-w-[311px] flex-row gap-x-2 sm:justify-center">
        <Image src="/logo.svg" width={135} height={26.25} alt="devlinks logo" />
      </header>

      <div className="mt-16 sm:w-[476px] sm:rounded-xl sm:bg-white sm:py-8">
        <section className="mx-auto mb-8 flex max-w-[311px] flex-col gap-y-2 sm:max-w-[396px]">
          <span className="text-2xl font-bold">Create account</span>
          <span className="text-base text-grey">
            {"Let's"} get started sharing your links!
          </span>
        </section>

        <CreateAccountForm />

        {/* <Button
          variant="solid"
          onClick={checkEmailVerification}
          color="primary"
          type="submit"
          className="mt-4 w-full text-base font-semibold"
        >
          Get current user
        </Button> */}

        <div className="mt-6 flex flex-col items-center gap-x-1 sm:flex-row sm:justify-center">
          <span>Already have an account?</span>
          <Link href="/" className="text-primary">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
