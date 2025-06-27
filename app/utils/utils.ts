export const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
        "Next.js": "skill-badge-blue",
        "React.js": "skill-badge-blue",
        TypeScript: "skill-badge-blue",
        "Node.js": "skill-badge",
        Django: "skill-badge",
        Flask: "skill-badge",
        Go: "skill-badge-purple",
        MongoDB: "skill-badge-purple",
        SQLite: "skill-badge-purple",
        Azure: "skill-badge-orange",
    };
    return colors[tech] || "skill-badge";
};
