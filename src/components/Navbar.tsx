import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950 py-2 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" href="/">
          <Image
            src={"/assets/logo2.jpg"}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
            href="/portfolio"
          >
            Portfolio
          </Link>
        </nav>
        <Link href="mailto:oakprofessions@gmail.com" prefetch={false}>
          <Button className="hidden lg:block bg-carrotOrange text-white hover:bg-mellowApricot">
            Contact Us
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-6">
              <Link
                className="flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href="/"
              >
                Home
              </Link>
              <Link
                className="flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href="about"
              >
                About Us
              </Link>
              <Link
                className="flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href="services"
              >
                Services
              </Link>
              <Link
                className="flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href="/projects"
              >
                Projects
              </Link>
              <Link
                className="flex items-center text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href="portfolio"
              >
                Portfolio
              </Link>
              <Link href="mailto:oakprofessions@gmail.com" prefetch={false}>
          <Button className="bg-carrotOrange text-white hover:bg-mellowApricot">
            Contact Us
          </Button>
        </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
