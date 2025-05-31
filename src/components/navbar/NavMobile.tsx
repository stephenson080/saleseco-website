import { Link } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/icons/logo.png';
import LucideAlignJustify from '../icons/LucideAlignJustify';
import { useEffect, useRef, useState } from 'react';
import IonIosCloseCircleOutline from '../icons/IonIosCloseCircleOutline';

// type Props = {};
type Props = {
    scrollToHowItWorks: () => void;
    scrollToWhySalesEco: () => void;
    scrollToEarlyAccess: () => void;
};

const NavMobile = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

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
                        rel="noopener noreferrer">
                        <button className="bg-btn-active py-[1rem] px-[1.5rem] rounded-[.75rem] text-white text-[1.5rem]">
                            Join waitlist
                        </button>
                    </a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <IonIosCloseCircleOutline className="text-[2.75rem]" />
                    ) : (
                        <LucideAlignJustify className="text-[2.5rem]" />
                    )}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={dropdownRef}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: -10, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        className="fixed shadow-xl top-[120%] right-5 w-[20rem] h-fit  rounded-xl bg-white p-[1.5rem]">
                        <div className="">
                            <a
                                className="block text-[1.75rem] pb-[1rem] mb-2"
                                onClick={props.scrollToHowItWorks}>
                                How it works
                            </a>
                            <a
                                className="block text-[1.75rem] pb-[1rem] mb-2"
                                onClick={props.scrollToWhySalesEco}>
                                Why SalesEco
                            </a>
                            <a className="block text-[1.75rem]" onClick={props.scrollToEarlyAccess}>
                                Early access
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavMobile;
