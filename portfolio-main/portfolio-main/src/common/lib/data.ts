import React from 'react';

import archerypic from '@/../public/images/archery.jpeg';
import runnerpic from '@/../public/images/runner.jpeg';
import attendence from '@/../public/images/Attendence.png';

import huffman from '@/../public/images/huffman.jpg';

import netflix from '@/../public/images/netflix.jpeg';

import amazone from '@/../public/images/amazone.jpg';

import rock from '@/../public/images/rock.png';

import currency from '@/../public/images/currency.png';
import codecrux from '@/../public/images/code ceux.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
 import hepta from '@/../public/images/heptaPic.jpg';
// import portfolioImg from '@/../public/images/portfolio.png';
// import auditMasterImg from '@/../public/images/audit-master.png';
// import accountingImg from '@/../public/images/accounting.jpg';
// import archeryPic from '@./..public/images/archeryPic.jpeg';
// import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

export const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achivements" },
  { name: "Contact", id: "contact" },
] as const;


export const studyData = [
  {
    title: 'Matric (Science)',
    location: 'Squadron Leader Masood-ul-Haq (Shaheed) Girls Model Higher Secondary School, Bagh',
    description: 'Percentage: 89.5%',
    icon: React.createElement(BookOpenIcon),
    date: '2016 – 2018',
  },
  {
    title: 'FSC (Pre-Medical)',
    location: 'Orion Model Science College, Bagh AJ',
    description: 'Percentage: 71.2%',
    icon: React.createElement(BookOpenIcon),
    date: '2019 – 2021',
  },
  {
    title: 'BS Software Engineering (7th Semester)',
    location: 'COMSATS University Islamabad, Abbottabad Campus',
    description: 'CGPA: 3.83',
    icon: React.createElement(BookOpenIcon),
    date: '2022 – Present',
  },
] as const;


export const images = {
  archerypic,
  runnerpic,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
  attendence,
  codecrux,
  netflix,
  amazone,
  huffman,
  currency,
  rock
};

export const projectsData = [
  {
  title: 'Hepta',
  description: `A modern frontend travel website built with React. Features elegant layouts, responsive design, and sections for destinations, travel services, and blogs.`,
  tags: ['React', 'HTML', 'CSS', 'JavaScript'],
  category: 'Web Dev',
  imageUrl: hepta, // replace with your imported image
  link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/hepta/hepta', // add GitHub or demo link
},
  {
    title: 'Runner Game',
    description: `An endless runner game built with Unity and C#. Features dynamic obstacles, collision detection, and increasing game difficulty to test player reflexes. Includes sound effects and scoring system.`,
    tags: ['Unity', 'C#', 'Game Development', 'Physics', 'UI', 'Scoring System'],
      category: 'Game Dev',
    imageUrl: runnerpic,
    link: 'https://github.com/codewithferdous/Unity-projects', // Add demo or GitHub link
  },
  {
    title: 'Archery Quest Game',
    description: `A Unity-based archery quest game with two levels of increasing difficulty. Implements physics-based arrow shooting mechanics, scoring, and immersive gameplay. Designed using C# scripting inside Unity.`,
    tags: ['Unity', 'C#', 'Game Development', 'Physics', 'Arrow Mechanics', 'Scoring System'],
      category: 'Game Dev',
    imageUrl: archerypic,
    link: 'https://github.com/codewithferdous/Unity-projects', // Add demo or GitHub link
  },
  {
    title: 'Attendance Management System',
    description: `A web-based system designed for schools and institutions to track student attendance. Includes admin and student panels, authentication, and attendance reports.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    category: 'Web Dev',
    imageUrl:  attendence, // Replace with your image path
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/Html%20Css%20javaScript%20projects/attendance-management-system', // Add demo or GitHub link
  },
  {
    title: 'Amazon Home Page Clone',
    description: `A responsive front-end clone of Amazon’s homepage. Includes navbar, product showcase sections, and grid layouts. Built to practice responsive design.`,
    tags: ['HTML', 'CSS', 'Responsive Design', 'Frontend'],
    category: 'Web Dev',
    imageUrl:  amazone,
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/Html%20Css%20javaScript%20projects/Amazon%20clone',
  },
  {
    title: 'Netflix Home Page Clone',
    description: `Frontend clone of Netflix’s homepage with responsive layouts. Includes hero banner, movie thumbnails, and hover effects to replicate Netflix’s user experience.`,
    tags: ['HTML', 'CSS', 'Frontend', 'Responsive Design', 'Hover Effects'],
    category: 'Web Dev',
    imageUrl:netflix,
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/Html%20Css%20javaScript%20projects/Netflix%20frontend',
  },
  {
    title: 'CodeCrux',
    description: `A React-based platform designed for practicing and managing programming questions. Includes user-friendly UI for browsing, solving, and organizing coding problems.`,
    tags: ['React', 'JavaScript', 'Frontend', 'UI/UX', 'Web Development'],
    category: 'Web Dev',
    imageUrl:  codecrux,
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/codecrux/codecrux',
  },
  {
    title: 'Huffman Coding',
    description: `Java implementation of Huffman Coding for text compression. Demonstrates encoding and decoding algorithms used in file compression utilities. Focuses on data structures and algorithm design.`,
    tags: ['Java', 'Algorithms', 'Data Structures', 'Text Compression'],
    category: 'Data Structure',
    imageUrl:  huffman,
    link: 'https://github.com/codewithferdous/DataStructure/tree/main/HuffmanCoding',
  },
  {
    title: 'Currency Converter',
    description: `A real-time currency converter built with JavaScript and API integration. Fetches live exchange rates and allows users to convert currencies instantly with a clean UI.`,
    tags: ['JavaScript', 'HTML', 'CSS', 'API', 'Frontend'],
    category: 'Web Dev',
    imageUrl: currency, // Replace with your image path
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/Html%20Css%20javaScript%20projects/currencyChanger', // Replace with actual front page/demo link
  },
  {
    title: 'Rock, Paper, Scissors, Fire Game',
    description: `An extended version of the classic Rock-Paper-Scissors game with an additional element 'Fire'. Built with JavaScript, it features interactive gameplay and fun custom rules.`,
    tags: ['JavaScript', 'HTML', 'CSS', 'Game', 'Frontend'],
    category: 'Web Dev',
    imageUrl: rock, // Replace with your image path
    link: 'https://github.com/codewithferdous/WEBFrontEnd_Projects/tree/main/Html%20Css%20javaScript%20projects/Html%20Css%20javaScript%20projects/RockSesiorFire', // Replace with actual front page/demo link
  },
  


] as const;



export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],

  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],

  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
 
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],

  ['', '/svgs/etc.svg'],
] as const;

