import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import BenifitsQuillAudits from '../../components/BenifitsQuillAudits/BenifitsQuillAudits';
import CarpeDiemPension from '../../components/CarpeDiemPension/CarpeDiemPension';
import Footer from '../../components/Footer/Footer.';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <BenifitsQuillAudits/>
      <CarpeDiemPension/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
