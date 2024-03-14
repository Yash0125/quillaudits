import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import BenifitsQuillAudits from '../../components/BenifitsQuillAudits/BenifitsQuillAudits';

const Home = () => {
  return (
    <div className='home-container'>
      <Header/>
      <BenifitsQuillAudits/>
    </div>
  )
}

export default Home
