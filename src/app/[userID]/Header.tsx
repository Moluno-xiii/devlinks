'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky left-0 right-0 top-0 z-20 flex flex-row items-center justify-between bg-white p-4 md:m-6 md:rounded-xl md:p-6">
      <Link href={'/'}>
        <Image alt="devlinks logo" src="logo.svg" height={32} width={146} />
      </Link>
    </header>
  );
};

export default Header;
