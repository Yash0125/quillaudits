import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <aside className='sidebar-container'> 
      <h3 className='sidebar-title'>Headquarters</h3>
      <p className='sidebar-subtitle'>Switzerland</p>
      <h3 className='sidebar-chain'>Chain</h3>
      <p className='sidebar-subtitle'>Pulse Blockchain</p>
    </aside>
  )
}

export default Sidebar
