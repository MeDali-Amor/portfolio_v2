import React, { ReactNode } from "react";

const ProjectCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-[#161b22] border [border-color:#30363d]  p-4 rounded-lg text-left hover:cursor-pointer hover:[border-color:#58a6ff] hover:-translate-y-0.5 group transition-all duration-300 ease-in-out">
            {children}
        </div>
    );
};

export default ProjectCard;
