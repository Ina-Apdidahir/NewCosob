
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

import whiteArrow from '../assets/Icons/whiteArrow.png'
// import Logo from '../assets/Icons/Artboard.png'
// import cosobLogo4 from '../assets/web Images/Screen4.png'

function Homesection() {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.inspire}>
                    <h1>Where Creative process <br /> Happens</h1>
                    <p>Creating Memories That Lasts Alifetime </p>
                    <Link to="/contact">
                        <button className={styles.intouch}>Get in Touch <img src={whiteArrow} alt="" /> </button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Homesection