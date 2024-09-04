"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useLinksQuery } from "@/hooks/useLinksQuery";
import Loader from "@/components/UI/Loader";

const HomePage: React.FC = () => {
  const handleOpenLinks = () => {
    router.push("/homepage/links");
  };

  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const { isLoading } = useLinksQuery(user?.$id);
  if (isLoading) return <Loader />;

  return (
    <div className="flex items-center justify-center">
      <main className="flex w-[343px] flex-col items-center justify-center rounded-xl bg-white p-6 md:w-[721px]">
        <section className="flex flex-col gap-y-2 md:w-full">
          <p className="text-2xl font-bold md:text-3xl">
            Welcome to devlinks,{" "}
            <span className="capitalize text-primary">{user && user.name}</span>
          </p>
          <span className="mb-10 text-base text-grey">
            {"Let's"} get you started with customizing your profile links.
          </span>
        </section>
        <Button
          variant="ghost"
          color="primary"
          className="w-[295px] md:w-full"
          onClick={handleOpenLinks}
        >
          Get Started
        </Button>

        <section className="my-10 flex flex-col items-center justify-center gap-3 rounded-xl border-b border-lightGrey bg-lightGrey px-5 py-10 text-black md:w-full">
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
          <span className="max-w-[488px] text-center text-base text-grey">
            Use the “Get Started” button to begin setting up your profile links.
            After adding your links, you can make changes anytime. We’re here to
            assist you in sharing your profiles with the world!
          </span>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
