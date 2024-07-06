"use client";

import { useState, useEffect } from "react";
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTopButton(true);
      } else {
        setShowScrollToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ display: showScrollToTopButton ? "block" : "none" }}
      className="fixed cursor-pointer bottom-10 right-10 shadow transition rounded-sm transition ease-in-out duration-300 bg-persianGreen"
    >
      <img
        className="w-8 md:w-12"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy11cCI+PHBhdGggZD0ibTUgMTIgNy03IDcgNyIvPjxwYXRoIGQ9Ik0xMiAxOVY1Ii8+PC9zdmc+"
        alt=""
      />
    </div>
  );
};

export default ScrollToTop;
