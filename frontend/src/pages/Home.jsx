import React from 'react';
import '../styles/Home.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../components/AnimateLetters';
import LogoTitle from '../assets/images/logo-s.png';
import Logo from '../components/Logo';



function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [ 'S', 'U', 'J', 'A', 'Y', ' ', 'P', 'A', 'T', 'E', 'L' ]
    const jobArray = ['A', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ',
        'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='home'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <span className={`${letterClass} _13`}> </span>
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _13`}>'m</span>
                        <br></br>
                         <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={11}
                        />
                        <br/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={17}
                        />
                    </h1>
                    <h2>Software Engineer / Biomedical Engineer / UNC Class of 2026 </h2>
                    <Link to="/dashboard" className="flat-button">
                        ABOUT ME
                    </Link>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo/>
            </div>

            {/*  <Loader type="pacman" /> */}
        </>
    )
}

export default Home;