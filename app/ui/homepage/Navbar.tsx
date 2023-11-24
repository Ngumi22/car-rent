"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  function clsx(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const links = [
    { name: "Rent A Car", href: "/cars", current: true, id: 1 },
    { name: "Rent Your Car", href: "/car-renting", current: false, id: 2 },
    { name: "Why Choose Us", href: "/drivers", current: false, id: 3 },
    { name: "About Us", href: "/about", current: false, id: 4 },
  ];

  return (
    <div className="flex justify-around items-center shadow-md mb-2">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex justify-between gap-20">
        <ul className="hidden md:flex gap-10">
          {links.map(({ name, href, id }) => (
            <li
              key={id}
              className="hover:underline underline-offset-[8px] flex items-center">
              <Link
                className={clsx(
                  "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-lg md:flex-none md:justify-start md:p-2 md:px-3",
                  ...(pathname === href ? ["bg-blue-400", "text-white"] : [])
                )}
                href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex md:items-center justify-between gap-x-8">
          <Link
            className="hover:underline underline-offset-[8px] flex items-center"
            href="/signin">
            Sign In
          </Link>
          <Link
            className="py-2 px-4 border border-black bg-black text-white rounded-lg"
            href="/signup">
            Sign Up
          </Link>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ href, name, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-lg">
              <Link onClick={() => setNav(!nav)} href={href}>
                {name}
              </Link>
            </li>
          ))}
          <div className="gap-y-8 flex flex-col text-lg">
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>
          </div>
        </ul>
      )}
    </div>
  );
}
