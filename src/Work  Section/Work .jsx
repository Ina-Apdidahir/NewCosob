
import React, { useEffect, useState } from 'react';

import styles from './Work.module.css'

import client from '../../Sanity Client/SanityClient';

function Work() {


    /////////// ..... ___________   Handle scroll  Events of ____________  .... //////////////


    useEffect(() => {
        const handleScroll = () => {
            const AnimationElment = document.querySelectorAll(`.${styles.Scale}`);

            AnimationElment.forEach((el) => {
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

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const [works, setWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        const query = `*[ _type == "work" ] | order(_createdAt desc) {
            client,
            slug,
            job,
            jobType,
            jobImage {
              asset -> {
                _id,
                url
              },
              alt
            },
            description
        }`;

        client.fetch(query)
            .then((data) => {
                setWorks(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError(err);
                setIsLoading(false);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(value);
    };

    const filteredPosts = selectedCategory === 'All'
        ? works
        : works.filter(work => 
            Array.isArray(work.jobType) && work.jobType.includes(selectedCategory)
        );

    // console.log('Filtered Posts:', filteredPosts);
    

    return (
        <div className={styles.container} >
            <div className={styles.Work_section}>
                <div className={styles.WorkHead}>
                    <h1>Our Working Process</h1>
                </div>
                <div className={styles.Buttons}>
                    <div className={styles.options}>
                        <select className={styles.selection} value={selectedCategory} onChange={handleOptionChange}>
                            <option value="All">All</option>
                            <option value="Branding">Branding</option>
                            <option value="Photography">Photography</option>
                            <option value="Videography"> Videography </option>
                            <option value="Events">Events</option>
                            <option value="Media Management">Media Management</option>
                        </select>
                    </div>
                    <div className={styles.workNavigations}>
                        <div className={styles.buttons}>
                            <button onClick={() => handleCategoryClick('All')}>All</button>
                            <button onClick={() => handleCategoryClick('Branding')}>Branding</button>
                            <button onClick={() => handleCategoryClick('Photography')}>Photography</button>
                            <button onClick={() => handleCategoryClick('Videography')}>Videography</button>
                            <button onClick={() => handleCategoryClick('Media Management')}>Media Management</button>
                            <button onClick={() => handleCategoryClick('Events')}>Events</button>
                        </div>
                    </div>
                </div>
                <div className={styles.works} >
                    {filteredPosts && filteredPosts.length > 0 && (
                        filteredPosts.map((work, index) => (
                            <div className={styles.work} key={index}>
                                {work.jobImage && work.jobImage.asset && (
                                    <div className={styles.work_img}>
                                        <img className={styles.Scale} src={work.jobImage.asset.url} alt="" />
                                    </div>
                                )}
                                <div className={`${styles.work_Txts} ${styles.Scale}`}>
                                    {work.client && (
                                        <h2>{work.client}</h2>
                                    )}
                                    {work.jobType && (
                                        <p>{work.job}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )

}

export default Work