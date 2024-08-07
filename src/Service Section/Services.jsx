
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
                                    <img src={icon.image} alt={icon.name} />
                                </div>
                                <div className={styles.texts}>
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