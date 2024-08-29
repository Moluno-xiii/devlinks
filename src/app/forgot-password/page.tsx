import React from 'react';
import Form from './Form';
import Image from 'next/image';

type Props = {};

const page = (props: Props) => {
  return (
    <main className="mx-auto h-[100dvh] leading-[150%] text-dark-gray max-sm:p-10 sm:flex sm:max-w-[600px] sm:flex-col sm:items-center sm:justify-center">
      <header className="flex max-w-[311px] flex-row justify-start gap-x-2 sm:justify-center">
        <Image src="/logo.svg" width={135} height={26.25} alt="devlinks logo" />
      </header>

      <div className="mt-16 sm:w-[600px] sm:rounded-xl sm:bg-white sm:py-8">
        <section className="mb-4 flex max-w-[600px] flex-col gap-y-2 sm:mx-8 sm:max-w-[600px]">
          <span className="text-2xl font-bold sm:text-3xl">Reset Password</span>
          <span className="text-base text-grey">
            Secure your account with a new password. Fill in the details below
          </span>
        </section>

        <Form />
      </div>
    </main>
  );
};

export default page;
