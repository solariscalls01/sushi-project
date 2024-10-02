"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Contact Us", href: "/contact" },
  { name: "Reservations", href: "/reservations" },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawerOpen = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  return (
    <div className={"flex flex-row gap-4 nav-links"}>
      {links.map((link) => (
        // This classname shows the current route/ path if the link matches the current path. Will provide a visual representation on the page that highlights this
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
