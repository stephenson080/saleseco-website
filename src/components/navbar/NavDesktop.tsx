import { Link } from 'react-router';

import logo from '../../assets/icons/logo.png';


const NavDesktop = () => {
    return (
        <nav className="flex items-center justify-between w-full bg-white py-[1.5rem] md:py-[.8rem] px-[2rem]">
            <div className="w-40 h-fit">
                <Link to="/">
                    <img src={logo} alt="company_logo" />
                </Link>
            </div>

            <div className="">
                <ul className="flex items-center justify-between space-x-8">
                    <li className="text-[1.5rem] hover:text-gray-600 transition duration-300">
                        <Link to="/">How it works</Link>
                    </li>
                    <li className="text-[1.5rem] hover:text-gray-600 transition duration-300">
                        <Link to="/">Why SalesEco</Link>
                    </li>
                    <li className="text-[1.5rem] hover:text-gray-600 transition duration-300">
                        <Link to="/">Early access</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center gap-[2rem]">
                <div>
                    <button className="bg-btn-active py-[1rem] px-[1.5rem] rounded-[.75rem] text-white text-[1.5rem]">
                        Join waitlist
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavDesktop;
