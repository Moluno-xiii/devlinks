"use client"
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FiLink } from "react-icons/fi";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const HeaderLinks: React.FC = () => {
    const currentPath = usePathname()
    //   const currentRoute = router.pathname;

    const isActiveRoute = (baseRoute: string) =>
        currentPath.startsWith(baseRoute);

    return (
        <nav className="flex flex-row gap-2">
            <Link
                href="/links"
                className={clsx(
                    "rounded-xl px-[27px] py-[11px] hover:text-primary flex items-center gap-x-1",
                    isActiveRoute("/links")
                        ? "bg-light-purple text-primary"
                        : "bg-white text-grey"
                )}
            >
                <FiLink height={15.63} width={15.63} />
                <span className="font-semibold hidden sm:inline-block">Links</span>
            </Link>

            <Link
                href="/profile-details"
                className={clsx(
                    "rounded-xl px-[27px] py-[11px] hover:text-primary flex items-center gap-x-1",
                    isActiveRoute("/profile-details")
                        ? "bg-light-purple text-primary"
                        : "bg-white text-grey"
                )}
            >
                <CgProfile height={15.63} width={15.63} />
                <span className="font-semibold capitalize hidden sm:inline-block">Profile Details</span>
            </Link>
        </nav>
    );
};

export default HeaderLinks;