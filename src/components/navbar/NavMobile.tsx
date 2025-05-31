import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/icons/logo.png';
import LucideAlignJustify from '../icons/LucideAlignJustify';
import { useState } from 'react';
import IonIosCloseCircleOutline from '../icons/IonIosCloseCircleOutline';

// type Props = {};

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full px-[2rem]">
            <div className="w-45 h-fit">
                <Link to="/">
                    <img src={logo} alt="company_logo" />
                </Link>
            </div>

            <div className="flex items-center gap-[2rem]">
                <div>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfyPmZHBlVgciq3UgSdU_6LW19FR7-E7zsIOrR4MQ_eGUTzZw/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-btn-active py-[1rem] px-[1.5rem] rounded-[.75rem] text-white text-[1.5rem]">
                            Join waitlist
                        </button>
                    </a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IonIosCloseCircleOutline className='text-[2.75rem]'/> : <LucideAlignJustify className="text-[2.5rem]" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: -10, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        className="fixed shadow-xl top-[120%] right-5 w-[20rem] h-fit  rounded-xl bg-white p-[1.5rem]"
                    >
                        <div className="">
                            <Link
                                className="block text-[1.75rem] pb-[1rem] border-b-[.125rem] border-b-[hsl(0,0%,83%)] mb-2"
                                to="/how"
                            >
                                How it works
                            </Link>
                            <Link
                                className="block text-[1.75rem] pb-[1rem] border-b-[.125rem] border-b-[hsl(0,0%,83%)] mb-2"
                                to="/why"
                            >
                                Why SalesEco
                            </Link>
                            <Link
                                className="block text-[1.75rem] pb-[1rem] border-b-[.125rem] border-b-[hsl(0,0%,83%)] mb-2"
                                to="/early"
                            >
                                Early access
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavMobile;
