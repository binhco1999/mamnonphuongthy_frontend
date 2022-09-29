import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from './Sidebar';
function DefaultLayout({ children }: { children: any }) {
    return (
        <div>
            <SubHeader />
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
