export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-center px-6 py-6 text-center text-gray-600 dark:bg-darkBg dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      <section className="max-w-[32rem]">
        <p className="text-sm mb-2">
          &copy; {currentYear} <span className="font-semibold text-black dark:text-white">Ferdous Gulzar</span>. 
          All rights reserved.
        </p>
        <p className="text-xs leading-relaxed">
          Crafted with <span className="text-red-500"></span> to share ideas and connect.  
          Let’s collaborate and create something meaningful together.
        </p>
      </section>
    </footer>
  );
}
