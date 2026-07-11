'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experienceData } from '@/common/lib/data';
import type { ExperienceItem } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import Image from 'next/image';
import Link from 'next/link';

function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      className="relative flex items-start gap-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Step dot */}
      <div className="absolute left-0 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-pink-600 text-white font-bold shadow-lg z-10">
        {item.companyLogo ? (
          <Image
            src={item.companyLogo}
            alt={item.company}
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        ) : (
          index + 1
        )}
      </div>

      {/* Card */}
      <div className="ml-20 flex-1 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Optional banner image */}
        {item.bannerImage && (
          <div className="relative w-full h-40 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-2xl" style={{ width: 'calc(100% + 3rem)' }}>
            <Image
              src={item.bannerImage}
              alt={`${item.company} banner`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent opacity-60" />
          </div>
        )}

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-xl font-semibold">{item.role}</h3>
            {item.companyWebsite ? (
              <Link
                href={item.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                {item.company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            ) : (
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.company}
              </p>
            )}
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
              {item.duration}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {item.location}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {item.description}
        </p>

        {/* Technology tags */}
        {item.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <li
                key={i}
                className="rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:text-black font-medium"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function WorkExperience() {
  const { ref } = useSectionInView('work-experience');

  return (
    <section
      id="work-experience"
      ref={ref}
      className="w-full scroll-mt-20 py-20 bg-white text-gray-900 dark:bg-black dark:text-white"
    >
      <SectionHeading>Experience</SectionHeading>

      {/* Timeline container */}
      <div className="relative mx-auto max-w-4xl mt-12 px-6">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-12">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
