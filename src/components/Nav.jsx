import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

const links = [
    { to: '/', icon: <BiHomeAlt /> },
    { to: '/about', icon: <BiUser /> },
    { to: '/services', icon: <BsClipboardData /> },
    { to: '/work', icon: <BsBriefcase /> },
    { to: '/contact', icon: <BsChatSquare /> },
];

const Nav = () => {
    const location = useLocation();

    return (
        <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
            <div className="container mx-auto">
                <div className='w-full bg-black/20 h-[96px] backdrop-blue-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${location.pathname === link.to ? 'active' : ''
                                }`}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
