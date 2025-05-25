// Essentials
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/home/Home';
import NavDesktop from './components/navbar/NavDesktop';
import NavMobile from './components/navbar/NavMobile';
import Footer from './components/footer/Footer';

function App() {
    return (
        <section>
            <div>
                <div className="hidden md:block">
                    <NavDesktop />
                </div>
                <div className="md:hidden">
                    <NavMobile />
                </div>
            </div>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </AnimatePresence>

            <div className="w-full">
                <Footer />
            </div>
        </section>
    );
}

export default App;
