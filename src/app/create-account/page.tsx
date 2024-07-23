import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="text-dark-gray max-sm:m-10 leading-[150%] sm:max-w-[476px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center h-[100dvh]">
            <header className="flex flex-row max-w-[311px] mx-auto gap-x-2 sm:justify-center">
                <Image
                    src="/logo.svg"
                    width={135}
                    height={26.25}
                    alt="devlinks logo"
                />
            </header>

            <div className="sm:bg-white sm:rounded-xl sm:py-8 mt-16 sm:w-[476px]">
                <section className="flex flex-col gap-y-2  mb-8  max-w-[311px] sm:max-w-[396px] mx-auto">
                    <span className="font-bold text-2xl">Create account</span>
                    <span className="text-grey text-base">
                        {"Let's"} get started sharing your links!
                    </span>
                </section>

                <form action="" className="flex flex-col gap-y-6 items-center">
                    <div className="flex flex-col gap-y-1">
                        <label className="text-xs" htmlFor="email">
                            Email address
                        </label>
                        <div className="relative">
                            <input
                                className="border rounded-lg h-[48px] pl-7 pr-3 w-[311px] sm:w-[396px] placeholder-dark-gray placeholder-opacity-50 focus:outline-primary focus:shadow-primary/40 focus:shadow-lg border-borders"
                                type="text"
                                id="email"
                                placeholder="e.g. alex@email.com"
                            />
                            <Image
                                src="/email-logo.svg"
                                width={13}
                                height={10}
                                className="absolute top-5 left-2"
                                alt="email logo"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-xs" htmlFor="create password">
                            Create password
                        </label>
                        <div className="relative">
                            <input
                                className="border placeholder-dark-gray placeholder-opacity-50 pr-3 pl-7 rounded-lg h-[48px] w-[311px] sm:w-[396px] focus:outline-primary focus:shadow-primary/40 focus:shadow-lg border-borders"
                                type="text"
                                id="create password"
                                placeholder="At least 8 characters"
                            />
                            <Image
                                src="/password-logo.svg"
                                width={13}
                                height={10}
                                className="absolute top-4 left-2"
                                alt="password logo"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1">
                        <label className="text-xs" htmlFor="Confirm password">
                            Confirm password
                        </label>
                        <div className="relative">
                            <input
                                className="border placeholder-dark-gray placeholder-opacity-50 pr-3 pl-7 rounded-lg h-[48px] w-[311px] sm:w-[396px] focus:outline-primary focus:shadow-primary/40 focus:shadow-lg border-borders"
                                type="text"
                                id="Confirm password"
                                placeholder="At least 8 characters"
                            />
                            <Image
                                src="/password-logo.svg"
                                width={13}
                                height={10}
                                className="absolute top-4 left-2"
                                alt="password logo"
                            />
                        </div>
                    </div>

                    <span className="text-xs text-grey sm:px-10 sm:place-self-start">Password must contain at least 8 characters</span>

                    <button className="bg-primary font-semibold text-base capitalize text-white h-[46px] w-[311px] sm:w-[396px] rounded-lg">
                        login
                    </button>
                </form>

                <div className="flex flex-col sm:flex-row gap-x-1 sm:justify-center items-center mt-6">
                    <span>Already have an account?</span>
                    <Link href="/" className="text-primary">
                        Login
                    </Link>
                </div>
            </div>
        </main>
    );
}