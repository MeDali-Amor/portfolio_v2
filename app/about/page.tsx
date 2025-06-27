import Card from "../components/Card/Card";

const About = () => {
    return (
        <div className="p-8 pb-0">
            <div className="w-full">
                <div className="mb-8">
                    <h1 className="text-[#7aa2f7] text-2xl font-mono mb-4">
                        About Me
                    </h1>
                </div>
                <Card>
                    <div className=" space-y-6 text-sm">
                        <div className="text-[#7aa2f7] mb-4 font-mono">
                            $ cat about.txt
                        </div>
                        {/* Personal Info */}
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">👨‍💻</span>
                            <p className="text-[#9ece6a] font-mono">
                                I&apos;m a{" "}
                                <span className="text-[#89ddff]">
                                    Full-Stack Developer
                                </span>{" "}
                                <span className="text-[#9ece6a]">
                                    based in Zarzis, Tunisia, passionate about
                                    crafting modern web applications
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">⚙️</span>
                            <p className="text-[#9ece6a] font-mono">
                                I work mainly with{" "}
                                <span className="text-[#89ddff]">
                                    TypeScript, React, Node.js, and MongoDB &
                                    SQL
                                </span>{" "}
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">👾</span>
                            <p className="text-[#9ece6a] font-mono">
                                Currently I&apos;m diving deep into{" "}
                                <span className="text-[#89ddff]">
                                    functional and reactive programming
                                    architecture
                                </span>{" "}
                                and{" "}
                                <span className="text-[#89ddff]">
                                    software architecture
                                </span>{" "}
                                and integrating these ideas into real-world
                                systems
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">👾</span>
                            <p className="text-[#9ece6a] font-mono">
                                I&apos;ve built real-time reactive tools, data
                                aggregation engines, and admin dashboards for
                                education and enterprise platforms
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">🎓</span>
                            <p className="text-[#9ece6a] font-mono">
                                🎓 I have a Master&apos;s in{" "}
                                <span className="text-[#89ddff]">
                                    Quantum Physics
                                </span>{" "}
                                — I bring a scientific mindset and
                                problem-solving rigor to software design
                            </p>
                        </div>

                        {/* Experience Section */}
                        <div className="mt-8">
                            <h3 className="text-[#89ddff] font-mono mb-4">
                                Experience:
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-[#9ece6a] font-mono">
                                        •
                                    </span>
                                    <div>
                                        <p className="text-[#c9d1d9] font-mono">
                                            <span className="text-[#bc8cff]">
                                                Full-Stack Developer
                                            </span>{" "}
                                            <span className="text-[#8b949e]">
                                                @
                                            </span>{" "}
                                            <span className="text-[#89ddff]">
                                                Omegup{" "}
                                            </span>
                                            (2023 - now)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-[#9ece6a] font-mono">
                                        •
                                    </span>
                                    <div>
                                        <p className="text-[#c9d1d9] font-mono">
                                            <span className="text-[#bc8cff]">
                                                Full-Stack Developer
                                            </span>{" "}
                                            <span className="text-[#8b949e]">
                                                @
                                            </span>{" "}
                                            <span className="text-[#89ddff]">
                                                Bimatech{" "}
                                            </span>
                                            (2022 - 2023)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <span className="text-[#9ece6a] font-mono">
                                        •
                                    </span>
                                    <div>
                                        <p className="text-[#c9d1d9] font-mono">
                                            Graduate of GoMyCode Full-Stack
                                            Bootcamp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default About;
