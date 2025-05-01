import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="Digital Twin Energy LLC logo"
          width={36}
          height={36}
        />
        <p className="text-2xl font-semibold text-white">Twin Energy LLC.</p>
      </div>
    </Link>
  );
};

export default Logo;
