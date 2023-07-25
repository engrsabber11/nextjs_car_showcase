import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          ></Image>
        </Link>
        <CustomButton
          title="Sign In"
          containerStyle="text-primary-blue rounded-full bg-white main-[130px]"
        />
      </nav>
    </div>
  );
};

export default Navbar;
