

import styles from './Customer.module.css'
import whiteArrow from '../assets/Icons/whiteArrow.png'
import CustomSlide from './customSlider.jsx';

const data = [
    {
        author: "Geelle Bashir",
        website: "geellebashie.com",
        content: " DOOKH has been an invaluable partner for all my printing needs.Their exceptional quality, attention to detail, and efficient service havemade them my go- to choice for all printing projects.From business cards to brochures, their team consistently delivers outstandingresults that exceed my expectations.The print materials they produce are of thehighest caliber, showcasing vibrant colors, sharp imagery, and impeccable finishing.Nice future all.",
    },
    {
        author: "Hassan Osmaaan Hersi",
        website: "geellebashie.com",
        content: " DOOKH has been an invaluable partner for all my printing needs.Their exceptional quality, attention to detail, and efficient service havemade them my go- to choice for all printing projects.From business cards to brochures, their team consistently delivers outstandingresults that exceed my expectations.The print materials they produce are of thehighest caliber, showcasing vibrant colors, sharp imagery, and impeccable finishing.Nice future all.",
    },
    {
        author: "Jammac Khaliif",
        website: "geellebashie.com",
        content: " DOOKH has been an invaluable partner for all my printing needs.Their exceptional quality, attention to detail, and efficient service havemade them my go- to choice for all printing projects.From business cards to brochures, their team consistently delivers outstandingresults that exceed my expectations.The print materials they produce are of thehighest caliber, showcasing vibrant colors, sharp imagery, and impeccable finishing.Nice future all.",
    },
    {
        author: "Haawo warsame",
        website: "geellebashie.com",
        content: " DOOKH has been an invaluable partner for all my printing needs.Their exceptional quality, attention to detail, and efficient service havemade them my go- to choice for all printing projects.From business cards to brochures, their team consistently delivers outstandingresults that exceed my expectations.The print materials they produce are of thehighest caliber, showcasing vibrant colors, sharp imagery, and impeccable finishing.Nice future all.",
    }
]

function Customers() {

    return (
        <div className={styles.container}>
            <div className={styles.customer_section}>
                <div className={styles.Head}>
                    <h1>TESTIMONIALS</h1>
                </div>
                    <CustomSlide reviews={data}/>
            </div>
        </div>
    )

}

export default Customers