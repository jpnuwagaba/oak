import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-davysGrey py-12 text-white">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={"/assets/logo2.jpg"}
                alt="logo"
                width={100}
                height={100}
              />
              <span className="text-xl font-bold text-white">
                OAK Professions
              </span>
            </div>
          </div>
          <p className="text-middleBlueGreen max-w-md">
            OAK Professions is a premier provider of comprehensive engineering,
            construction, and surveying solutions. Our mission is to deliver
            excellence and innovation, empowering our clients with top-tier
            expertise and exceptional service across all project phases.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <FaXTwitter size={'1.2rem'} fill="#F2972F"/>
            </Link>
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <FaFacebookF size={'1.2rem'} fill="#F2972F"/>
            </Link>
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <FaInstagram size={'1.2rem'} fill="#F2972F"/>
            </Link>
            <Link href="#" aria-label="LinkedIn" prefetch={false}>
              <FaLinkedinIn size={'1.2rem'} fill="#F2972F"/>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-mellowApricot">
              Company
            </h4>
            <nav className="flex flex-col space-y-1">
              <Link
                href="about"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="services"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="projects"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="portfolio"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Portfolio
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-mellowApricot">
              Support
            </h4>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Help Center
              </Link>
              <Link
                href="#"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-middleBlueGreen hover:text-mellowApricot transition-colors"
                prefetch={false}
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
