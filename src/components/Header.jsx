import React from 'react';
import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className='bg-site bg-cover py-8 w-full'>
            <div className="container mx-auto">
                <div className='flex justify-between item-center'>
                    <a href="https://google.com">
                        <img src={Logo} alt="#" />
                    </a>
                    <button className='btn btn-sm'>Work with me</button>
                </div>
            </div>
        </header>
    )
};

export default Header;
