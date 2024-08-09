import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoLockClosed, IoMail } from "react-icons/io5";
const placement = "outside";
export default function Home() {
  return (
    <main className="mx-auto h-[100dvh] leading-[150%] text-dark-gray max-sm:m-10 sm:flex sm:max-w-[476px] sm:flex-col sm:items-center sm:justify-center">
      <header className="mx-auto flex max-w-[311px] flex-row gap-x-2 sm:justify-center">
        <Image src="/logo.svg" width={135} height={26.25} alt="devlinks logo" />
      </header>

      <div className="mt-16 sm:w-[476px] sm:rounded-xl sm:bg-white sm:py-8">
        <section className="mx-auto mb-8 flex max-w-[311px] flex-col gap-y-2 sm:max-w-[396px]">
          <span className="text-2xl font-bold">Login</span>
          <span className="text-base text-grey">
            Add your details below to get back into the app
          </span>
        </section>

        <form action="" className="flex flex-col items-center gap-y-2 sm:px-8">
          <Input
            key="outside"
            type="email"
            label="Email"
            isRequired
            labelPlacement="outside"
            description="e.g adekola@gmail.com"
            variant="faded"
            endContent={<IoMail />}
          />

          <Input
            variant="faded"
            label="Password"
            type="password"
            key="outside"
            labelPlacement="outside"
            isRequired
            endContent={<IoLockClosed />}
          />
          <Button
            variant="solid"
            color="primary"
            type="submit"
            className="w-full text-base mt-4 font-semibold"
          >
            Login
          </Button>
        </form>

        <div className="mt-6 flex flex-col items-center gap-x-1 sm:flex-row sm:justify-center">
          <span>{"Don't"} have an account?</span>
          <Link href="/create-account" className="text-primary">
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}
