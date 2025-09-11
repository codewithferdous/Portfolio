"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const isHome = activeSection === "home"; // check if we’re on Home

  return (
    <header className="relative z-[99]">
      <nav className="fixed left-1/2 top-6 -translate-x-1/2">
        {/* Background bar - always light on Home, theme-based otherwise */}
        <motion.div
          className={`absolute inset-0 -z-10 rounded-full border shadow-md backdrop-blur-md
            ${
              isHome
                ? "border-[#f4f3ee]/40 bg-white/70"
                : "border-[#f4f3ee]/40 bg-white/70 dark:bg-black/50"
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <ul className="flex items-center justify-center gap-5 px-6 py-2 text-[0.9rem] font-medium uppercase tracking-wide">
          {links.map((link) => (
            <motion.li
              className={`relative flex items-center justify-center ${
                isHome ? "text-black" : "text-black dark:text-white"
              }`}
              key={link.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 transition"
                href={link.id}
                onClick={(e) => {
                  smoothScrollTo({ e, id: link.id });
                  setActiveSection(link.id);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.id === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
