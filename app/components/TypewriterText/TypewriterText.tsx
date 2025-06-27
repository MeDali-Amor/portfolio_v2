"use client";
import { useEffect, useState } from "react";

const TypewriterText = ({
    text,
    delay = 100,
    className = "",
}: {
    text: string;
    delay?: number;
    className?: string;
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);
    return (
        <span className={className}>
            {displayedText}
            {currentIndex < text.length && (
                <span className="animate-pulse text-[#30a46c]">|</span>
            )}
        </span>
    );
};

export default TypewriterText;
