import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/icons/logo.png';
import LucideAlignJustify from '../icons/LucideAlignJustify';

type Props = {};

const NavMobile = (props: Props) => {
    return (
        <nav className="flex items-center justify-between w-full bg-white py-[1.5rem] px-[2rem]">
            <div className="w-30 h-fit">
                <Link to="/">
                    <img src={logo} alt="company_logo" />
                </Link>
            </div>

            <div className="flex items-center gap-[2rem]">
                <div>
                    <button className="bg-btn-active py-[1rem] px-[1.5rem] rounded-[.75rem] text-white text-[1.5rem]">
                        Join waitlist
                    </button>
                </div>

                <div className="">
                    <LucideAlignJustify className="text-[2.5rem]" />
                </div>
            </div>
        </nav>
    );
};

export default NavMobile;
