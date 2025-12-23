import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import "./App.css";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
            <Sidebar
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(prev => !prev)}
            />

            <main className="content" onClick={() => setSidebarOpen(false)}>
                <Section id="about" title="About">
                    <p>
                        I’m Grant Fields, a software engineer who enjoys learning new technologies and building projects for fun. I started programming as a child by modding Minecraft and spent my teenage years exploring every programming course I could find, mostly to build tools that automated homework. I enjoy experimenting with projects as a way to challenge myself and see what I can learn.
                    </p>
                    <p>                        
                        I don't have a formal college education, I did study computational physics on a scholarship at NKU, but living in a rural area without internet during COVID made attending classes impossible, forcing me to pause my studies and unfortunately lose my scholarships. During that time, I built my own (mostly) CPU based 3D rendering engine, which helped me land my first software development job as an apprentice with Techtonic at 19.
                    </p>
                    <p>
                        Currently, I work at Mutual of Omaha as an Engineer I in Group Services. I manage cloud deployments, improve critical systems, and provide production support for our software products. Previously, I worked on the gating and terminal operating systems for the intermodal team at Union Pacific Railroad, contributing to system modernization and their migration to fully stateless, containerized cloud infrastructure, the first railroad in the U.S. to do so. My experience includes over 15 years of self-taught programming, an apprenticeship with Techtonic, and just over 5 years of hands-on work experience with web services, infrastructure, and dev ops.
                    </p>
                    <p>
                        I spend most of my free time working in Godot, Unity, and Blender, and as such any showcases I have will solely consist of things I've done there that I think are cool.                    
                    </p>
                </Section>

                <Section id="experience" title="Experience">
                    {experience.map((exp, idx) => (
                        <div key={idx} className="experience-card">
                            <div className="exp-time">{exp.timeframe}</div>
                            <div className="exp-details">
                                <h3>{exp.company}</h3>
                                <p>{exp.role}</p>
                                {exp.description && (
                                    <p className="exp-summary">{exp.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </Section>

                <Section id="projects" title="Projects">
                    {projects.map((p, idx) => (
                        <div key={idx} className="project-card">
                            <h3>{p.title}</h3>
                            {p.description.split("\n").map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                            {p.media && (
                                <div className="project-media">
                                    {p.media.map((src, i) => (
                                        <img key={i} src={src} alt={`${p.title} screenshot ${i + 1}`} onClick={() => setActiveImage(src)}/>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </Section>
            </main>
            {activeImage && (
                <div className="image-modal" onClick={() => setActiveImage(null)}>
                    <img src={activeImage} alt="" />
                </div>
            )}
        </div>
        
    );
}

export default App;
