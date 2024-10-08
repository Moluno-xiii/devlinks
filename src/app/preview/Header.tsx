import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

type Props = {
};

const Header = ({ }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const shareUrl = `https://devlinks-kappa.vercel.app/${user?.$id}`;
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.info("Link copied to clipboard");
    } catch (err) {
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "Here's a link to my website:",
          url: shareUrl,
        });
      } catch (error) {
      }
    } else {
      copyToClipboard();
    }
  };
  return (
    <>
      <ToastContainer autoClose={3000} theme="light" position="top-right" />
      <header className="sticky top-0 z-20 flex w-full flex-row items-center justify-center gap-x-2 bg-white p-4 sm:justify-between sm:rounded-md">
        <Button className="w-40" variant="bordered" color="primary">
          <Link href="/homepage/links">Back to Editor</Link>
        </Button>
        <Button
          className="w-40"
          color="primary"
          variant="shadow"
          onClick={handleShare}
        >
          Share Link
        </Button>
      </header>
    </>
  );
};

export default Header;
