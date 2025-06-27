import Link from "next/link";
import TypewriterText from "./components/TypewriterText/TypewriterText";

export default function Home() {
    return (
        <div className="p-8 pb-0">
            <div className="mb-8">
                <pre className="text-[#9ece6a] text-sm font-mono leading-tight">
                    {`
███╗   ███╗███████╗██████╗      █████╗ ██╗     ██╗         █████╗ ███╗   ███╗ ██████╗ ██████╗ 
████╗ ████║██╔════╝██╔══██╗    ██╔══██╗██║     ██║        ██╔══██╗████╗ ████║██╔═══██╗██╔══██╗
██╔████╔██║█████╗  ██║  ██║    ███████║██║     ██║        ███████║██╔████╔██║██║   ██║██████╔╝
██║╚██╔╝██║██╔══╝  ██║  ██║    ██╔══██║██║     ██║        ██╔══██║██║╚██╔╝██║██║   ██║██╔══██╗
██║ ╚═╝ ██║███████╗██████╔╝    ██║  ██║███████╗██║        ██║  ██║██║ ╚═╝ ██║╚██████╔╝██║  ██║
╚═╝     ╚═╝╚══════╝╚═════╝     ╚═╝  ╚═╝╚══════╝╚═╝        ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝      `}
                </pre>
            </div>
            <div className="mb-8">
                <div className="text-[#8b949e] mb-2 text-sm">$ whoami</div>
                <TypewriterText
                    text="Senior JavaScript/Typescript Developer |  Software Architecture Enthusiast"
                    delay={50}
                    className="text-[#c9d1d9] text-lg"
                />
            </div>
            <div className="mb-12">
                <div className="text-[#8b949e] mb-2 text-sm">
                    $ cat hello.txt
                </div>
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                    <TypewriterText
                        text="Hello, World! 👋"
                        delay={100}
                        className="text-[#30a46c] text-xl font-semibold"
                    />
                </div>
            </div>

            {/* Available Commands */}
            <div className="mb-8">
                <div className="text-[#8b949e] mb-4 text-sm">
                    $ ls -la ~/commands
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {links.map((cmd) => (
                        <Link href={cmd.url} key={cmd.url}>
                            <div className="bg-[#161b22] border [border-color:#30363d]  p-4 rounded-lg text-left hover:cursor-pointer hover:[border-color:#58a6ff] hover:-translate-y-0.5 group transition-all duration-300 ease-in-out">
                                <div className="flex items-center space-x-3">
                                    <span className="text-[#8b949e]">$</span>
                                    <code
                                        className={`${cmd.color} font-mono group-hover:text-[#58a6ff] transition-colors`}
                                    >
                                        {cmd.url}
                                    </code>
                                </div>
                                <p className="text-[#8b949e] text-sm mt-1 ml-6">
                                    {cmd.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Instructions */}
            <div className="text-center text-[#8b949e] text-sm mb-8">
                <p>
                    Click any command above or type it manually in the terminal
                    below
                </p>
            </div>
        </div>
    );
}

const links = [
    {
        url: "about",
        description: "Learn more about me",
        color: "text-[#58a6ff]",
    },
    {
        url: "projects",
        description: "Browse my projects",
        color: "text-[#bc8cff]",
    },
    {
        url: "skills",
        description: "View technical skills",
        color: "text-[#30a46c]",
    },
    // {
    //     url: "help",
    //     description: "Show available commands",
    //     color: "text-[#ff7b72]",
    // },
];
