"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import { sendEmail } from "@/common/utils/actions/send-email";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("contact");

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center 
                 bg-gradient-to-b from-white via-gray-50 to-white 
                 dark:from-darkBg dark:via-[#0f0f0f] dark:to-darkBg 
                 transition-colors duration-500"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get in Touch</SectionHeading>

      <div className="w-[min(100%,48rem)] px-6">
        <p className="mb-12 mt-6 text-gray-700 dark:text-gray-300 text-lg">
          Feel free to reach out through email, WhatsApp, GitHub, or by filling out the form below.
        </p>

        {/* Contact Info Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 mb-16">
          {[
            {
              icon: <FaEnvelope className="text-3xl text-blue-500 mb-3" />,
              title: "Email",
              text: "ferdousgulzar543@gmail.com",
              link: "mailto:ferdousgulzar543@gmail.com",
            },
            {
              icon: <FaWhatsapp className="text-3xl text-green-500 mb-3" />,
              title: "WhatsApp",
              text: "+92 311 7530303",
              link: "https://wa.me/923117530303",
            },
            {
              icon: <FaGithub className="text-3xl text-gray-700 dark:text-gray-200 mb-3" />,
              title: "GitHub",
              text: "github.com/codewithferdous",
              link: "https://github.com/codewithferdous",
            },
            {
              icon: <FaMapMarkerAlt className="text-3xl text-red-500 mb-3" />,
              title: "Location",
              text: "Abbottabad, Pakistan",
              link: "",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              className="flex flex-col items-center justify-center rounded-xl 
                         border border-gray-200 dark:border-white/10 
                         bg-white dark:bg-white/5 
                         shadow-md hover:shadow-xl 
                         hover:scale-105 transition-all duration-300 
                         p-8 min-h-[180px] w-full text-center"
            >
              {item.icon}
              <p className="font-semibold text-gray-800 dark:text-white text-lg mb-1">
                {item.title}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400 break-words">
                {item.text}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 mx-auto w-full max-w-lg"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 rounded-lg border border-gray-300 dark:border-white/10 
                       bg-gray-50 dark:bg-white/10 px-4 text-gray-800 
                       dark:text-white placeholder-gray-500 dark:placeholder-gray-400 
                       focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
                       focus:outline-none transition-all"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="my-3 h-52 resize-none rounded-lg border border-gray-300 
                       dark:border-white/10 bg-gray-50 dark:bg-white/10 
                       p-4 text-gray-800 dark:text-white 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 
                       focus:outline-none transition-all"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
