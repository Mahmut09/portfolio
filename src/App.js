import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Banner />} />
                    <Route path='about' element={<About />} />
                    <Route path='services' element={<Services />} />
                    <Route path='work' element={<Work />} />
                    <Route path='contact' element={<Contact />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
