import React from "react";
import UploadFile from "./UploadFile";
import { Button, Input } from "@nextui-org/react";

type Props = {};
function page({}: Props) {
  return (
    <div className="flex flex-col gap-y-5 p-4">
      <header className="mx-auto w-[295px] space-y-1 md:w-[640px]">
        <p className="text-2xl font-bold text-dark-gray">Profile Details</p>
        <span className="text-base text-grey">
          Add / Edit your details to create a personal touch to your profile.
        </span>
      </header>

      <section className="mx-auto flex h-[250px] w-[295px] flex-col justify-center gap-y-3 bg-lightWhite p-5 md:w-[640px]">
        <span className="text-xs">Profile Picture</span>
        <UploadFile />
      </section>

      <form
        action=""
        className="mx-auto flex w-[295px] flex-col gap-y-3 bg-lightWhite p-5 md:w-[640px]"
      >
        <Input
          isRequired
          type="text"
          label="Username"
          placeholder="e.g. Omotola"
        />
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="e.g adisa@example.com"
        />
      </form>

      <Button color="primary" variant="shadow" className="mx-auto w-[295px]">
        Save
      </Button>
    </div>
  );
}

export default page;
