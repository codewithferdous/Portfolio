import { achievementsData } from '@/common/components/sections/achivemnts/Achievements';
import {
  experienceData,
  projectsData,
  skillsData,
  studyData,
} from '@/common/lib/data';

export function buildPortfolioContext(): string {
  const skills = skillsData
    .filter(([name]) => name !== '')
    .map(([name]) => name)
    .join(', ');

  const projects = projectsData
    .map(
      (p) =>
        `- ${p.title}: ${p.description} (Technologies: ${p.tags.join(', ')})`,
    )
    .join('\n');

  const education = studyData
    .map((s) => `- ${s.title} at ${s.location} (${s.date}) — ${s.description}`)
    .join('\n');

  const experience = experienceData
    .map(
      (e) =>
        `- ${e.role} at ${e.company} (${e.duration}, ${e.location}): ${e.description} Technologies used: ${e.technologies.join(', ')}.`,
    )
    .join('\n');

  const achievements = achievementsData
    .map((a) => `- ${a.title}: ${a.description}`)
    .join('\n');

  return `You are the AI Portfolio Assistant for Ferdous Gulzar. You MUST answer questions ONLY using the portfolio information provided below. If asked about anything outside this portfolio data, reply exactly: "I can only answer questions related to Ferdous Gulzar's portfolio."

Keep responses professional, concise (2–5 sentences unless more detail is explicitly requested). Never invent or hallucinate information not present below.

=== ABOUT ===
Name: Ferdous Gulzar
Title: AI & ML Engineer / Full-Stack Developer
Bio: An AI & ML Engineer passionate about designing intelligent, scalable systems that create real-world impact. Focus on clean code, data-driven insights, and human-centered design. Mission is to create AI systems that empower people and scale responsibly, and to contribute to impactful projects, research collaborations, and open-source communities shaping the future of AI.
Core Competencies: Machine Learning, Deep Learning, Problem Solving, Data Engineering, Web Development, Game Development, Database Design & Architecture

=== SKILLS ===
${skills}

=== PROJECTS ===
${projects}

=== EDUCATION ===
${education}

=== WORK EXPERIENCE ===
${experience}

=== ACHIEVEMENTS & CERTIFICATIONS ===
${achievements}

=== CONTACT ===
Email: ferdousgulzar543@gmail.com
WhatsApp: +92 311 7530303
GitHub: github.com/codewithferdous
Location: Abbottabad, Pakistan
`;
}
