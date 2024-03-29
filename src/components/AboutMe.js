import {React, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faGraduationCap, faListCheck } from '@fortawesome/free-solid-svg-icons'

import '../stylesheets/aboutme.css';


function AboutMe() {
    const [intro, setIntro] = useState(true);
    const [education, setEducation] = useState(false);
    const [workHistory, setWorkHistory] = useState(false);
    const [interests, setInterests] = useState(false);

    function changeState(fn, state) {
        setIntro(false);
        setEducation(false);
        setWorkHistory(false);
        setInterests(false);
        fn(state);
    }

    const introText = [];
    const introText2 = [];
    introText.push("I'm a programmer by profession based out of New York City. ");
    introText.push('My passion for technology, blockchain and finance build the foundation for my desire to keep exploring new advancements in the tech space. ');
    introText.push("I specialize in full stack, salesforce and blockchain development. ");
    introText.push("I aspire to build scalable and customizable solutions that can help businesses manage their customer relationships more effectively.")
    introText2.push("I am keen on connecting with like minded people. ");
    introText2.push("Head to the contact me section and feel free to drop me an email or connect via my social media handles. ");
    introText2.push("Looking forward to connecting with you all. 🍻");


    const educationInfo = [  
        {
            university: 'New York University',
            degree: 'MS - Computer Science',
            grade: 'GPA: 3.81/4',
            years: 'Sept 21 - May 23',
            courses: 'Blockchain, Cloud Computing, Big Data, Algorithms, Machine Learning, Databases, Artificial Intelligence'
        },
        {
            university: 'Pune University',
            degree: 'BE - Computer Engineering',
            grade: 'GPA: 8.72/10',
            years: 'Aug 15 - Jun 19',
            courses: 'Discrete Mathematics, Web Technologies, Algorithms, Computer Architecture, Software Engineering, Object Oriented Programming'
        }
    ];

    const educationItems = [];
    educationInfo.forEach(education => {
        educationItems.push(
            <div key={education.years} className="education-one mx-2 my-3 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column">
                    <span className="university-name">
                        {education.university}
                    </span>
                    <span className="university-degree">
                        {education.degree}
                    </span>
                    <span className="university-grade">
                        {education.grade}
                    </span>
                    <span className="university-courses">
                        Courses: {education.courses}
                    </span>
                </div>
                <div>
                    <span className="years-attended">
                        {education.years}
                    </span>
                </div>
            </div>
        )
    })

    const workInfo = [
        {
            organization: 'LedgerPrime',
            role: 'Defi Developer Intern',
            description: [
                'Developed liquidator bot for compound finance and mango markets with flash loans and flashbots integration.',
                'Studied the terra/USD debacle events by analyzing the terra on chain data, curve transactions and wormhole activities.',
            ],
            duration: 'Jun 22 - Aug 22'
        },
        {
            organization: 'Larsen & Toubro Infotech',
            role: 'Salesforce Developer',
            description: [
                'Developed highly customizable, data intensive applications with complex UI on the salesforce platform.',
                'Optimized application performance by restructuring the components, achieving a 60% reduction in initial load and component rendering time.',
                'Implemented a master data management solution with mulesoft and salesforce integration.'
            ],
            duration: 'Aug 19 - Aug 21'
        },
        {
            organization: 'Hasura Technologies',
            role: 'Product Development Fellow',
            description: [
                'Developed a static Twitter Clone using React Native.',
                'Developed Amazon Alexa Skills for Indian Premier League(IPL) dataset using node js.',
            ],
            duration: 'Dec 17 - Feb 18'
        }
    ]

    const workItems = [];
    workInfo.forEach((work, index) => {
        let tasks = [];
        work.description.forEach((task, index) => {
            tasks.push(
                <li key={index}>{task}</li>
            )
        })
        workItems.push(
            <div key={index} className="mx-2 my-2">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="organization-name">
                            {work.organization}
                        </span>
                        <span className="years-attended">
                            {work.duration}
                        </span>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span className="position">{work.role}</span>
                    <span className="description">
                        <ul>
                            {tasks}
                        </ul>
                    </span>
                </div>
            </div>
        )
    })

    const interestsText = [];
    interestsText.push('Indulge in sporting activities like Badminton, Soccer, Cricket, Running, Tennis etc. in my free time and whenever I need to refresh. 🏅');
    interestsText.push('Try out different cuisines. 🍴');
    interestsText.push('Watch movies. 🎦');
    interestsText.push('Listen to songs. 🎵');
    interestsText.push('Travel to places. 🗺️');
    interestsText.push('Play board and video games. 🎲');
    interestsText.push('Invest. ₿');

    const interestsItems = [];
    interestsText.forEach((interest, index) => {
        interestsItems.push(
            <li key={index}>{interest}</li>
        )
    }) 
        
    return (
        <div className="aboutme-section d-flex flex-column" id="aboutme">
            <span className="aboutme-heading">ABOUT ME</span>
            <div className="aboutme-container-style row">
                <div className="aboutme-left-section d-flex flex-row px-0 shadow-lg col-md-2 col-lg-2 col-xl-2">
                    <div className="d-flex flex-column bg-new text-white">
                        <span className="icons-span">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className="icons-span">
                            <FontAwesomeIcon icon={faGraduationCap} />
                        </span>
                        <span className="icons-span">
                            <FontAwesomeIcon icon={faBriefcase} />
                        </span>
                        <span className="icons-span">
                            <FontAwesomeIcon icon={faListCheck} />
                        </span>
                    </div>
                    <div className="d-flex flex-column">
                        <span className={intro===false? "aboutme-options-items" : "selected aboutme-options-items"} onClick={() => changeState(setIntro, true)}>Introduction</span>
                        <span className={education===false? "aboutme-options-items" : "selected aboutme-options-items"} onClick={() => changeState(setEducation, true)}>Education</span>
                        <span className={workHistory===false? "aboutme-options-items" : "selected aboutme-options-items"} onClick={() => changeState(setWorkHistory, true)}>Work</span>
                        <span className={interests===false? "aboutme-options-items" : "selected aboutme-options-items"} onClick={() => changeState(setInterests, true)}>Interests</span>
                    </div>
                </div>
                <div className="aboutme-right-section col-md-10 col-lg-10 col-xl-10">
                    {intro === true &&
                        <span className="d-flex flex-column mx-2">
                            <span className="about-me-intro-heading">
                                Hello!,
                            </span>
                            <span className="about-me-intro-heading">
                                I'm Anish.
                            </span>
                            <span className="my-intro">
                                {introText}
                            </span>
                            <span className="d-flex flex-row">
                                <span className="d-flex flex-column col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 my-intro">
                                    {introText2}
                                </span>
                                <span className="d-flex flex-column col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                    <img className="about-me-intro-png" src="/assets/about-me-intro.png" alt="wait until the page loads" />
                                </span>
                            </span>
                        </span>
                    }
                    {education === true &&
                        <div className="d-flex flex-column">
                            {educationItems}
                        </div>
                    }
                    {workHistory === true &&
                        <div className="d-flex flex-column">
                            {workItems}
                        </div>
                    }
                    {interests === true &&
                        <div className="d-flex flex-column mx-2 my-2 my-intro">
                            <span className="organization-name">Things I like to do:</span>
                            <span>
                                <ul>
                                    {interestsItems}
                                </ul>
                            </span>
                            <span className="d-flex flex-column col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                <img className="about-me-intro-png mx-4" src="/assets/about-me-things-i-do.png" alt="wait until the page loads" />
                            </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutMe
