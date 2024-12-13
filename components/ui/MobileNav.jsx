'use client';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Trigger to open the sheet */}
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-cyan-500" />
      </SheetTrigger>

      {/* Content of the sheet */}
      <SheetContent className="flex flex-col px-4">
        {/* Header */}
        <div className="mt-32 mb-12 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Assem <span className="text-cyan-500">...</span>
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center gap-8 overflow-y-auto max-h-[70vh]">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname ? 'text-cyan-500' : ''
              } text-xl capitalize hover:text-cyan-500 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
