"use client"
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaBackward } from "react-icons/fa";

type Props = {};

const ErrorComponent = (props: Props) => {
  const router = useRouter()
  return (
    <div className="m-5 flex h-[100dvh] flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl font-semibold sm:text-3xl">
        Page not found. <br /> The page {"you're"} trying to reach {"doesn't"}{" "}
        exist.
      </p>
      <Button type="button" color="danger" startContent={<FaBackward />} variant="ghost" onClick={() => router.back()}>
        {/* <Link href="/homepage">Return to homepage</Link> */}
        Go back 
      </Button>
    </div>
  );
};

export default ErrorComponent;
