import React from 'react';
import { FiHome, FiUsers, FiFolder, FiCalendar, FiFileText } from "react-icons/fi";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        icon: <FiHome/>
    },
    {
        id: 2,
        url: '/team',
        text: 'Team',
        icon: <FiUsers/>
    },
    {
        id: 3,
        url: '/projects',
        text: 'Projects',
        icon: <FiFolder/>
    },
    {
        id: 4,
        url: '/calender',
        text: 'Calender',
        icon: <FiCalendar/>
    },
    {
        id: 5,
        url: '/documents',
        text: 'Documents',
        icon: <FiFileText/>
    }
];