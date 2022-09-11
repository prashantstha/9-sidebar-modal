import React from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { useGlobalContext } from './context';

export default function Home() {
    console.log(useGlobalContext());
    const {openSidebar, openModal} = useGlobalContext();
    return (
        <main className='main'>
            <button className='btn sidebar-toggle' onClick={openSidebar}><FiMenu/></button>
            <button className='btn btn-show-modal' onClick={openModal}>Show modal</button>
        </main>
    )
}
