import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import BenifitsQuillAudits from '../../components/BenifitsQuillAudits/BenifitsQuillAudits';
import CarpeDiemPension from '../../components/CarpeDiemPension/CarpeDiemPension';

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <BenifitsQuillAudits/>
      <CarpeDiemPension/>
    </div>
  )
}

export default Home
