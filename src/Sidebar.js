import React from 'react';
import logo from './logo-thing.png';
import { links } from './data';
import { FiX } from "react-icons/fi";
import { useGlobalContext } from './context';

function Sidebar() {
    const { isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar open-sidebar' : 'sidebar'}`}>
        <div className="sidebar-header">
            <img src={logo} alt="logo" className="logo" />
            <button className='btn btn-close' onClick={closeSidebar}><FiX /></button>
        </div>
        <ul className="links">
            {links.map((link) => {
                const { id, url, text, icon } = link;
                return (
                    <li key={id}><a href={url}>{icon} {text}</a></li>
                );
            })}
        </ul>
    </aside>
  )
}

export default Sidebar