"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import TerminalInput from "./TerminalInput";
import Link from "next/link";

const getPageTitle = (pathname: string) => {
    switch (pathname) {
        case "/":
            return "home";
        case "/about":
            return "about";
        case "/projects":
            return "projects";
        case "/skills":
            return "skills";
        default:
            return "portfolio";
    }
};

const TerminalLayout = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    return (
        <div className="h-screen bg-[#0d1117] flex flex-col p-2">
            <div className="border [border-color:#30363d] [background-image:linear-gradient(135deg,_#0d1117_0%,_#161b22_100%)]  rounded-lg overflow-hidden max-w-7xl mx-auto flex-1 flex flex-col m-4  w-full">
                {/* Terminal Header */}
                <div className="bg-[#21262d] border-b [border-color:#30363d] px-4 py-3 flex items-center justify-between ">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28ca42]"></div>
                    </div>
                    <div className="text-sm text-[#8b949e] font-mono">
                        DalixDev@portfolio:~/{getPageTitle(pathname)}
                    </div>
                    <div className="flex items-center space-x-4 text-[#8b949e]">
                        <span className="text-xs">
                            <Link href={"/"}>Home</Link>
                        </span>
                    </div>
                </div>

                {/* Terminal Content - takes up remaining space */}
                <div className="terminal-content flex-1 overflow-auto max-w-screen">
                    {children}
                </div>
                <TerminalInput />
            </div>
        </div>
    );
};

export default TerminalLayout;
