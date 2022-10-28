"use client";

import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }: { href: any; children: any }) => {
  console.log({ href, children });
  return <Link href={href}>{children}</Link>;
};

export default NavLink;
