
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import styles from './About.module.css'
import Portrait from '../assets/web Images/Artboard 9.png'
import whiteArrow from '../assets/Icons/whiteArrow.png'


function AboutSection() {


    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/'); // Initial state

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const buttonClass = isHomePage ? styles.SeeMore : `${styles.SeeMore} ${styles.hide}`;
    const HeadClass = isHomePage ? styles.Head : `${styles.Head} ${styles.hidden}`;
    const Head_master = isHomePage ? `${styles.Head_master} ${styles.hide}` : styles.Head_master;
    // const AboutClass = isHomePage ? `${styles.About} ${styles.AboutImg}` : styles.About;

    const shortTXT = isHomePage ? styles.shorttext : `${styles.shorttext} ${styles.hide}`;
    const LongTXT = isHomePage ? `${styles.Longtext} ${styles.hide}` : styles.Longtext;
    const subtitle = isHomePage ? `${styles.subtitle} ${styles.hide}` : styles.subtitle;


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (

        <div className={styles.container}>
            <div className={HeadClass}>
                <h1>About Us</h1>
            </div>
            <div className={Head_master}>
                <h1>About Us</h1>
            </div>
           
            {/* AboutClass */}
            <div className={ `${styles.About} ${isSmallScreen ? styles.AboutImg : ''}`}>
                <div className={styles.Images}>
                    <img className={styles.cosobLogo5} src={Portrait} alt="" ></img>
                </div>
                <div className={styles.Texts}>
                    <span className={shortTXT}>
                        We bring your vision to life, from stunning visuals to captivating experiences
                    </span>
                    <p className={shortTXT}>
                        we specialize in capturing the timeless essence of life's most cherished moments
                        through our unparalleled portrait and wedding production services.
                        With a keen eye for detailand a passion for storytelling,
                        we transform fleeting moments into everlasting memories.

                        For those seeking to commemorate milestones and preserve precious memories,
                        our portrait services offer a personalized experience tailored to each client's unique vision.
                        Whether it's a family portrait,
                        individual headshot, or creative conceptual shoot, our team of skilled photographers
                        ensures that everyimage nality and essence of the subject,
                        reflects the personality mortalizing moments to be cherished for generations to come.
                    </p>
                    <span className={subtitle}>Unleashing Your Brand's Potential: Who We Are</span>
                    <p className={LongTXT}>
                        At Cosob Media Works, we're a passionate collective driven by a singular goal:
                        to empower your brand's success through the power of exceptional media solutions.
                        We believe that captivating visuals, strategic planning, and a strong online presence
                        are the cornerstones of a thriving brand. That's why we offer a comprehensive suite
                        of services designed to elevate your brand identity, connect with your audience,
                        and create lasting experiences.
                        <br />
                        <br />

                        From the meticulous attention to detail in our photography  to the dynamic
                        storytelling woven into our videography ▶️,
                        we capture the essence of your brand and translate it into visually stunning content
                        that resonates.
                        <br />
                        <br />

                        We don't just capture moments, we orchestrate unforgettable experiences.
                        Our meticulous event planning  service ensures flawless execution, allowing
                        you to focus on making memories that matter. Whether it's a product launch,
                        a captivating conference, or an intimate gathering, we bring your vision to life
                        with precision and creativity.
                        <br />
                        <br />

                        In today's digital age, a strong online presence is paramount. Our social media
                        management  team fosters meaningful connections with your target audience,
                        building a dedicated community around your brand. We develop engaging content
                        strategies, manage your social media channels, and nurture online relationships
                        – all with a keen eye on maximizing your brand's reach and impact.
                        <br />
                        <br />

                        Finally, we understand the power of a cohesive and compelling brand identity.
                        Our branding design  expertise helps you craft a distinct visual language that
                        resonates with your target market. From logo design and brand guidelines to
                        website aesthetics and marketing materials, we ensure every element reflects
                        your brand's core values and sets you apart from the competition.
                    </p>
                    <div className={styles.about_btn}>
                        <Link to="/about"><button className={buttonClass}> see more <img src={whiteArrow} alt="" /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection