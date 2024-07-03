import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';

function Dashboard() {

    return (
        <>
            <div className="about-section">
                <About />
            </div>
            <div className="project-section">
                <Projects />
            </div>
        </>
    )
}

export default Dashboard;