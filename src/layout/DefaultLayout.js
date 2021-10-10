import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './partial/Header'
import Footer from './partial/Footer'

function DefaultLayout({children}) {
    return (
        <>
            <header className="header">
                <Header />
            </header>

            <main className="main"> 
                {children}
            </main>
            
            <footer className="footer">
                <Footer/>
            </footer>
        </>
    );
}

export default DefaultLayout;