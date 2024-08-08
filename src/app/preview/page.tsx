import { Button } from "@nextui-org/react";
import { Avatar } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <header className="flex flex-row justify-center items-center gap-x-2">
        <Button variant="ghost" color="primary">
          Back to Editor
        </Button>
        <Button color="primary" variant="shadow">
          Share Link
        </Button>
      </header>

      <div className="flex flex-col gap-y-6">
        <Avatar
          shape="circle"
          size={150}
          className="border-4 border-primary"
          alt="Profile Picture"
          src="/eminem.jpeg"
        />
        <p>John Doe</p>
        <span>example@gmail.com</span>
      </div>
    </div>
  );
};

export default page;
