import Link from 'next/link';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-auto pt-10 flex flex-row justify-center items-center text-primary">
      <a
        href="https://devlinks-kappa.vercel.app/66d137aa001a2c7364cc"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; Chukwuemeke
      </a>
    </div>
  );
};

export default Footer;
