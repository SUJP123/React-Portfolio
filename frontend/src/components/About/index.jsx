import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimateLetters';
import {
    faJava,
    faNodeJs,
    faPython,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
//import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import {ProgressBar} from "react-bootstrap";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        { name: 'Java', level: 45 , color: 'red'},
        { name: 'Python', level: 60 , color: 'yellow'},
        { name: 'C++', level: 55 , color: 'brown'},
        { name: 'Swift', level: 40 , color: 'blue'},
        { name: 'Spring Boot', level: 45 , color: 'darkgreen'},
        { name: 'React.js', level: 60 , color: 'cornflowerblue'},
        { name: 'Node.js', level: 50, color: 'darkseagreen'},
        { name: 'PostgreSQL', level: 40 , color: 'orange'},
    ];

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I'm a very ambitious Computer Science and Biomedical Engineering Major
                        at UNC Chapel Hill. I'm passionate and actively pursuing a career in
                        software and biomedical engineering, with a goal in the future to work
                        with medical software and devices.
                    </p>
                    <p align="LEFT">
                        I'm very confident, curious, social, and love to work with others, especially
                        when it comes to projects.
                    </p>
                    <p>
                        Aside from school and tech, if I were to describe my interests in one sentence,
                        I'd say that I'm very interested in sports, comics, anime, and
                        am very passionate in bodybuilding and lifting in general.
                    </p>
                    <br></br>
                    <br></br>
                </div>

                <div className='tech-stack'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['T', 'e', 'c', 'h', '', 'S', 't', 'a', 'c', 'k']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className="tech-container">
                    <div className="text-zone">
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['F', 'a', 'v', 'o', 'r', 'i', 't', 'e', ' ',
                                    'T', 'e', 'c', 'h', 'n ', 'o', 'l', 'o', 'g', 'i', 'e', 's']}
                                idx={15}
                            />
                        </h1>
                        <div className="skills">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill">
                                    <p>{skill.name}</p>
                                    <div className="progress-bar">
                                        <div
                                            className="progress"
                                            style={{width: `${skill.level}%`,
                                                backgroundColor: `${skill.color}`}}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="stage-cube-cont">
                        <div className="cubespinner">
                            <div className="face1">
                                <FontAwesomeIcon icon={faJava} color="#DD0031"/>

                            </div>
                            <div className="face2">
                                <FontAwesomeIcon icon={faHtml5} color="#F06529"/>

                            </div>
                            <div className="face3">
                                <FontAwesomeIcon icon={faNodeJs} color="#28A4D9"/>

                            </div>
                            <div className="face4">
                                <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>

                            </div>
                            <div className="face5">
                                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>

                            </div>
                            <div className="face6">
                                <FontAwesomeIcon icon={faPython} color="#EC4D28"/>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            {/* <Loader type="pacman" /> */}
        </>
    )
}

export default About;
