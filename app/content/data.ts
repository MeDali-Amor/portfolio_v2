export const projects = [
    {
        id: 1,
        folder: "next-auth-temp",
        name: "Next Auth Template",
        links: {
            github: "https://github.com/MeDali-Amor/next-auth-temp",
            demo: "",
        },
        description:
            "Opinionated authentication template built with Next.js (App Router), NextAuth (v5), Prisma and PostgreSQL. Implements credential + social (Google) auth, email verification, password reset, and backend two-factor authentication (2FA) flows.",
        technologies: [
            "Next.js",
            "NextAuth v5",
            "Prisma",
            "PostgreSQL",
            "TypeScript",
        ],
    },
];

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: "🎨",
        description: "Creating beautiful and interactive user interfaces",
        skills: [
            { name: "React", color: "skill-badge-blue" },
            { name: "Next.js", color: "skill-badge-blue" },
            { name: "TypeScript", color: "skill-badge-blue" },
            { name: "Redux", color: "skill-badge-blue" },
            { name: "React Query", color: "skill-badge-blue" },
            { name: "Tailwind CSS", color: "skill-badge-blue" },
            { name: "Material ui", color: "skill-badge-blue" },
            { name: "Socket.io", color: "skill-badge-blue" },
        ],
    },
    {
        title: "Backend Development",
        icon: "⚙️",
        description: "Building robust and scalable server-side applications",
        skills: [
            { name: "Node.js", color: "skill-badge" },
            { name: "Express.js", color: "skill-badge" },
            { name: "Meteor", color: "skill-badge" },
            { name: "Prisma", color: "skill-badge" },
            { name: "Socket.io", color: "skill-badge" },
        ],
    },
    {
        title: "Databases",
        icon: "🗄️",
        description: "Data storage and management solutions",
        skills: [
            { name: "PostgreSQL", color: "skill-badge-purple" },
            { name: "MongoDB", color: "skill-badge-purple" },
            { name: "Redis", color: "skill-badge-purple" },
        ],
    },
    {
        title: "DevOps",
        icon: "☁️",
        description: "Deploying and CI/CD",
        skills: [
            { name: "Docker", color: "skill-badge-orange" },
            { name: "Ngnix", color: "skill-badge-orange" },
            { name: "Git", color: "skill-badge-orange" },
        ],
    },
];
