import styles from './About2.module.css'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import photopgraphy from '../assets/web Images/photopgraphy.png'
import Tribot from '../assets/web Images/Welpapers/Tripot.png'

function About() {


    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/'); // Initial state

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const HeadClass = isHomePage ? styles.Head : `${styles.Head} ${styles.hide}`;
    const Head_master = isHomePage ? `${styles.Head_master} ${styles.hide}` : styles.Head_master;


    // ____________________ COUNTING ____________________//

    let [clientCount, setClientCount] = useState(0);
    let [projectCount, setProjectCount] = useState(0);
  
    useEffect(() => {
      // Simulate counting animation on initial render
      const intervalId = setInterval(() => {
        if (clientCount <= 150) {
          setClientCount(clientCount ++ );
        }
        if (projectCount <= 10) {
          setProjectCount(projectCount ++);
        }
      }, 100); // Adjust interval for desired animation speed (in milliseconds)
  
      return () => clearInterval(intervalId); // Cleanup function to stop animation
    }, []);

      // ____________________ COUNTING ____________________//
      

    return (
        <div className={styles.container}>
            <div className={Head_master}>
                <h1>About Us</h1>
            </div>
            <div className={styles.about_container}>
                <div className={HeadClass}>
                    <h1>About Us</h1>
                </div>
                <div className={styles.About}>
                    <div className={styles.top}>
                        <div className={styles.image}>
                            <img src={photopgraphy} alt="" />
                        </div>
                        <div className={styles.texts}>
                            <div className={styles.text_section}>
                                <h1>Photos that Speak Volumes </h1>
                                <p>
                                    Our photographers capture the essence of your brand, product, or event.
                                    We use our expertise to craft stunning visuals that tell your story
                                    and resonate with your audience.
                                </p>
                            </div>
                            <div className={styles.text_section}>
                                <h1>Branding that Stands Out </h1>
                                <p>
                                    Build a strong brand identity with our team. We help you develop a unique voice,
                                    design a captivating logo, and craft messaging that effectively
                                    communicates your value.
                                </p>
                            </div>
                            <div className={styles.text_section}>
                                <h1>Videos that Captivate</h1>
                                <p>
                                    Move beyond the ordinary with our videographers. We create dynamic and
                                    engaging videos that connect with your viewers on a deeper level,
                                    leaving a lasting impression.
                                </p>
                            </div>
                            <div className={styles.text_section}>
                                <h1>Events that Impress </h1>
                                <p>
                                    Planning an event shouldn't be stressful. We handle everything from concept
                                    to execution, ensuring a flawless and memorable experience for your guests.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.texts}>
                            <div className={styles.text_section}>
                                <h1>Expriences and Projects</h1>
                                <p>
                                    For over a decade, Cosob Media Works has been a trusted partner for businesses
                                    and individuals seeking to elevate their online presence.
                                    We've captured stunning photography for global brands,
                                    crafted captivating videos that have garnered millions of views,
                                    and executed flawless events that leave a lasting impression.
                                    Let our experience turn your vision into reality.
                                </p>
                            </div>
                            <div className={styles.projects}>
                                <div className={styles.project}>
                                    <h2>{clientCount}+</h2>
                                    <small>Clients served</small>
                                </div>
                                <div className={styles.project}>
                                    <h2>{projectCount}+</h2>
                                    <small>Projects</small>
                                </div>
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={Tribot} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 