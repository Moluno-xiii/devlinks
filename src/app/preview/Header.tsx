import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 flex w-full flex-row items-center justify-center gap-x-2 bg-white p-4 sm:justify-between sm:rounded-md">
      <Button className="w-40" variant="bordered" color="primary">
        <Link href="/homepage/links">Back to Editor</Link>
      </Button>
      <Button className="w-40" color="primary" variant="shadow">
        Share Link
      </Button>
    </header>
  );
};

export default Header;
