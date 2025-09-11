'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { studyData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';

export default function Experience() {
  const { ref } = useSectionInView('experience');

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 py-20 bg-white text-gray-900 dark:bg-black dark:text-white"
    >
      <SectionHeading>Education</SectionHeading>

      {/* Roadmap container */}
      <div className="relative mx-auto max-w-4xl mt-12">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-12">
          {studyData.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start gap-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Step dot */}
              <div className="absolute left-0 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 dark:from-purple-500 dark:to-pink-600 text-white font-bold shadow-lg">
                {index + 1}
              </div>

              {/* Card */}
              <div className="ml-20 flex-1 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {item.location}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-300">
                  {item.date}
                </p>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center mt-16">
        <SectionDivider />
      </div>
    </section>
  );
}
