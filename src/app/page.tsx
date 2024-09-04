"use client"
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main
        className="mx-auto h-[100dvh] leading-[150%] text-dark-gray max-sm:p-10 sm:flex sm:max-w-[476px] sm:flex-col sm:items-center sm:justify-center"
        aria-labelledby="login section"
      >
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

          <LoginForm />

          <div
            className="mt-6 flex flex-col items-center gap-x-1 sm:flex-row sm:justify-center"
            aria-labelledby="create account section"
          >
            <span>{"Don't"} have an account?</span>
            <Link
              href="/create-account"
              aria-labelledby="link to create account page"
              className="text-primary"
            >
              Create account
            </Link>
          </div>
        </div>
      </main>
    </QueryClientProvider>
  );
}
