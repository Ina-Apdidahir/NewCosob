
import React, { useEffect, useState, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom'

import styles from './Work.module.css'
import Cosop from '../assets/web Images/Artboard4.svg'
import crypto from '../assets/web Images/Gele Crypto.png'
import Msf from '../assets/web Images/Msf.png'
import Mideye from '../assets/web Images/mideeye.png'
import Camel from '../assets/web Images/Camel Fete.png'
import Geele from '../assets/Icons/Geele.png'

function Work() {

    const elementRef = useRef("")
    const BrandRef1 = useRef("Branding")
    const BrandRef2 = useRef("Branding")
    const BrandRef3 = useRef("Branding")
    const PhotoRef = useRef("Photograph")
    const videoRef = useRef("Vedeograph")
    const EventRef = useRef("Events")


    function HandleBrand() {
        BrandRef1.current.style.display = "initial"
        BrandRef2.current.style.display = "initial"
        BrandRef3.current.style.display = "initial"

        PhotoRef.current.style.display = "none"
        videoRef.current.style.display = "none"
        EventRef.current.style.display = "none"

    }
    function Handlephoto() {
        BrandRef1.current.style.display = "none"
        BrandRef2.current.style.display = "none"
        BrandRef3.current.style.display = "none"

        PhotoRef.current.style.display = "initial"
        videoRef.current.style.display = "none"
        EventRef.current.style.display = "none"
    }
    function Handlevideo() {
        BrandRef1.current.style.display = "none"
        BrandRef2.current.style.display = "none"
        BrandRef3.current.style.display = "none"

        PhotoRef.current.style.display = "none"
        videoRef.current.style.display = "initial"
        EventRef.current.style.display = "none"
    }
    function Handleevent() {
        BrandRef1.current.style.display = "none"
        BrandRef2.current.style.display = "none"
        BrandRef3.current.style.display = "none"

        PhotoRef.current.style.display = "none"
        videoRef.current.style.display = "none"
        EventRef.current.style.display = "initial"
    }

    function HandleElemntRef() {
        BrandRef1.current.style.display = "initial"
        BrandRef2.current.style.display = "initial"
        BrandRef3.current.style.display = "initial"

        PhotoRef.current.style.display = "initial"
        videoRef.current.style.display = "initial"
        EventRef.current.style.display = "initial"
    }

    const [selectedOption, setSelectedOption] = useState(''); // State for selected option

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Update state on option selection
        // Call the function corresponding to the selected option value
        if (event.target.value === 'All') {
            HandleElemntRef(); // Call the function for "All"
        } else if (event.target.value === 'Branding') {
            HandleBrand(); // Call the function for "Branding"
        } else if (event.target.value === 'Photograph') {
            Handlephoto(); // Call the function for "Branding"
        } else if (event.target.value === 'Vedeograph') {
            Handlevideo(); // Call the function for "Branding"
        } else if (event.target.value === 'Events') {
            Handleevent(); // Call the function for "Branding"
        }
        // ... Add similar logic for other options
    };



    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className={styles.container} >
            <div className={styles.Work_section}>
                <div className={styles.WorkHead}>
                    <h1>Our Working Process</h1>
                </div>
                <div className={styles.Buttons}>

                    <div className={styles.options}>
                        <select className={styles.selection} value={selectedOption} onChange={handleOptionChange}>
                            <option  value="All">  All</option>
                            <option  value="Branding">Branding</option>
                            <option  value="Photograph">Photograph</option>
                            <option  value="Vedeograph">Vedeograph</option>
                            <option  value="Events">Events</option>
                        </select>
                    </div>
                    <div className={styles.workNavigations}>
                        <div className={styles.buttons}>
                            <button onClick={HandleElemntRef}>All</button>
                            <button onClick={HandleBrand}>Branding</button>
                            <button onClick={Handlephoto}>Photograph</button>
                            <button onClick={Handlevideo}>Vedeograph</button>
                            <button onClick={Handleevent}>Events</button>
                        </div>
                    </div>
                </div>
                <div className={styles.works} ref={elementRef}>
                    <div className={styles.work} ref={BrandRef1}>
                        <div className={styles.work_img}>
                            <img src={Cosop} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Cosob Media works</h2>
                            <p>Branding</p>
                        </div>
                    </div>

                    <div className={styles.work} ref={BrandRef2}>
                        <div className={styles.work_img}>
                            <img src={crypto} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Geele Bashir</h2>
                            <p>Branding</p>
                        </div>
                    </div>

                    <div className={styles.work} ref={EventRef}>
                        <div className={styles.work_img}>
                            <img src={Camel} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Somali Camel fate</h2>
                            <p>Events</p>
                        </div>
                    </div>

                    <div className={styles.work} ref={videoRef}>
                        <div className={styles.work_img}>
                            <img src={Mideye} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Ururka Mideeye</h2>
                            <p>Event & Media</p>
                        </div>
                    </div>

                    <div className={styles.work} ref={PhotoRef}>
                        <div className={styles.work_img}>
                            <img src={Msf} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Médecins Sans Fortinéres </h2>
                            <p>Photography and videography</p>
                        </div>
                    </div>

                    <div className={styles.work} ref={BrandRef3}>
                        <div className={styles.work_img}>
                            <img src={Geele} alt="" />
                        </div>
                        <div className={styles.work_Txts}>
                            <h2>Geele Bashir</h2>
                            <p>Branding</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Work