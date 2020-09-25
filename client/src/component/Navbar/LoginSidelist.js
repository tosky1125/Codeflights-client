import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarUserData = [
  {
    title: 'Main',
    path: '/',
    icon: <FaIcons.FaHome />,
    className: 'nav-text',
  },
  {
    title: 'My Page',
    path: '/mypage',
    icon: <FaIcons.FaUserCircle />,
    className: 'nav-text',
  },
  {
    title: 'POSTING',
    path: '/posting',
    icon: <FaIcons.FaTelegramPlane />,
    className: 'nav-text',
  },
  {
    title: 'LOGOUT',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
    className: 'nav-text',
  },
];
