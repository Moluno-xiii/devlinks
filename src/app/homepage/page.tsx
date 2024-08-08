"use client";
import Image from "next/image";
import UserLinks from "./UserLinks";
import { useState } from "react";
import { Button } from "@nextui-org/react";

const HomePage: React.FC = () => {
  const [isLinkOpen, setIsLinkOpen] = useState(false);
  const handleOpenLinks = () => {
    setIsLinkOpen(true);
  };
  return (
    <div className="flex items-center justify-center">
      <main className="flex w-[343px] flex-col items-center justify-center rounded-xl bg-white p-6">
        <section className="flex flex-col gap-y-2">
          <p className="text-2xl font-bold">Customize your links</p>
          <span className="text-base text-grey">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </span>
        </section>
        <button
          className="btn-secondary my-8 w-[295px]"
          onClick={handleOpenLinks}
        >
          + Add new link
        </button>

        {!isLinkOpen ? (
          <section className="my-3 flex flex-col items-center justify-center gap-3 rounded-xl border-b border-lightGrey bg-lightGrey px-5 py-10 text-black">
            <Image
              src="/mobile-image.svg"
              alt="phone image"
              height={80}
              width={124.77}
            />
            <p className="text-2xl font-bold">{"Let's"} get you started</p>
            <span className="text-base text-grey">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </span>
          </section>
        ) : (
          <UserLinks />
        )}
        {/* <Button color="primary" variant="flat" className="w-full">
          Save
        </Button> */}
      </main>
    </div>
  );
};

export default HomePage;
