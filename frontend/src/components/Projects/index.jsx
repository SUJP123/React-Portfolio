import React from 'react';
import './index.scss';
import Premier from '../../assets/images/NBA-Premier.png';
import House from '../../assets/images/House-Prices.png';
import Chatbot from '../../assets/images/NBA-chatbot.png';
import Study from '../../assets/images/Study-Gears.png';
import Clash from '../../assets/images/Clash.png';

function Projects() {

    const mainProjectList = [
        {
            name: "NBA Premier Stats",
            link: "https://nba-premier-l5kix5t83-sujp123s-projects.vercel.app/",
            git: "https://github.com/SUJP123/NBA_Premier_Stats",
            desc: "NBA Stats Site for Viewing and Predicting Player Stats",
            languages: ["Java", "Python", "JavaScript", "HTML/CSS"],
            tech: ["Spring Boot", "React.js", "PostgreSQL", "Scikit-Learn", "APIs", "WebScraping"],
            img: Premier
        },
        {
            name: "Study Gears",
            link: "https://study-gears-11k9qh3pf-sujp123s-projects.vercel.app/",
            git: "https://github.com/SUJP123/study-gears",
            desc: "Chatbot site to help students study with additional task managing features",
            languages: ["Java", "JavaScript", "HTML/CSS"],
            tech: ["Spring Boot", "React.js", "PostgreSQL", "APIs"],
            img: Study
        },
        {
            name: "Housing Price Predictor",
            link: "",
            git: "https://github.com/SUJP123/Housing_Price_Predictor",
            desc: "Machine Learning Model to predict future housing prices and values in different regions",
            languages: ["Python", "JavaScript", "HTML/CSS"],
            tech: ["Django", "React.js", "Webscraping"],
            img: House
        }
    ];

    const smallerProjects = [
        {
            name: "Your Clash Stats",
            link: "https://urclashstats.fly.dev/",
            git: "https://github.com/SUJP123/UrClashStats",
            desc: "Site for the mobile game Clash Royale to view player stats",
            tech: ["Node.js", "APIs"],
            img: Clash
        },
        {
            name: "NBA Chatbot",
            link: "",
            git: "https://github.com/SUJP123/NBA_ChatBot",
            desc: "Chatbot site to see the latest NBA takes",
            tech: ["Node.js", "APIs", "WebScraping"],
            img: Chatbot
        }
    ];

    return (
        <div className="projects-container">
            <h2>Main Projects</h2>
            <div className="main-projects">
                {mainProjectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.img} alt={project.name} className="project-image" />
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
                        <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
                        <div className="project-links">
                            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a>}
                            <a href={project.git} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
            <br></br>
            <br></br>
            <h2>Smaller Projects</h2>
            <div className="smaller-projects">
                {smallerProjects.map((project, index) => (
                    <div key={index} className="smaller-project-card">
                        <img src={project.img} alt={project.name} className="smaller-project-image" />
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
                        <div className="project-links">
                            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Live Site</a>}
                            <a href={project.git} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
