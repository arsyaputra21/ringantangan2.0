import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  MapIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import NavLink from "./NavLink";
import Link from "next/link";
import ScrollNavLink from "./ScrollNavLink";

const Nav = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          onClick={() => {
            setTheme("light");
          }}
          role="button"
          className="h-9 cursor-pointer hover:animate-spin  text-yellow-300"
        />
      );
    } else {
      return (
        <MoonIcon
          onClick={() => {
            setTheme("dark");
          }}
          role="button"
          className="h-9 cursor-pointer hover:animate-spin duration-100 text-blue-800"
        />
      );
    }
  };

  return (
    <nav>
      <div className="bg-main flex justify-between items-center px-3 py-2 sm:px-10 ">
        <Link href="/">
          <Image
            className="cursor-pointer"
            objectFit="contain"
            width={60}
            height={60}
            src="/images/rtlogo.png"
          />
        </Link>

        <div className="flex space-x-10 sm:space-x-32 items-center grow justify-center">
          <NavLink Icon={HomeIcon} href="/" title="HOME" />
          <ScrollNavLink Icon={HeartIcon} href="about" title="ABOUT" />
          <ScrollNavLink Icon={MapIcon} href="journey" title="JOURNEY" />
        </div>

        {renderThemeChanger()}
      </div>
    </nav>
  );
};

export default Nav;
