import type { Localized } from "../i18n/ui"

export const profile = {
  name: "Afonso Machado",
  fullName: "Afonso Marques Machado",
  initials: "AM",
  roles: {
    pt: ["Desenvolvimento Backend", "Desenvolvimento Full-stack", "Engenharia de Software"],
    en: ["Backend Development", "Full-stack Development", "Software Engineering"],
  },
  headline: {
    pt: "Estudante de Engenharia Informática no ISEP",
    en: "Computer Engineering student at ISEP",
  },
  tagline: {
    pt: "Procuro um estágio curricular com início previsto para fevereiro de 2027.",
    en: "Looking for a curricular internship starting in February 2027.",
  },
  about: {
    pt: [
      "Estou no 3.º ano da Licenciatura em Engenharia Informática no Instituto Superior de Engenharia do Porto (ISEP), com conclusão prevista para julho de 2027.",
      "Ao longo do curso participei em projetos de desenvolvimento de aplicações, sistemas, bases de dados e redes. Tenho especial interesse em Backend e Full-stack e gosto de perceber como as diferentes partes de uma aplicação funcionam em conjunto.",
      "Trabalhei em equipa com a metodologia Scrum e desempenhei funções de Scrum Master em projetos académicos. Gostaria de aplicar o que aprendi, conhecer novas ferramentas e continuar a desenvolver as minhas competências em contexto profissional.",
    ],
    en: [
      "I am a third-year Computer Engineering student at Instituto Superior de Engenharia do Porto (ISEP), with graduation expected in July 2027.",
      "During my degree, I have worked on application development, systems, databases and networking projects. I am particularly interested in Backend and Full-stack development, and in understanding how the different parts of an application work together.",
      "I have worked in teams using Scrum and served as Scrum Master in academic projects. I would like to apply what I have learned, discover new tools and continue developing my skills in a professional environment.",
    ],
  },
  education: {
    degree: {
      pt: "Licenciatura em Engenharia Informática",
      en: "Bachelor's Degree in Computer Engineering",
    },
    institution: "Instituto Superior de Engenharia do Porto (ISEP)",
    period: "2024 — 2027",
  },
  skills: [
    { id: "languages", title: { pt: "Linguagens", en: "Languages" } as Localized, items: ["Java", "C", "JavaScript", "TypeScript", "SQL", "PL/SQL", "Assembly RISC-V", "Prolog"] },
    { id: "backend", title: { pt: "Backend", en: "Backend" } as Localized, items: ["Spring Boot", "REST APIs", "Spring Security", "JPA"] },
    { id: "frontend", title: { pt: "Frontend", en: "Frontend" } as Localized, items: ["React", "JavaFX", "HTML", "CSS", "Three.js", "Vite"] },
    { id: "databases", title: { pt: "Bases de dados", en: "Databases" } as Localized, items: ["PostgreSQL", "MongoDB", "Oracle Database", "H2"] },
    { id: "tools", title: { pt: "Ferramentas e testes", en: "Tools & testing" } as Localized, items: ["Git", "GitHub", "Maven", "Postman", "JUnit", "Vitest", "React Testing Library"] },
    { id: "methods", title: { pt: "Metodologias", en: "Methodologies" } as Localized, items: ["Scrum", "OOP", "DDD", "TDD", "Onion Architecture", "Clean Architecture"] },
  ],
  email: "afonsomachado1892@gmail.com",
  github: "https://github.com/1241182-AfonsoMachado",
  linkedin: "https://www.linkedin.com/in/afonso-am-machado/",
} as const
