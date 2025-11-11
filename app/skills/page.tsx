import ProjectCard from "../components/Card/ProjectCard";
import { skillCategories } from "../content/data";

const Skills = () => {
    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold gradient-text mb-4">
                        Technical Skills
                    </h1>
                    <p className="text-[#8b949e] text-lg">
                        My technical expertise and tools I work with
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <ProjectCard key={index}>
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="text-2xl">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-semibold text-[#58a6ff]">
                                    {category.title}
                                </h3>
                            </div>
                            <p className="text-[#8b949e] text-sm mb-6">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`${skill.color} px-3 py-1 rounded-full text-sm font-medium`}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </ProjectCard>
                    ))}
                </div>

                <div className="mt-16">
                    <ProjectCard>
                        <div className="text-[#8b949e] mb-4">
                            $ skills --list --experience
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <div className="text-[#30a46c] mb-2">
                                    Languages:
                                </div>
                                <div className="text-[#c9d1d9] space-y-1">
                                    <div>→ JavaScript/TypeScript</div>
                                    <div>→ Python</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-[#58a6ff] mb-2">
                                    Frameworks:
                                </div>
                                <div className="text-[#c9d1d9] space-y-1">
                                    <div>→ React/Next.js</div>
                                    <div>→ Node.js/Express</div>
                                    <div>→ Python/Django</div>
                                    <div>→ Python/FastAPI</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-[#bc8cff] mb-2">
                                    Tools:
                                </div>
                                <div className="text-[#c9d1d9] space-y-1">
                                    <div>→ Git/GitHub</div>
                                    <div>→ Docker</div>
                                    <div>→ VS Code</div>
                                    <div>→ Postman</div>
                                </div>
                            </div>
                        </div>
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
};

export default Skills;
