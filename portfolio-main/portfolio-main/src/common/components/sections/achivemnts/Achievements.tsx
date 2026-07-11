'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

import { useSectionInView } from '@/common/lib/hooks';

// src/components/ui/card.tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      {...props}
      className={`rounded-2xl border shadow-sm overflow-hidden transition-all duration-500
        bg-white border-gray-300 shadow-md
        dark:bg-gradient-to-br dark:from-gray-900 dark:to-black dark:border-gray-700 dark:shadow-2xl
        ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ('Studies' | 'Projects' | 'Activities' | 'Internship' | 'Skills')[];
  link?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: 1,
    title: 'Certificate of Excellence in Database',
    description:
      'Won the Inter-Subject Project Competition in the subject of Database at COMSATS University Islamabad, Abbottabad Campus, on 10th January 2025.',
    image: './images/Certificate of Excellence in Database.jpg',
    category: ['Studies', 'Projects'],
  },
  {
    id: 3,
    title: 'Campus Honor Roll Award in Fifth Semester',
    description:
      'Recognized in the Campus Honor Roll for securing a perfect SGPA of 3.88/4.0 in the Fifth Semester (Fall 2024).',
    image: './images/Campus Honor Roll Award in Fifth Semester.jpg',
    category: ['Studies'],
  },
  {
    id: 2,
    title: 'Campus Honor Roll Award in 3rd Semester',
    description:
      'Recognized in the Campus Honor Roll for securing a perfect SGPA of 4.0/4.0 in the 3rd Semester (Fall 2023).',
    image: './images/Campus Honor Roll Award in 3rd Semester.png',
    category: ['Studies'],
  },
  {
    id: 5,
    title: 'Certificate of Excellence in Computer Network',
    description:
      'Runner-up in the Inter-Subject Project Competition in Computer Network on 10th January 2025.',
    image: './images/Certificate of Excellence in Computer Network.png',
    category: ['Studies', 'Projects'],
  },
  {
    id: 19,
    title: 'Campus Honor Roll Certificate 6th Semester',
    description:
      'Awarded by COMSATS University Islamabad (CUI), Abbottabad Campus in recognition of outstanding academic performance. Achieved a perfect SGPA of 4.0/4.0 in the 6th Semester (Spring 2025) of the Bachelor of Science in Software Engineering program, reflecting dedication, consistency, and academic excellence.',
    image: './images/campus.jpeg',
    category: ['Skills', 'Studies'],
  },
];

type Category =
  | 'All'
  | 'Studies'
  | 'Projects'
  | 'Activities'
  | 'Internship'
  | 'Skills';
const categories: (Category | 'All')[] = [
  'All',
  'Studies',
  'Projects',
  'Activities',
  'Internship',
  'Skills',
];

// 🔹 Reusable Card Component
function AchievementCard({
  ach,
  onImageClick,
}: {
  ach: Achievement;
  onImageClick: (img: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="group"
    >
      <Card
        onClick={() => onImageClick(ach.image)}
        className="cursor-pointer hover:shadow-cyan-500/40 dark:hover:shadow-purple-500/40"
      >
        <div className="relative w-full h-56 overflow-hidden">
          <motion.img
            src={ach.image}
            alt={ach.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
        </div>

        <CardContent>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
            {ach.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {ach.description}
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
            {ach.category.join(', ')}
          </p>

          {ach.link && (
            <a
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg shadow-md hover:scale-105 transition"
              onClick={(e) => e.stopPropagation()}
            >
              🔗 View Project
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const { ref } = useSectionInView('achivements');

  const getCount = (cat: Category) =>
    cat === 'All'
      ? achievementsData.length
      : achievementsData.filter((a) => a.category.includes(cat)).length;

  const activeCategories = categories.filter(
    (cat) => cat === 'All' || getCount(cat) > 0,
  );

  const filteredAchievements =
    filter === 'All'
      ? achievementsData
      : achievementsData.filter((a) => a.category.includes(filter));

  const visibleAchievements = filteredAchievements.slice(0, visibleCount);

  return (
    <section
      id="achivements"
      ref={ref}
      data-section="achivements"
      aria-label="Achievements Section"
      className="py-20 relative overflow-hidden scroll-mt-20 
  bg-white text-gray-900 
  dark:bg-black dark:text-white"
    >
      {/* Neon floating glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 
  text-black dark:text-white"
        >
          My Achievements
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {activeCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setVisibleCount(6);
              }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2
  ${
    filter === cat
      ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
  }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>{cat}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/10 dark:bg-black/50 border border-cyan-400/40 text-cyan-600 dark:text-cyan-300 shadow-inner">
                {getCount(cat)}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {visibleAchievements.map((ach) => (
              <AchievementCard
                key={ach.id}
                ach={ach}
                onImageClick={setSelectedImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < filteredAchievements.length && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setVisibleCount((p) => p + 6)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:shadow-cyan-400/30 transition-all"
            >
              Show More
            </motion.button>
          </div>
        )}
      </div>

      {/* Image Viewer */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 bg-black/80 dark:bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-[80%] h-[80%] mt-16 rounded-2xl shadow-2xl flex items-center justify-center p-6
        bg-white border border-gray-300
        dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-black dark:border-gray-700"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded-xl shadow-lg hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              ✕ Close
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-full object-contain rounded-xl shadow-cyan-500/30"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
