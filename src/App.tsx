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
                        I’m Grant Fields, I'm a creator and life long learner.
                    </p>
                    <p>
                        Currently, I work at Mutual of Omaha as an Engineer I in Group Insurance, specifically Enrollment Services. I manage cloud deployments, provide production support for our software products, and help with tech evolution and migration efforts. Previously, I worked on both the gating and terminal operating systems for the intermodal team at Union Pacific Railroad, contributing to many different automation technologies, customer facing APIs, and internal user interfaces.
                    </p>
                    <p>
                        Along side programming, I also like to create 3D Models, animate, create music, ect. Essentially anything related to video games or sims. As such, anything time I spend programming outside of work is related to that. While I enjoy my work, I dont want to come home from a day of web dev to proceed to do more web dev.           
                    </p>
                    <p>
                        I started programming as a child modding Minecraft and other various video games i was addicted to, and spent most of my teenage years working through every programming course my school offered. Mostly to build tools that would automate my math and physics homework.
                        My formal education is limited; I studied math, physics, and computer science on scholarships at Northern Kentucky University, but 2020 had other plans.
                        Living in rural Kentucky with no reliable internet made remote learning impossible, and dropping early to protect my GPA cost me the scholarships I needed to continue.
                        Before I could find a way back, I landed an apprenticeship as a web developer, and at 19 packed up and moved across the country on my own to chase a career in software.
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
