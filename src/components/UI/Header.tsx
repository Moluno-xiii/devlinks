"use client";
import { Button } from "@nextui-org/react";
import HeaderLinks from "@/components/header/HeaderLinks";
import HeaderLogo from "@/components/header/HeaderLogo";
import { MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Header: React.FC = () => {
  const router = useRouter();
  const { user } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <header className="sticky left-0 right-0 top-0 z-20 flex flex-row items-center justify-between bg-white p-4 md:m-6 md:rounded-xl md:p-6">
      <HeaderLogo />
      <HeaderLinks />
      <Button
        className="hidden sm:inline-block"
        variant="ghost"
        aria-label="route to preview page"
        color="primary"
        size="lg"
      >
        <Link href={`/preview/${user?.$id}`}>Preview</Link>
      </Button>
      <Button
        className="flex sm:hidden"
        variant="ghost"
        aria-label="Route to preview page"
        color="primary"
        onClick={() => router.push(`/preview/${user?.$id}`)}
        isIconOnly
      >
        <MdRemoveRedEye />
      </Button>
    </header>
  );
};

export default Header;
