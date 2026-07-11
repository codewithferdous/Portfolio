'use client';

import type { ExperienceItem } from '@/common/lib/data';

import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { experienceData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

function ExperienceCard({
  item,
  index,
  onBannerClick,
}: {
  item: ExperienceItem;
  index: number;
  onBannerClick: (item: ExperienceItem) => void;
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
      <div className="absolute left-0 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white shadow-lg dark:from-purple-500 dark:to-pink-600">
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
      <div className="ml-20 flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
        {/* Optional banner image */}
        {item.bannerImage && (
          <button
            type="button"
            onClick={() => onBannerClick(item)}
            className="relative -mx-6 -mt-6 mb-4 block h-40 w-full cursor-zoom-in overflow-hidden rounded-t-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-900"
            style={{ width: 'calc(100% + 3rem)' }}
            aria-label={`Open ${item.company} certificate`}
          >
            <Image
              src={item.bannerImage}
              alt={`${item.company} banner`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-60 dark:from-gray-900" />
          </button>
        )}

        {/* Header row */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{item.role}</h3>
            {item.companyWebsite ? (
              <Link
                href={item.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-cyan-600 hover:underline dark:text-cyan-400"
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
        <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
          {item.description}
        </p>

        {/* Technology tags */}
        {item.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <li
                key={i}
                className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
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

function CertificateLightbox({
  item,
  onClose,
}: {
  item: ExperienceItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item.bannerImage) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.company} certificate viewer`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col gap-4"
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 16 }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Close certificate viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <Image
            src={item.bannerImage}
            alt={`${item.company} certificate`}
            fill
            sizes="100vw"
            priority
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkExperience() {
  const { ref } = useSectionInView('work-experience');
  const [selectedCertificate, setSelectedCertificate] =
    useState<ExperienceItem | null>(null);

  return (
    <section
      id="work-experience"
      ref={ref}
      className="w-full scroll-mt-20 bg-white py-20 text-gray-900 dark:bg-black dark:text-white"
    >
      <SectionHeading>Experience</SectionHeading>

      {/* Timeline container */}
      <div className="relative mx-auto mt-12 max-w-4xl px-6">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700" />

        <div className="flex flex-col gap-12">
          {experienceData.map((item, index) => (
            <ExperienceCard
              key={index}
              item={item}
              index={index}
              onBannerClick={setSelectedCertificate}
            />
          ))}
        </div>
      </div>

      <div className="mt-16 flex w-full justify-center">
        <SectionDivider />
      </div>

      {selectedCertificate && (
        <CertificateLightbox
          item={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
