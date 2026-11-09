import type { Localized } from "../i18n/ui"

export type ProjectCategory = "web" | "systems" | "networks"

export interface Project {
  id: string
  number: string
  category: ProjectCategory
  title: Localized
  period: Localized
  description: Localized
  contribution?: Localized
  tech: string[]
  repo?: string
  image?: string
  imageAlt?: Localized
  ongoing?: boolean
}

export const projects: Project[] = [
  {
    id: "laprizza",
    number: "01",
    category: "web",
    title: { pt: "LaPrizza — Gestão de Restauração", en: "LaPrizza — Restaurant Management" },
    period: { pt: "5.º semestre · Set. 2026 — Presente", en: "5th semester · Sep. 2026 — Present" },
    description: {
      pt: "Aplicação Full-stack para gestão de restauração, desenvolvida com Java, Spring Boot, React, TypeScript e MongoDB. Inclui APIs REST, autenticação e persistência de dados, seguindo princípios de DDD e Onion Architecture.",
      en: "Full-stack restaurant management application developed with Java, Spring Boot, React, TypeScript and MongoDB. Includes REST APIs, authentication and data persistence, applying DDD and Onion Architecture principles.",
    },
    contribution: {
      pt: "Participei no desenvolvimento de APIs REST e desempenhei funções de Scrum Master, com responsabilidades no planeamento e acompanhamento do trabalho da equipa.",
      en: "I contributed to REST API development and served as Scrum Master, with responsibilities in planning and monitoring the team's work.",
    },
    tech: ["Java", "Spring Boot", "React", "TypeScript", "MongoDB"],
    ongoing: true,
  },
  {
    id: "air-traffic",
    number: "02",
    category: "systems",
    title: { pt: "Sistema de Gestão de Tráfego Aéreo", en: "Air Traffic Management System" },
    period: { pt: "4.º semestre · Fev. — Jul. 2026", en: "4th semester · Feb. — Jul. 2026" },
    description: {
      pt: "Sistema de gestão e simulação de tráfego aéreo com Java, C e PostgreSQL, envolvendo comunicação TCP/UDP, princípios de engenharia de software e testes automatizados.",
      en: "Air traffic management and simulation system using Java, C and PostgreSQL, involving TCP/UDP communication, software engineering principles and automated testing.",
    },
    contribution: {
      pt: "Desempenhei o papel de Scrum Master durante o segundo sprint.",
      en: "I served as Scrum Master during the second sprint.",
    },
    tech: ["Java", "C", "PostgreSQL", "TCP/UDP", "Scrum"],
    repo: "https://github.com/AfonsoMachado1892/Sistema_Gestao_Trafego_Aereo-SEM4",
  },
  {
    id: "railway-logistics",
    number: "03",
    category: "systems",
    title: { pt: "Sistema de Gestão de Logística Ferroviária", en: "Railway Logistics Management System" },
    period: { pt: "3.º semestre · Set. 2025 — Jan. 2026", en: "3rd semester · Sep. 2025 — Jan. 2026" },
    description: {
      pt: "Solução de gestão de logística ferroviária desenvolvida com Java, C, Assembly RISC-V, SQL e PL/SQL. Aplicação de algoritmos, estruturas de dados e bases de dados relacionais.",
      en: "Railway logistics management solution developed with Java, C, RISC-V Assembly, SQL and PL/SQL. Applied algorithms, data structures and relational databases.",
    },
    tech: ["Java", "C", "Assembly RISC-V", "SQL", "PL/SQL"],
    repo: "https://github.com/AfonsoMachado1892/Sistema_Gestao_Logistica_Ferroviaria-sem3",
  },
  {
    id: "airport-network",
    number: "04",
    category: "networks",
    title: { pt: "Rede de um Campus Aeroportuário", en: "Airport Campus Network" },
    period: { pt: "4.º semestre · Fev. — Mai. 2026", en: "4th semester · Feb. — May 2026" },
    description: {
      pt: "Desenho e simulação de uma rede para um campus aeroportuário no Cisco Packet Tracer, com VLANs, endereçamento IPv4, routing OSPF e serviços DNS, DHCP e VoIP.",
      en: "Design and simulation of an airport campus network in Cisco Packet Tracer, covering VLANs, IPv4 addressing, OSPF routing and DNS, DHCP and VoIP services.",
    },
    contribution: {
      pt: "Trabalhei na infraestrutura do Terminal 3, na integração do campus e fui Scrum Master no primeiro sprint.",
      en: "I worked on Terminal 3 infrastructure and campus integration, and served as Scrum Master during the first sprint.",
    },
    tech: ["Cisco Packet Tracer", "VLAN", "OSPF", "DNS", "DHCP"],
    image: "./images/terminal3.png",
    imageAlt: { pt: "Topologia da rede do Terminal 3 no Cisco Packet Tracer", en: "Terminal 3 network topology in Cisco Packet Tracer" },
  },
  {
    id: "railway-game",
    number: "05",
    category: "systems",
    title: { pt: "Jogo de Simulação de Gestão Ferroviária", en: "Railway Management Simulation Game" },
    period: { pt: "2.º semestre · 2025", en: "2nd semester · 2025" },
    description: {
      pt: "Jogo de gestão ferroviária em Java e JavaFX com cenários históricos, construção de linhas, compra de locomotivas e representação das redes em grafos para calcular percursos.",
      en: "Railway management game in Java and JavaFX with historical scenarios, railway construction, locomotive purchases and graph-based route calculation.",
    },
    contribution: {
      pt: "Participei nas funcionalidades de listagem de estações, construção de linhas ferroviárias e compra de locomotivas.",
      en: "I contributed to station listing, railway construction and locomotive purchasing features.",
    },
    tech: ["Java", "JavaFX", "Grafos", "Dijkstra"],
  },
]
