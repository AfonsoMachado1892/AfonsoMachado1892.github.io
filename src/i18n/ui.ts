export type Lang = "pt" | "en"
export type Localized = Record<Lang, string>

const pt = {
  nav: {
    home: "Início", main: "Navegação principal", about: "Sobre", projects: "Projetos", contact: "Contacto",
    themeLight: "Ativar modo claro", themeDark: "Ativar modo escuro", switchLang: "Switch to English",
  },
  hero: {
    kicker: "Portefólio pessoal / 2026",
    introduction: "Olá, sou o",
    rolesLabel: "Áreas de interesse",
    projects: "Conhecer os projetos",
    contact: "Entrar em contacto",
    profileLabel: "Em destaque",
    profileTitle: "À procura de estágio curricular",
    profileTime: "Fevereiro — junho/julho de 2027",
    profileLocation: "ISEP · Porto",
    scroll: "Explorar",
  },
  about: {
    kicker: "01 / Percurso",
    title: "Sobre mim",
    education: "Formação académica",
    expected: "Conclusão prevista em julho de 2027",
    skillsKicker: "02 / Ferramentas e conhecimentos",
    skills: "Competências técnicas",
  },
  projects: {
    kicker: "03 / Trabalho académico",
    title: "Projetos",
    intro: "Alguns dos projetos em que participei durante a licenciatura.",
    all: "Todos", web: "Web / Full-stack", systems: "Software / Sistemas", networks: "Redes",
    filter: "Filtrar projetos por área", code: "Ver repositório", ongoing: "Em desenvolvimento",
    contribution: "A minha participação", aria: "Projetos académicos",
  },
  contact: {
    kicker: "04 / Vamos falar",
    subject: "Contacto",
    intro: "Estou disponível para conversar sobre oportunidades de estágio curricular e desenvolvimento de software.",
    copied: "Email copiado", copy: "Copiar email", email: "Enviar email",
    availability: "Disponível a partir de fevereiro de 2027",
  },
  footer: { built: "Desenvolvido com React, TypeScript e Vite.", top: "Voltar ao início" },
}

const en: typeof pt = {
  nav: {
    home: "Home", main: "Main navigation", about: "About", projects: "Projects", contact: "Contact",
    themeLight: "Switch to light mode", themeDark: "Switch to dark mode", switchLang: "Mudar para português",
  },
  hero: {
    kicker: "Personal portfolio / 2026",
    introduction: "Hi, I'm",
    rolesLabel: "Areas of interest",
    projects: "Explore projects",
    contact: "Get in touch",
    profileLabel: "Currently",
    profileTitle: "Looking for a curricular internship",
    profileTime: "February — June/July 2027",
    profileLocation: "ISEP · Porto",
    scroll: "Explore",
  },
  about: {
    kicker: "01 / Background", title: "About me", education: "Education",
    expected: "Expected graduation in July 2027", skillsKicker: "02 / Tools and knowledge",
    skills: "Technical skills",
  },
  projects: {
    kicker: "03 / Academic work", title: "Projects",
    intro: "Some of the projects I have worked on during my degree.",
    all: "All", web: "Web / Full-stack", systems: "Software / Systems", networks: "Networking",
    filter: "Filter projects by area", code: "View repository", ongoing: "In development",
    contribution: "My contribution", aria: "Academic projects",
  },
  contact: {
    kicker: "04 / Let's talk", subject: "Contact",
    intro: "I am available to discuss curricular internship opportunities and software development.",
    copied: "Email copied", copy: "Copy email", email: "Send email",
    availability: "Available from February 2027",
  },
  footer: { built: "Built with React, TypeScript and Vite.", top: "Back to top" },
}

export const ui = { pt, en }
