
import LandingPage from './Landing Page/LandingPage.jsx'
import AboutLanding from './About section/AboutLanding.jsx'
import './App.css'

import ServiceLanding from './Services section/ServicesLanding.jsx'
import WorkLanding from './Work  Section/WorkLanding.jsx'
import Customers from './customer Section/Customer.jsx'
import Foter_Landing from './Footer section/Footer_Langing.jsx'
import Details from './Services section/Details.jsx'

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/service" element={<ServiceLanding />} />
          <Route path="/about" element={<AboutLanding />} />
          <Route path="/work" element={<WorkLanding />} />
          <Route path="/customers" element={<Customers />} />

          <Route path="/details/:name" element={<Details />} /> {/* Details route with dynamic parameter */}

          <Route path="/contact" element={<Foter_Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




