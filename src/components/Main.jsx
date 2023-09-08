import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main className='bg-site min-h-[100vh] bg-no-repeat bg-cover pb-[156px]'>
            <Outlet />
        </main>
    )
}

export default Main