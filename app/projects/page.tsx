import { Github } from "lucide-react";
import ProjectCard from "../components/Card/ProjectCard";
import { projects } from "../content/data";
import { getTechColor } from "../utils/utils";

const Projects = () => {
    return (
        <div className="p-8 pb-0">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <div className="text-[#8b949e] mb-4">
                        $ ls -la ~/projects
                    </div>
                    <p className="text-[#8b949e]">Web and systems enthusiast</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl text-[#7aa2f7] mb-6">Projects</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-xl">
                                            {project.folder}
                                        </span>
                                        <h3 className="text-lg font-semibold text-[#c9d1d9]">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <div className="flex space-x-2">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                target="_blank"
                                                href={project.links.demo}
                                                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                                            >
                                                <span className="text-lg">
                                                    🔗
                                                </span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-[#8b949e] text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`${getTechColor(
                                                    tech
                                                )} px-2 py-1 rounded text-xs font-medium`}
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </ProjectCard>
                        ))}
                    </div>
                </div>

                {/* Terminal Output */}
                <div className="project-card p-4 rounded-lg text-sm mb-8">
                    <div className="text-[#8b949e]">
                        $ echo &quot;Thanks for checking out my projects!&quot;
                    </div>
                    <div className="text-[#30a46c] mt-2">
                        Thanks for checking out my projects!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
