
import HeadSection from '../Header Section/Header.jsx'
import Homesection from '../Home section/Home.jsx'
import Homie_2 from '../Home section/Home2.jsx'
import AboutSection from '../About section/About.jsx'
import About from '../About section/About2.jsx'
import ServiceSection from '../Services section/Services.jsx'
import Work from '../Work  Section/Work .jsx'
import Customers from '../customer Section/Customer.jsx'
import Footer from '../Footer section/Footer.jsx'
import Bottom_Foter from '../Footer section/Bottom_Foter.jsx'

function LandingPage(){
    return(
        <>
        <HeadSection />
        <Homesection />
        <ServiceSection />
        {/* <AboutSection /> */}
        <About />
        <Work />
        <Customers />
        {/* <Team /> */}
        <Footer />
        <Bottom_Foter />
        </>
    )
}

export default LandingPage