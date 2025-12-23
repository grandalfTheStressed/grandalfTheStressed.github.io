import React from "react";
import TabNav from "./TabNav";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Sidebar({ isOpen, onToggle }) {
    return (
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <button className="sidebar-toggle" onClick={onToggle}>
                <span className="arrow" />
            </button>

            <div className="sidebar-wrapper">
                <div className="sidebar-title">
                    <div className="profile">
                        <h1>Grant Joseph Fields</h1>
                        <p>Software Engineer - Cloud, Infrastructure, and Tools</p>
                    </div>

                    <TabNav />
                </div>

                <div className="contacts">
                    <a href="mailto:grantfields0725@gmail.com" target="_blank" rel="noreferrer">
                        {
                            // @ts-ignore
                            <FiMail size={24} /> as any
                        }
                    </a>

                    <a href="https://www.linkedin.com/in/grant-fields/" target="_blank" rel="noreferrer">
                        {
                            // @ts-ignore
                            <FaLinkedin size={24} /> as any
                        }
                    </a>
                    <a href="https://github.com/grandalfTheStressed" target="_blank" rel="noreferrer">
                        {
                            // @ts-ignore
                            <FaGithub size={24} /> as any
                        }
                    </a>
                </div>
            </div>
        </aside>
    );
}
