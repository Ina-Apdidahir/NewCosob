
import LandingPage from './Landing Page/LandingPage.jsx'
import AboutLanding from './About section/AboutLanding.jsx'
import ServiceLanding from './Service Section/ServiceLanding.jsx';
import './App.css'


// import WorkLanding from './Work  Section/WorkLanding.jsx'
// import Customers from './customer Section/Customer.jsx'
// import Foter_Landing from './Footer section/Footer_Langing.jsx'
// import Details from './Services section/Details.jsx'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter basename="/NewCosob">
        <Routes>
          
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutLanding />} />
          <Route path="/service" element={<ServiceLanding />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




{/* <Router basename="/NewCosob">
<Routes>
<Route path="/" element={<LandingPage />} />
</Routes>
</Router> */}


  //  
  //   
  //   <Route path="/work" element={<WorkLanding />} />
  //   <Route path="/customers" element={<Customers />} /> 

  //   <Route path="/details/:name" element={<Details />} /> 
  //   <Route path="/contact" element={<Foter_Landing />} /> 
