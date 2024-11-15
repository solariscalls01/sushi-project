"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LocalDrinkRoundedIcon from "@mui/icons-material/LocalDrinkRounded";
import BentoRoundedIcon from "@mui/icons-material/BentoRounded";
import RiceBowlRoundedIcon from "@mui/icons-material/RiceBowlRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import SetMealRoundedIcon from "@mui/icons-material/SetMealRounded";
import SetMealIcon from '@mui/icons-material/SetMeal';

const links = [
  { name: "Appetizer", href: "/menu/appetizers", icon: LocalDiningRoundedIcon },
  { name: "Bento Box", href: "/menu/bento", icon: BentoRoundedIcon },
  { name: "Chirashi", href: "/menu/chirashi", icon: RiceBowlRoundedIcon },
  { name: "Noodles", href: "/menu/noodles", icon: RamenDiningIcon },
  { name: "Signature Combos", href: "/menu/signature-combos", icon: SetMealIcon },
  { name: "Sushi", href: "/menu/sushi", icon: SetMealRoundedIcon },
  { name: "Drinks", href: "/menu/drinks", icon: LocalDrinkRoundedIcon },
];

export default function NavLinksMenu() {
  const path = usePathname();

  return (
    <div style={{
      width: "80%",
      margin: "auto",
    }}>
      {links.map((menu) => {
        const LinkIcon = menu.icon;
        // console.log(menu.name, menu.href)
        return (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": path == menu.href,
              },
            )}
          >
            <LinkIcon />
            <p className="hidden md:block">{menu.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
