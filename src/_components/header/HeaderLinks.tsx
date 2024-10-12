"use client";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa6";

const HeaderLinks: React.FC = () => {
  const currentPath = usePathname();

  const isActiveRoute = (baseRoute: string) =>
    currentPath.startsWith(baseRoute);

  return (
    <nav className="flex flex-row gap-2">
      <Link
        href="/homepage/links"
        className={clsx(
          "flex items-center gap-x-1 rounded-xl px-5 py-[11px] hover:text-primary",
          isActiveRoute("/homepage/links")
            ? "bg-light-purple text-primary"
            : "bg-white text-grey",
        )}
      >
        <FiLink height={15.63} width={15.63} />
        <span className="hidden font-semibold sm:block">Links</span>
      </Link>

      <Link
        href="/homepage/profile"
        className={clsx(
          "flex items-center gap-x-1 rounded-xl px-5 py-[11px] hover:text-primary",
          isActiveRoute("/homepage/profile")
            ? "bg-light-purple text-primary"
            : "bg-white text-grey",
        )}
      >
        <FaUser height={15.63} width={15.63} />
        <span className="hidden font-semibold capitalize sm:block">
          Profile Details
        </span>
      </Link>
    </nav>
  );
};

export default HeaderLinks;
