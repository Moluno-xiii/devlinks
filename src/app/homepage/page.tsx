"use client";
import Image from "next/image";
import UserLinks from "./UserLinks";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { IoMdAdd } from "react-icons/io";

const HomePage: React.FC = () => {
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const handleOpenLinks = () => {
    setIsLinkOpen(true);
  };
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-[343px] flex-col items-center justify-center rounded-xl bg-white p-6 md:w-[721px]">
        <section className="flex flex-col gap-y-2 md:w-full">
          <p className="text-2xl font-bold md:text-3xl">Customize your links</p>
          <span className="mb-10 text-base text-grey">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </span>
        </section>
        <Button
          variant="ghost"
          color="primary"
          className="w-[295px] md:w-full"
          onClick={handleOpenLinks}
          startContent={<IoMdAdd />}
        >
          Add new Link
        </Button>

        {!isLinkOpen ? (
          <section className="my-3 flex flex-col items-center justify-center gap-3 rounded-xl md:w-full border-b border-lightGrey bg-lightGrey px-5 py-10 text-black">
            <Image
              src="/mobile-image.svg"
              alt="phone image"
              height={80}
              width={124.77}
              className="block md:hidden"
            />
            <Image
              src="/mobile-image.svg"
              alt="phone image"
              height={160}
              width={250}
              className="hidden md:block"
            />
            <p className="text-2xl font-bold md:text-3xl">
              {"Let's"} get you started
            </p>
            <span className="text-base text-grey max-w-[488px] text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </span>
          </section>
        ) : (
          <UserLinks />
        )}
      </main>
    </div>
  );
};

export default HomePage;
