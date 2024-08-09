
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import icons from './icons.jsx'


import styles from './Services.module.css'
import next from '../assets/web Images/next.png'



function ServiceSection() {

    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/'); // Initial state

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const HeadClass = isHomePage ? styles.Head : `${styles.Head} ${styles.hide}`;
    const Head_master = isHomePage ? `${styles.Head_master} ${styles.hide}` : styles.Head_master;

    /////////// ..... ___________   Handle scroll  Events of ____________  .... //////////////


    useEffect(() => {
        const handleScroll = () => {
            const AnimationElment = document.querySelectorAll(`.${styles.Scale}`);
            const HMrelements = document.querySelectorAll(`.${styles.Head_master}`);

            AnimationElment.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const partiallyInView = rect.top < window.innerHeight && rect.bottom > 0;

                if (partiallyInView) {
                    el.classList.add(styles.visible);
                } else {
                    el.classList.remove(styles.visible);
                }
            });

            HMrelements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const partiallyInView = rect.top < window.innerHeight && rect.bottom > 0;

                if (partiallyInView) {
                    el.classList.add(styles.visible);
                } else {
                    el.classList.remove(styles.visible);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run the function once to check the visibility on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /////////// ..... ___________   Handle scroll   Events of ____________  .... //////////////


    return (
        <div className={styles.container}>
            <div className={Head_master}>
                <h1>Services We Offer</h1>
            </div>
            <div className={styles.service_container}>
                <div className={HeadClass}>
                    <h1>Services We Offer</h1>
                </div>
                <div className={styles.serviceList}>

                    {icons.map((icon) => (
                        <Link key={icon.name} to={`/details/${icon.name}`}> {/* Use Link with path */}
                            <div className={styles.Service}>
                                <div className={styles.Image}>
                                    <img className={`${styles.img} ${styles.Scale}`} src={icon.image} alt={icon.name} />
                                </div>
                                <div className={`${styles.texts} ${styles.Scale}`}>
                                    <p>{icon.name}</p>
                                    <div className={styles.Arrow}>
                                        <img src={next} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )

}


export default ServiceSection