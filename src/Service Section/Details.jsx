import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import client from "../../Sanity Client/SanityClient.js";
import next from '../assets/Icons/rightarrow.png';
import previous from '../assets/Icons/previous.png';
import styles from './Details.module.css';
import { PortableText } from '@portabletext/react';

const Details = () => {
    const location = useLocation();
    const { slug } = useParams();
    const [selectedService, setSelectedService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

    // Ensure this hook is never conditional
    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Data fetching hook
    useEffect(() => {
        const query = `*[ _type == "service" && slug.current == $slug ] {
            title,
            description,
            servicebody,
            serviceImages[]{
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`;

        client.fetch(query, { slug })
            .then((data) => {
                if (data && data.length > 0) {
                    setSelectedService(data[0]);
                } else {
                    setSelectedService(null); // Handle case where no service is found
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError(err);
                setIsLoading(false);
            });
    }, [slug]);

    // Slider controls
    const handleNext = () => {
        if (selectedService && selectedService.serviceImages.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedService.serviceImages.length);
        }
    };

    const handlePrev = () => {
        if (selectedService && selectedService.serviceImages.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + selectedService.serviceImages.length) % selectedService.serviceImages.length);
        }
    };


    // ________________________________ Scroll Events _____________________________\\

    // Scroll animation hook
    if (!isLoading) {
        useEffect(() => {
            const handleScroll = () => {
                const SlideElment = document.querySelectorAll(`.${styles.LeftSlide}`);
                const Scaleelements = document.querySelectorAll(`.${styles.Scale}`);
                const HMrelements = document.querySelectorAll(`.${styles.Head_master}`);

                SlideElment.forEach((el) => {
                    const rect = el.getBoundingClientRect();
                    const partiallyInView = rect.top < window.innerHeight && rect.bottom > 0;

                    if (partiallyInView) {
                        el.classList.add(styles.visible);
                    } else {
                        el.classList.remove(styles.visible);
                    }
                });

                Scaleelements.forEach((el) => {
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
    } else {
        return <div>Loading...</div>;
    }

    // ________________________________ Scroll Events _____________________________\\


    // Serializer for PortableText
    const serializers = {
        types: {
            space: ({ node }) => {
                if (!node || !node.height) {
                    return <div className={styles.space} />;
                }
                return <div style={{ height: node.height }} className={styles.space} />;
            }
        },
    };



    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!selectedService) {
        return <div>Service not found</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.Head_master}>
                <h1>{selectedService.title}</h1>
            </div>
            <div className={styles.conetnts}>
                <h2 className={styles.LeftSlide}>{selectedService.title}</h2>
                <p className={styles.LeftSlide}>{selectedService.description}</p>
                <div className={styles.content_Detail}>
                    <div className={styles.Images_container}>
                        <button
                            className={`${styles.slider_button} ${styles.prev} ${isSmallScreen ? styles.hide_slider_button : ''}`}
                            onClick={handlePrev}
                        >
                            <img src={previous} alt="previous-btn" />
                        </button>

                        {selectedService.serviceImages.length > 0 && (
                            <div className={styles.pictures}>
                                <img
                                    className={`${styles.sliderImage} ${styles.Scale}`}
                                    src={selectedService.serviceImages[currentIndex]?.asset?.url || ''}
                                    alt={selectedService.serviceImages[currentIndex]?.alt || 'Service image'}
                                />
                            </div>
                        )}

                        <button
                            className={`${styles.slider_button} ${styles.next} ${isSmallScreen ? styles.hide_slider_button : ''}`}
                            onClick={handleNext}
                        >
                            <img src={next} alt="next-btn" />
                        </button>

                        <div className={`${styles.img_indicators} ${styles.Scale} ${!isSmallScreen ? styles.hide_img_indicators : ''}`}>
                            {selectedService.serviceImages.map((image, idx) => (
                                image?.asset?.url ? (
                                    <img
                                        key={image.asset._id}
                                        src={image.asset.url}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={currentIndex === idx ? `${styles.img_indicator}` : `${styles.indicator_inactive}`}
                                        alt="image indicator"
                                    />
                                ) : null
                            ))}
                        </div>

                        <div className={`${styles.dot_indicators} ${styles.Scale} ${isSmallScreen ? styles.hide_dot_indicators : ''}`}>
                            {selectedService.serviceImages.map((_, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={currentIndex === idx ? `${styles.dot_indicator}` : `${styles.indicator_inactive}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.Blog_body} ${styles.Scale}`}>
                        <PortableText value={selectedService.servicebody} components={serializers} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
