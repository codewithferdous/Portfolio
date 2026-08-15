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

function Card({ children, className = '', ...props }: CardProps) {
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

function CardContent({
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

export interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ('Studies' | 'Projects' | 'Activities' | 'Internship' | 'Skills')[];
  link?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 21,
    title: 'FYP-26 Competition Participation',
    description:
      'Awarded by COMSATS University Islamabad, Abbottabad Campus in recognition of active participation, dedication, and valuable contribution in the FYP-26 Competition.',
    image: './images/fyp.jpeg',
    category: ['Studies', 'Skills'],
  },
  {
    id: 9,
    title: 'Certificate of Appreciation - Internship in MERN Stack',
    description:
      'Awarded by Ezitech Learning Institute in recognition of successfully completing a two-month MERN Stack internship, demonstrating dedication, technical skills, professional commitment, and valuable contribution to assigned projects.',
    image: './images/Internship in MERN Stack.jpg',
    category: ['Internship', 'Skills'],
  },
  {
    id: 13,
    title: 'Certificate of Completion - Beginner Web Development Bootcamp',
    description:
      'Awarded by GDGOC, COMSATS University Abbottabad Campus in recognition of successfully completing the Beginner Web Development Bootcamp, demonstrating dedication, commitment, and valuable participation throughout the program.',
    image: './images/Beginner Web Development Bootcamp.jpg',
    category: ['Skills', 'Studies'],
  },
  {
    id: 18,
    title: 'Workshop on Deep Learning and NLP',
    description:
      'Awarded by the Robotics Club, CUIATD in recognition of successfully participating in a workshop on Deep Learning and Natural Language Processing, demonstrating interest, dedication, and valuable engagement with modern AI technologies.',
    image: './images/nlp .jpg',
    category: ['Studies', 'Skills'],
  },
  {
    id: 21,
    title: 'Certificate of Recognition - Students’ Week Spring 2026',
    description:
      'Awarded by CUIATD in recognition of serving as a Lead Event Organizer during Students’ Week Spring 2026, demonstrating leadership, event coordination, dedication, and valuable contribution to the successful organization of university activities.',
    image: './images/soft.jpeg',
    category: ['Activities'],
  },
  {
    id: 21,
    title: 'Demystifying Deep Learning Workshop',
    description:
      'Awarded in recognition of successfully completing the four-day Demystifying Deep Learning – An Autumn Workshop, demonstrating dedication and gaining valuable knowledge of deep learning concepts, neural networks, and modern artificial intelligence applications.',
    image: './images/deep learning.jpeg',
    category: ['Skills'],
  },

  {
    id: 16,
    title: 'CCNA: Introduction to Networks',
    description:
      'Awarded by Cisco Networking Academy in recognition of successfully completing CCNA: Introduction to Networks, demonstrating foundational knowledge of networking, IP addressing, subnetting, routing, switching, and network security concepts.',
    image: './images/cnn.jpg',
    category: ['Studies', 'Skills'],
  },
  {
    id: 6,
    title: 'Certificate of Accomplishment - Rosetta Stone Foundations',
    description:
      'Awarded in recognition of successfully completing Rosetta Stone Foundations for English (American), covering Levels 1 through 5 and demonstrating dedication, commitment, and continued development of English language skills.',
    image: './images/Rosetta Stone Foundations.jpg',
    category: ['Studies', 'Skills'],
  },
  {
    id: 15,
    title: 'Certificate of Internship - Front-End Developer',
    description:
      'Awarded in recognition of successfully completing a Front-End Developer internship, demonstrating technical proficiency in HTML, CSS, JavaScript, and React.js, along with professional dedication, collaboration, and valuable contribution throughout the internship.',
    image: './images/Front-End Developer.jpg',
    category: ['Internship', 'Skills'],
  },
  {
    id: 7,
    title: 'Certificate of Course Completion - Spoken English',
    description:
      'Awarded by NS Training in recognition of successfully completing the Spoken English course on 30th July 2023, demonstrating dedication, commitment, and continued development of effective English communication skills.',
    image: './images/Spoken English.jpg',
    category: ['Studies', 'Skills'],
  },

  {
    id: 8,
    title: 'Certificate of Appreciation - PNP Internship Program',
    description:
      'Awarded by the Press Network of Pakistan in recognition of remarkable contribution during the PNP Internship Program (Winter 2023–24), demonstrating dedication, professional commitment, active participation, and valuable contribution throughout the internship.',
    image: './images/PNP Internship Program.jpg',
    category: ['Internship'],
  },
  {
    id: 10,
    title:
      'Certificate of Participation - Global Workshop on Teamwork and Leadership',
    description:
      'Awarded by Nobel Learning PBC in recognition of successfully participating in the Global Workshop on Teamwork and Leadership on 24th May 2025, demonstrating dedication, active participation, and valuable development of teamwork and leadership skills.',
    image: './images/mm.jpg',
    category: ['Activities', 'Skills', 'Internship'],
  },
  {
    id: 14,
    title: 'Certificate of Completion - Introduction to AI',
    description:
      'Awarded by Google through Coursera in recognition of successfully completing the Introduction to AI course, demonstrating foundational knowledge of artificial intelligence concepts, applications, real-world use cases, and emerging AI technologies.',
    image: './images/INTRO to ai.jpeg',
    category: ['Skills'],
  },
  {
    id: 20,
    title: 'Maximize Productivity With AI Tools',
    description:
      'Awarded by Google through Coursera in recognition of successfully completing Maximize Productivity With AI Tools, demonstrating knowledge of AI-powered tools, productivity techniques, workflow optimization, and practical applications for academic and professional tasks.',
    image: './images/INTRO to ai.jpeg',
    category: ['Skills'],
  },
  {
    id: 11,
    title: 'Certificate of Participation - COMSATS Students Week Fall 2024',
    description:
      'Awarded by COMSATS University Islamabad, Abbottabad Campus in recognition of serving as Marketing Coordinator during Students Week Fall 2024, demonstrating leadership, communication, coordination, dedication, and valuable contribution to university activities.',
    image: './images/COMSATS Students Week Fall 2024.jpg',
    category: ['Activities'],
  },
  {
    id: 12,
    title: 'Certificate of Appreciation - Aadrish Society Contribution',
    description:
      'Awarded by COMSATS University Islamabad, Abbottabad Campus in recognition of valuable contribution and dedicated efforts towards the Aadrish Society, demonstrating commitment, teamwork, creativity, and active participation in university activities.',
    image: './images/Aadrish Society Contribution.jpg',
    category: ['Activities'],
  },
  {
    id: 17,
    title: 'University Convocation – Usher Certificate',
    description:
      'Awarded by CUIATD in recognition of voluntary service as an Usher during the University Convocation, demonstrating organizational, communication, teamwork, guest management, and valuable contribution to the successful coordination of the event.',
    image: './images/ushers_img.jpg',
    category: ['Activities'],
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
function CertificateCard({
  cert,
  onImageClick,
}: {
  cert: Certificate;
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
        onClick={() => onImageClick(cert.image)}
        className="cursor-pointer hover:shadow-cyan-500/40 dark:hover:shadow-purple-500/40"
      >
        <div className="relative w-full h-56 overflow-hidden">
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
        </div>

        <CardContent>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
            {cert.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {cert.description}
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
            {cert.category.join(', ')}
          </p>

          {cert.link && (
            <a
              href={cert.link}
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

export default function CertificatesSection() {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const { ref } = useSectionInView('certificates');

  const getCount = (cat: Category) =>
    cat === 'All'
      ? certificatesData.length
      : certificatesData.filter((c) => c.category.includes(cat)).length;

  const activeCategories = categories.filter(
    (cat) => cat === 'All' || getCount(cat) > 0,
  );

  const filteredCertificates =
    filter === 'All'
      ? certificatesData
      : certificatesData.filter((c) => c.category.includes(filter));

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);

  return (
    <section
      id="certificates"
      ref={ref}
      data-section="certificates"
      aria-label="Certificates Section"
      className="py-20 relative overflow-hidden scroll-mt-20 
  bg-white text-gray-900 
  dark:bg-black dark:text-white"
    >
      {/* Neon floating glow */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.05),transparent_50%)]"
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
          My Certificates
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
            {visibleCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onImageClick={setSelectedImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visibleCount < filteredCertificates.length && (
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
