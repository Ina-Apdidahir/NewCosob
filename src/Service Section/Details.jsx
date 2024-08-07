
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Use useParams to get ID
import icons from './icons.jsx'

import next from '../assets/Icons/rightarrow.png'
import previous from '../assets/Icons/previous.png'

import styles from './Details.module.css'


const Details = () => {

    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/'); // Initial state

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    const Head_master = isHomePage ? `${styles.Head_master} ${styles.hide}` : styles.Head_master;

    const { name } = useParams();
    const selectedIcon = icons.find((icon) => icon.name === name);

    if (!selectedIcon) {
        return <div>Icon not found!</div>;
    }

    //   ______________________ Pictures sliders _________________________   // 
    const [currentIndex, setCurrentIndex] = useState(0);

    // Extract image URLs from selectedIcon.Pictures
    const imageUrls = Object.values(selectedIcon.Pictures).map(
        (image) => image
    );
    const images = imageUrls;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log("next")
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        console.log("previ")
    };

    //   ______________________ For mobile _________________________   // 

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1023);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    //   ______________________ Pictures sliders _________________________   // 

    return (
        <div className={styles.container}>
            <div className={Head_master}>
                <h1>{selectedIcon.Title}</h1>
            </div>
            <div className={styles.conetnts}>
                <h2>{selectedIcon.name}</h2>
                <p>Here is some contents about our {selectedIcon.name}</p>
                <div className={styles.content_Detail}>
                    <div className={styles.Images_container}>

                        <button className={`${styles.slider_button} ${styles.next} ${isSmallScreen ? styles.hide_slider_button : ''}`} onClick={handleNext} >
                            <img src={next} alt="next-btn" />
                        </button>

                        <div className={styles.pictures}>
                            <img
                                className={styles.sliderImage} // New class for slider image
                                src={imageUrls[currentIndex]}
                                alt={selectedIcon.name}
                            />

                        </div>

                        <button className={`${styles.slider_button} ${styles.prev} ${isSmallScreen ? styles.hide_slider_button : ''}`} onClick={handlePrev}>
                            <img src={previous} alt="previous-btn" />
                        </button>

                        <div className={`${styles.img_indicators} ${isLargeScreen ? styles.hide_img_indicators : ''}`}>
                            {imageUrls.map((imageUrls, idx) => {
                                return (
                                    <img
                                        key={idx}
                                        src={imageUrls}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={currentIndex === idx ? `${styles.img_indicator}` : `${styles.indicatror_inactive}`}
                                    />
                                )
                            })}
                        </div>
                        <div className={`${styles.dot_indicatrors} ${isSmallScreen ? styles.hide_dot_indicators : ''}`}>
                            {imageUrls.map((_, idx) => {
                                return (
                                    <div
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={currentIndex === idx ? `${styles.dot_indicatror}` : `${styles.indicatror_inactive}`}
                                    ></div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.details}>
                        <p>{selectedIcon.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
