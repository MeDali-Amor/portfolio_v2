"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TerminalInput = () => {
    const [command, setCommand] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const handleCommand = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        setError("");

        switch (trimmedCmd) {
            case "home":
            case "cd ~":
            case "cd /":
                router.push("/");
                break;
            case "about":
            case "cd about":
                router.push("/about");
                break;
            case "projects":
            case "cd projects":
                router.push("/projects");
                break;
            case "skills":
            case "cd skills":
                router.push("/skills");
                break;
            case "help":
                setError(
                    "Available commands: home, about, projects, skills, help, clear"
                );
                break;
            case "clear":
                setError("");
                break;
            case "":
                break;
            default:
                setError(
                    `Command not found: ${cmd}. Type 'help' for available commands.`
                );
        }
        setCommand("");
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleCommand(command);
    };
    return (
        <div className="sticky bottom-0 border-t border-[#30363d] bg-[#0d1117] p-4">
            {error && (
                <div className="text-[#ff7b72] text-sm mb-2 font-mono">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-[#30a46c] mr-2 font-mono">
                    DalixDev@portfolio:~$
                </span>
                <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    className="bg-transparent border-0 outline-0 text-[#c9d1d9] flex-1 font-mono code-font "
                    placeholder="Type a command & press Enter..."
                    autoFocus
                />
                <span className="text-[#8b949e] ml-2 animate-pulse">|</span>
            </form>
        </div>
    );
};

export default TerminalInput;
