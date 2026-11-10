import type { Localized } from "../i18n/ui"

export type ProjectCategory = "web" | "systems" | "networks"

export interface Project {
  id: string
  number: string
  category: ProjectCategory
  title: Localized
  period: Localized
  description: Localized
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
    tech: ["Java", "C", "PostgreSQL", "TCP/UDP", "Scrum"],
    repo: "https://github.com/1241182-AfonsoMachado/air-traffic-management-system-sem4",
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
    repo: "https://github.com/1241182-AfonsoMachado/railway-logistics-management-system-sem3",
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
    tech: ["Cisco Packet Tracer", "VLAN", "OSPF", "DNS", "DHCP"],
    repo: "https://github.com/1241182-AfonsoMachado/airport-campus-network-design-sem4",
    image: "./images/terminal3.png",
    imageAlt: { pt: "Topologia da rede do Terminal 3 no Cisco Packet Tracer", en: "Terminal 3 network topology in Cisco Packet Tracer" },
  },
  {
    id: "railway-game",
    number: "05",
    category: "systems",
    title: { pt: "Simulação de Gestão Ferroviária", en: "Railway Management Simulation" },
    period: { pt: "2.º semestre · 2025", en: "2nd semester · 2025" },
    description: {
      pt: "Simulação de gestão ferroviária em Java e JavaFX com cenários históricos, construção de linhas, compra de locomotivas e representação das redes em grafos para calcular percursos.",
      en: "Railway management Simulation in Java and JavaFX with historical scenarios, railway construction, locomotive purchases and graph-based route calculation.",
    },
    tech: ["Java", "JavaFX", "Grafos", "Dijkstra"],
    repo: "https://github.com/1241182-AfonsoMachado/railway-management-simulator-sem2",
  },
  {
    id: "eigenfaces",
    number: "06",
    category: "systems",
    title: { pt: "Eigenfaces — Reconhecimento Facial", en: "Eigenfaces — Face Recognition System" },
    period: { pt: "1.º semestre · Set. 2024 — Jan. 2025", en: "1st semester · Sep. 2024 — Jan. 2025" },
    description: {
      pt: "Sistema de reconhecimento facial em Java que utiliza operações matriciais, valores e vetores próprios para reconstrução de imagens e distância euclidiana para comparação de rostos.",
      en: "Java face recognition system that uses matrix operations, eigenvalues and eigenvectors for image reconstruction, and Euclidean distance for face comparison.",
    },
    tech: ["Java", "Eigenfaces", "Linear Algebra", "Image Processing"],
    repo: "https://github.com/1241182-AfonsoMachado/eigenfaces-face-recognition-sem1",
  },
]
