import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='mx-auto container'>
            <Navbar></Navbar>
            <div className="pt-16">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;