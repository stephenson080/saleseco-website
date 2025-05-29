// Essentials
import { Route, Routes } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/home/Home';
import NavDesktop from './components/navbar/NavDesktop';
import NavMobile from './components/navbar/NavMobile';
import FooterDesktop from './components/footer/FooterDesktop';
import FooterMobile from './components/footer/FooterMobile';

function App() {
    return (
        <section>
            <div className='w-full backdrop-blur-[24px] py-[1.5rem] md:py-[.8rem] fixed top-0 z-100 bg-white/75'>
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
                <div className="hidden md:block">
                    <FooterDesktop />
                </div>
                <div className="md:hidden">
                    <FooterMobile />
                </div>
            </div>
        </section>
    );
}

export default App;
