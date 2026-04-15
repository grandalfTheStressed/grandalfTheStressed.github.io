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
        description: "Develop event-driven microservices to process group insurance enrollments, with a focus on large scale technical modernization initiatives and platform migrations."
    },
    {
        company: "Union Pacific Railroad",
        role: "Project Engineer",
        timeframe: "APR 2021 – FEB 2025",
        description: "Built backend services, customer-facing APIs, and internal user interfaces supporting terminal management operations, and contributed to the architecture and design of gate operating systems, as well as the super massive widespan crane systems deployed around Chicago"
    },
    {
        company: "Techtonic",
        role: "Apprentice Software Engineer",
        timeframe: "OCT 2020 – NOV 2021",
        description: "Completed a six-month accredited apprenticeship in full-stack software development, working as a contractor delivering software across the stack."
    },
];
