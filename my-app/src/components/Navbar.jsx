"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariant = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-8 w-1/3">
        {links.map((link) => (
          <NavLink links={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className=" text-white mr-1">Abeer</span>
          <span className="w-16 h-8 bg-white rounded text-black flex items-center justify-center">
            .WebDev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        {/* Socials */}
        <Link href="#">
          <Image src="/github.png" width={24} height={24} alt="github" />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        </Link>
        <Link href="#">
          <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" width={24} height={24} alt="linkedin" />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" width={24} height={24} alt="pinterest" />
        </Link>
        <Link href="#">
          <Image src="/dribbble.png" width={24} height={24} alt="dribbble" />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "open" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white z-10 flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
