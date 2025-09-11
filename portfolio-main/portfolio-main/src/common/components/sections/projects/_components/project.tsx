'use client';

import { useRef } from 'react';
import { projectsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [20, -10]);

  // Hover variants for card
  const cardHover = {
    hover: { scale: 1.03, boxShadow: '0 20px 50px rgba(255,203,180,0.4)' },
  };

  // Hover variants for image
  const imageHoverVariants = {
    hover: { scale: 1.08, rotate: 2, y: -5, transition: { type: 'spring', stiffness: 200 } },
    rest: { scale: 1, rotate: 0, y: 0, transition: { duration: 0.3 } },
  };

  // Text fade-in
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Tag hover
  const tagHover = {
    hover: { scale: 1.1, backgroundColor: '#ffcbb4', color: '#000' },
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-6 last:mb-0 sm:mb-10"
    >
      <Link href={link} target="_blank">
        <motion.section
          className="relative max-w-[52rem] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-darkBg shadow-lg transition"
          whileHover="hover"
          variants={cardHover}
        >
          {/* Text */}
          <motion.div
            className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h3 className="text-2xl font-bold uppercase">{title}</h3>
            <p className="mt-2 leading-relaxed">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <motion.li
                  key={index}
                  whileHover="hover"
                  variants={tagHover}
                  className="cursor-pointer rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:text-black transition"
                  onClick={() => alert(`You clicked on tag: ${tag}`)}
                >
                  {tag}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageHoverVariants}
            initial="rest"
            whileHover="hover"
            className="absolute -right-40 top-8 hidden w-[31.25rem] rounded-t-lg sm:block sm:group-even:-left-40 sm:group-even:right-[initial]"
            style={{ y: yParallax }}
          >
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              className="rounded-lg object-cover shadow-xl transition-transform hover:shadow-2xl"
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-[#ffcbb4] opacity-30"
              animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.section>
      </Link>
    </motion.div>
  );
}
