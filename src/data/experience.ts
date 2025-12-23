export type Experience = {
    company: string;
    role: string;
    timeframe: string;
    description?: string;
}

export const experience: Experience[] = [
    {
        company: "Mutual of Omaha",
        role: "Software Engineer",
        timeframe: "FEB 2025 – Present",
        description: "At Mutual of Omaha, I work as a Software Engineer in Group Services. I drove the team’s migration from Bitbucket and Jenkins to GitHub and GitHub Actions, designing new CI/CD workflows for deployments, pull request monitoring, and code vulnerability scanning, as well as creating custom tools to handle enterprise-specific quirks. I piloted and assisted with the migration of the team’s app-mesh architecture to a hub-and-spoke model and optimized critical insurance enrollment and management system queries. I also assisted with migrating legacy applications to TKG Kubernetes and providing ongoing on-call production support, diagnosing and resolving issues across AWS and TKG environments."
    },
    {
        company: "Union Pacific Railroad",
        role: "Project Engineer",
        timeframe: "APR 2021 – FEB 2025",
        description: "At Union Pacific, I supported critical intermodal operations, providing 24/7 on-call support for terminal, gating, and load-planning systems. I documented incidents, investigated root causes, and implemented long-term solutions to ensure system stability. I contributed to modernizing legacy systems, including migrating Java 8 Spring applications to Java 17 with Spring Boot, upgrading Angular 1.8 applications to Angular 16+, and moving services to cloud-based APIs and event messaging systems. I contributed to efforts to migrate terminal operations to a fully containerized, cloud-ready infrastructure. Additionally, I trained new hires, mentored interns, and developed key features such as automated driver notification systems, and a custom DOT reporting tool as well as assisting with the integration of the widespan crane system in Joliet Illinois and the PGT automated gating systems."
    },
    {
        company: "Techtonic",
        role: "Apprentice Software Engineer",
        timeframe: "OCT 2020 – NOV 2021",
        description: "At Techtonic, I worked as an Apprentice Contractor completing a six month accredited apprenticeship in full stack software development. In addition to structured workshops covering front end and back end technologies, the role required me to work as a contract software developer collaborating with senior developers on real projects. This included building web services, implementing actual features, and contributing to production ready code. The experience provided practical exposure to real world development processes and helped me gain a strong foundation in software engineering."
    },
];