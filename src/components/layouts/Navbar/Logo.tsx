import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Digital Twins Energy LLC logo"
          width={36}
          height={36}
          className="hidden dark:block"
        />
        <Image
          src="/logo2.svg"
          alt="Digital Twins Energy LLC logo"
          width={36}
          height={36}
          className="block dark:hidden"
        />

        <p className="text-xl lg:text-2xl font-semibold dark:text-white">
          Digital Twins Energy LLC.
        </p>
      </div>
    </Link>
  );
};

export default Logo;
