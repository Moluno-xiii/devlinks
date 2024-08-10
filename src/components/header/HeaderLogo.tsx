import Image from "next/image";
import Link from "next/link";

const HeaderLogo: React.FC = () => {
  return (
    <Link href={"/homepage"}>
      <Image alt="devlinks logo" src="logo.svg" height={32} width={146} />
    </Link>
  );
};

export default HeaderLogo;
