import { Link } from 'react-router';

import logo from '../../assets/icons/logo.png';
import LucideAlignJustify from '../icons/LucideAlignJustify';

// type Props = {};

const NavMobile = () => {
    return (
        <nav className="flex items-center justify-between w-full px-[2rem]">
            <div className="w-30 h-fit">
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

                <div className="">
                    <LucideAlignJustify className="text-[2.5rem]" />
                </div>
            </div>
        </nav>
    );
};

export default NavMobile;
