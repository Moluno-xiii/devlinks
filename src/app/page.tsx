import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto h-[100dvh] leading-[150%] text-dark-gray max-sm:m-10 sm:flex sm:max-w-[476px] sm:flex-col sm:items-center sm:justify-center">
      <header className="mx-auto flex max-w-[311px] flex-row gap-x-2 sm:justify-center">
        <Image
          src="/logo.svg"
          width={135}
          height={26.25}
          alt="devlinks logo"
        />
      </header>

      <div className="mt-16 sm:w-[476px] sm:rounded-xl sm:bg-white sm:py-8">
        <section className="mx-auto mb-8 flex max-w-[311px] flex-col gap-y-2 sm:max-w-[396px]">
          <span className="text-2xl font-bold">Login</span>
          <span className="text-base text-grey">
            Add your details below to get back into the app
          </span>
        </section>

        <form action="" className="flex flex-col items-center gap-y-6">
          <div className="flex flex-col gap-y-1">
            <label className="text-xs" htmlFor="email">
              Email address
            </label>
            <div className="relative">
              <input
                className="h-[48px] w-[311px] rounded-lg border border-borders pl-7 pr-3 placeholder-dark-gray placeholder-opacity-50 focus:shadow-lg focus:shadow-primary/40 focus:outline-primary sm:w-[396px]"
                type="text"
                id="email"
                placeholder="e.g. alex@email.com"
              />
              <Image
                src="/email-logo.svg"
                width={13}
                height={10}
                className="absolute left-2 top-5"
                alt="email logo"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-1">
            <label className="text-xs" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="h-[48px] w-[311px] rounded-lg border border-borders pl-7 pr-3 placeholder-dark-gray placeholder-opacity-50 focus:shadow-lg focus:shadow-primary/40 focus:outline-primary sm:w-[396px]"
                type="text"
                id="password"
                placeholder="Enter your password"
              />
              <Image
                src="/password-logo.svg"
                width={13}
                height={10}
                className="absolute left-2 top-4"
                alt="password logo"
              />
            </div>
          </div>

          <button className="h-[46px] w-[311px] rounded-lg bg-primary text-base font-semibold capitalize text-white sm:w-[396px]">
            login
          </button>
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