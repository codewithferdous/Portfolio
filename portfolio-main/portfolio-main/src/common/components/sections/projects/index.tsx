"use client";

import React, { useState, useMemo } from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { projectsData } from "@/common/lib/data";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.25);

  const [category, setCategory] = useState<"All" | string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Dynamic categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];
  }, []);

  // Filtered projects based on category and search
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white px-6 md:px-12 lg:px-24"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between my-8 gap-4 w-full">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                category === cat
                  ? "bg-[#ffcbb4] dark:bg-[#ddbea9] text-black"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat} (
              {cat === "All"
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat).length}
              )
            </motion.button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search by project name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ffcbb4] dark:focus:ring-[#ddbea9] transition w-full sm:w-64"
        />
      </div>

      {/* Projects Grid */}
      <motion.div
        className="flex flex-col gap-6 my-12 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
              >
                <Project {...project} />
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No projects found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <SectionDivider />
    </section>
  );
}
