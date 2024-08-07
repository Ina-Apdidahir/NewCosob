import { Link } from 'react-router-dom';

import styles from './Bottom_Foter.module.css'
import Logo from '../assets/Icons/Artboard.png'
import Facebook from '../assets/Icons/facebook.png'
import instagram from '../assets/Icons/instagram.png'
import WhatsApp from '../assets/Icons/whatsapp.png'

function Bottom_Foter() {


    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.second_footer}>
                    <div className={styles.Content}>
                        <div className={styles.box}>
                            <div className={styles.logo_wrapper}>
                                <a className={styles.logo} href=""> <img src={Logo} alt="" /> Media Works </a>
                            </div>
                            <div className={styles.text}>
                                {/* <p>Photography inila miss uman saten eliten finus vivera alacus miss the drudean seneice
                                    miss notumane tonec a fermen.</p> */}
                            </div>
                        </div>
                        <div className={styles.box_midle}>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/contact">Contact us </Link></li>
                            </ul>
                        </div>

                        <div className={styles.box}>
                            <ul className={styles.social_icons}>
                                <div className={styles.icon}>
                                    <a href=""><img src={WhatsApp} alt="" /></a>
                                </div>
                                <div className={styles.icon}>
                                    <a href="https://www.instagram.com/cosob_portraits?igsh=YWp6azZqMjN5ZHg3">
                                        <img src={instagram} alt="" />
                                    </a>
                                </div>
                                <div className={styles.icon}>
                                    <a href="https://www.facebook.com/profile.php?id=61557767225990&mibextid=ZbWKwL">
                                        <img src={Facebook} alt="" />
                                    </a>
                                </div>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className={styles.copyright}>
                    <div className={styles.box}>
                        <p className={styles.copyrightText}>Copyright © 2024 by <a href="#">Cosob Media works</a>. All rights reserved.</p>
                    </div>
                    <div className={styles.box}>
                        <ul className={styles.social_icons}>
                            <li><a href="">Powered by Hiil Digital Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Bottom_Foter