'use client';

import { useSectionInView } from '@/common/lib/hooks';
import portfolioImg from '@/../public/images/photo.png';
import { smoothScrollTo } from '@/common/lib/utils';
import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const tabs = [
  {
    name: 'Bio',
    content: (
      <p>
        I’m an <strong>AI & ML Engineer</strong> passionate about designing
        intelligent, scalable systems that create real-world impact. My focus
        lies in blending <span className="text-primary">clean code</span>,{' '}
        <span className="text-primary">data-driven insights</span>, and{' '}
        <span className="text-primary">human-centered design</span>.
      </p>
    ),
  },
  {
    name: 'Skills',
    content: (
      <ul className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Machine Learning
        </li>
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Deep Learning
        </li>
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          problem solving
        </li>
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Data Engineering
        </li>
        
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Web Deployment
        </li>
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Game Deployment
        </li>
        <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Database
        </li> <li className="rounded-md bg-gray-100 px-3 py-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
         design & architecture 
        </li>
      </ul>
    ),
  },
 
  {
    name: 'Goals',
    content: (
      <p>
        My mission is to create AI systems that{' '}
        <strong>empower people</strong> and scale responsibly. I aim to
        contribute to impactful projects, research collaborations, and
        open-source communities shaping the future of AI.
      </p>
    ),
  },
];

export default function About() {
  const { ref } = useSectionInView('about', 0.4);
  const [activeTab, setActiveTab] = useState('Bio');

  return (
    <motion.section
  ref={ref}
  id="about"
  className="relative flex w-full flex-col items-center bg-white px-6 py-20 dark:bg-black lg:flex-col lg:py-32"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  {/* Title at Top */}
  <SectionHeading>About Me</SectionHeading>

  {/* Main Layout */}
  <div className="mt-12 flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
    {/* Left Profile Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative h-96 w-80 overflow-hidden rounded-2xl shadow-xl"
    >
      <Image
        src={portfolioImg}
        alt="Profile photo"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute bottom-4 left-4 text-2xl font-bold text-white"
      >
        Ferdous Gulzar
      </motion.h2>
    </motion.div>

    {/* Right Side Tabs */}
    <div className="flex w-full max-w-xl flex-col">
      {/* Tab Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-6 flex gap-6 border-b dark:border-gray-700"
      >
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`pb-2 text-lg font-semibold transition ${
              activeTab === tab.name
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg text-gray-700 dark:text-gray-300"
      >
        {tabs.find((t) => t.name === activeTab)?.content}
      </motion.div>

      {/* CTA */}
      <Link
        href={'contact'}
        onClick={(e) => smoothScrollTo({ e, id: 'contact' })}
        className="mt-8 inline-block"
      >
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: '0px 0px 20px rgba(255, 140, 100, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 
  text-lg font-semibold text-white shadow-lg transition-all 
  hover:scale-105 hover:bg-primary/90 hover:shadow-xl 
  dark:text-black"
>
          Contact Me <span className="text-xl">→</span>
        </motion.button>
      </Link>
    </div>
  </div>

  <SectionDivider />
</motion.section>

  );
}
