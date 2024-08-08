import React from "react";
import UploadFile from "./UploadFile";
import { Button, Input } from "@nextui-org/react";
type Props = {};

function page({}: Props) {
  return (
    <div className="p-4 flex flex-col gap-y-5">
      <header className="space-y-1 w-[295px] mx-auto ">
        <p className=" text-dark-gray font-bold text-2xl">Profile Details</p>
        <span className="text-grey text-base">
          Add your details to create a personal touch to your profile.
        </span>
      </header>

      <section className="bg-lightWhite flex flex-col justify-center gap-y-3 w-[295px] h-[200px] mx-auto  p-5">
        <span className="text-xs">Profile Picture</span>
        <UploadFile />
      </section>

      <form action="" className="p-5 w-[295px] mx-auto flex flex-col gap-y-3 bg-lightWhite">
        <Input isRequired type="text" label="First name" placeholder="e.g. John" />
        <Input isRequired type="text" label="Last name" placeholder="e.g. Doe" />
        <Input isRequired type="email" label="Email" placeholder="e.g john@example.com" />
      </form>

      <Button color="primary" variant="shadow" className="w-[295px] mx-auto">
          Save
        </Button>
    </div>
  );
}

export default page;
