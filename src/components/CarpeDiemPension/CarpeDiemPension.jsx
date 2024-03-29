import React from 'react';
import './CarpeDiemPension.css'
import CarpeDiemPensionLeft from '../CarpeDiemPensionLeft/CarpeDiemPensionLeft';
import Sidebar from '../Sidebar/Sidebar';

const CarpeDiemPension = () => {
  return (
    <>
    <div className='carpediempension-container'>
      <CarpeDiemPensionLeft/>
      <Sidebar/>
    </div>
    <div className='carpediempension-mobile-container'>
      <Sidebar/>
      <CarpeDiemPensionLeft/>
    </div>
    </>
  )
}

export default CarpeDiemPension
