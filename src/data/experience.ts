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
        description: "At Mutual of Omaha, I work in Group Insurance Services, managing cloud infrastructure and deployments across both AWS and TKG Kubernetes. I led the team’s migration from Bitbucket and Jenkins to GitHub and GitHub Actions, designing CI/CD pipelines for cloud deployments, pr monitoring, and automated code scanning. I’ve assisted with the tech modernization efforts by migrating legacy Tomcat applications onto Kubernetes and implementing OAuth security using OKTA. Alongside tech modernization work I also particpate in ongoing on-call production support for our many offered services."
    },
    {
        company: "Union Pacific Railroad",
        role: "Project Engineer",
        timeframe: "APR 2021 – FEB 2025",
        description: "As a Project Engineer on Union Pacific’s intermodal systems, I focused on building and integrating the UPGo mobile platform with large-scale terminal automation and logistics systems. I integrated UPGo with PGT automated gating to enable no-stop fast gating for truck drivers, customer reservation platforms to coordinate delivery timing, and Kalmar Widespan crane systems to support automated container handling. While serving as the maintainer of UPGo’s backend services I also oversaw a rapid modernization effort, leading the rewrite of over 150 legacy Java 8 services into Spring Boot Java 17 in under three months. and provided 24/7 on-call support for systems critical to rail operations."
    },
    {
        company: "Techtonic",
        role: "Apprentice Software Engineer",
        timeframe: "OCT 2020 – NOV 2021",
        description: "At Techtonic, I worked as an Apprentice Contractor completing a six month accredited apprenticeship in full stack software development. In addition to structured workshops covering front end and back end technologies, the role required me to work as a contract software developer working with senior developers on real projects. This included building web services, implementing actual features, and contributing to production ready code. The experience provided practical exposure to real world development processes and helped me gain a strong foundation for my career as a software engineer."
    },
];
