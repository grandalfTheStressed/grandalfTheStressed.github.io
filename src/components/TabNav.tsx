import React, { useState, useEffect } from "react";

const sections = ["About", "Experience", "Projects"];

export default function TabNav() {
    const [active, setActive] = useState("About");

    useEffect(() => {
        const contentEl = document.querySelector(".content") as HTMLElement;
        if (!contentEl) return;

        const handleScroll = () => {
            let current = "About";

            sections.forEach((section) => {
                const el = document.getElementById(section.toLowerCase());
                if (el) {
                    const topRelativeToContent = el.offsetTop - contentEl.offsetTop;
                    if (contentEl.scrollTop >= topRelativeToContent - 50) {
                        current = section;
                    }
                }
            });

            setActive(current);
        };

        contentEl.addEventListener("scroll", handleScroll);
        return () => contentEl.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const contentEl = document.querySelector(".content") as HTMLElement;
        const el = document.getElementById(id.toLowerCase());
        if (el && contentEl) {
            const topRelativeToContent = el.offsetTop - contentEl.offsetTop;
            contentEl.scrollTo({
                top: topRelativeToContent,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav className="tab-nav">
            {sections.map((section) => (
                <div
                    key={section}
                    className={`tab ${active === section ? "active" : ""}`}
                    onClick={() => scrollToSection(section)}
                >
                    {section}
                </div>
            ))}
        </nav>
    );
}
