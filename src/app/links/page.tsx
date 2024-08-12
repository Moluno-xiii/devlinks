"use client"
import React from "react";
import UserLinks from "./UserLinks";
import { IoMdAdd } from "react-icons/io";
import { Button } from "@nextui-org/react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-[343px] flex-col items-center justify-center rounded-xl bg-white p-6 md:w-[721px]">
        <section className="flex flex-col gap-y-2 md:w-full">
          <p className="text-2xl font-bold md:text-3xl">Customize your links</p>
          <span className="mb-10 text-base text-grey">
          Here, you can add, edit, or remove links to your various online profiles. Once set up, you’ll be able to share all your profiles with the world!
          </span>
        </section>
        <Button
          variant="solid"
          color="primary"
          className="w-[295px] md:w-full"
          startContent={<IoMdAdd />}
        >
          Add Link
        </Button>
        <UserLinks />
        <Button variant="bordered" color="primary" aria-label="save link button" className="place-self-end mt-5" size="sm">
          Save
        </Button>
      </main>
    </div>
  );
};

export default page;
