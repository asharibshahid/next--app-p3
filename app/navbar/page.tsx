"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NavbarPage = () => {
  const router = useRouter();
  return (
    <div>
      navbarPage <br />
      <Link href="/">Go To Homepage</Link>link
      <br />
      <button onClick={() => router.push("/")}>Go To Return HomePage Btn</button>
    </div>
  );
};

export default NavbarPage;
