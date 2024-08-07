
import { Link } from 'react-router-dom'
import styles from './Home2.module.css'


function Homie_2() {


    return (
        <div className={styles.container}>
            <div className={styles.Homie}>
                <div className={styles.Content}>
                    <div className={styles.info_box}>
                        <h4 className="">Hello there !</h4>
                        <h1 className="">Cosob <span>Media Works</span> </h1>
                        <p className="">
                            We are professional portrait studio based on Galkaio, Somalia, creating dreamscapes with
                            Unlimited Creative Possibilities & Lasting Memories.
                        </p>
                        <Link to="/work" className={styles.btn}>My works</Link>
                        <Link to="/contact" className={styles.btn}>Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Homie_2