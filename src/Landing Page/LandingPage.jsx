
import HeadSection from '../Header Section/Header.jsx'
import Homesection from '../Home section/Home.jsx'
import About from '../About section/About.jsx'

// import Homie_2 from '../Home section/Home2.jsx'
// import AboutSection from '../About section/About.jsx'
import ServiceSection from '../Service Section/Services.jsx'
// import Work from '../Work  Section/Work .jsx'
// import Customers from '../customer Section/Customer.jsx'

import Footer from '../Footer section/Footer.jsx'
import Bottom_Foter from '../Footer section/Bottom_Foter.jsx'

function LandingPage(){
    return(
        <>
        <HeadSection />
        <Homesection />
        <About />
        <ServiceSection />
        <Footer />
        <Bottom_Foter />
       
        {/* <AboutSection /> */}
         
        {/* <Work /> */}
        {/* <Customers />  */}
        {/* <Team /> */}
      
        </>
    )
}

export default LandingPage