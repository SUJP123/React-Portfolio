import React, {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.scss';
import AnimatedLetters from "../components/AnimateLetters";
import {FaGithub, FaLinkedin , FaInstagram} from 'react-icons/fa';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const headArray = [ 'C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];
    const formHead = ['W', 'a', 'n', 't', ' ', 't','o', ' ', 's', 'e', 'n', 'd',
        ' ', 'a', ' ', 'm', 'e', 's', 's', 'a', 'g', 'e', '?']

    const otherHeader = ['O', 't', 'h', 'e', 'r', ' ', 'C', 'o', 'n', 't', 'a', 'c', 't', 's']
    const socialHeader = ['O', 'r', ' ', 'C', 'h', 'e', 'c', 'k', ' ', 'o', 'u', 't', ' ',
        'm', 'y', ' ', 'S', 'o', 'c', 'i', 'a', 'l', 's']

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_prsv5dt', 'template_xndu78g', formData, 'SQdvuxalt-EGpVOHK')
            .then((result) => {
                alert('Message Sent Successfully');
            }, (error) => {
                alert('An error occurred, Please try again');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
        <div>
            <br></br>
            <br></br>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={headArray}
                    idx={11}
                />
                <br/>
            </h1>
            <br></br>
            <br></br>
        </div>
    <div className="contact-container">
        <div className='left'>
        <div className='other-header'>
            <h2>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={otherHeader}
                    idx={11}
                />
                <br/>
            </h2>

        <div className='other-contacts'>
            <p>School Email : suj@unc.edu</p>
            <p>Personal Email : sujaypatel04@gmail.com</p>
            <p>Phone : +1 (704) 747-6844</p>
        </div>
        </div>

        <div className='socials-header'>
            <h2>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={socialHeader}
                    idx={11}
                />
                <br/>
            </h2>

            <div className='icon-list'>
                <FaGithub size={70} onClick={() => window.open("https://github.com/SUJP123")}/>
                <FaLinkedin size={70} onClick={() => window.open("https://www.linkedin.com/in/sujay-patel-2047572a3/")} />
            <FaInstagram size={70} onClick={() => window.open("https://www.instagram.com/sujay_patel04/")} />
        </div>
        </div>
        </div>


        <div className='form-container'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={formHead}
                        idx={11}
                    />
                    <br/>
                    <br></br>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button className="flat-button" type="submit">Send Message</button>
            </form>
            </div>
        </div>
            </div>
    );
};

export default Contact;