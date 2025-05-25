import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/icons/logo_light.png';
import instagram from '../../assets/icons/instagram.svg';
import IonLogoX from '../icons/IonLogoX';

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="w-full py-[1.5rem] px-[2rem] bg-[#111827]">
            {/* Top */}
            <div className="w-40 h-fit mb-[4rem]">
                <Link to="/">
                    <img src={logo} alt="company_logo" />
                </Link>
            </div>

            {/* List */}
            <div className="flex justify-between mb-[4rem]">
                <div className="">
                    <span className="mb-[2rem] inline-block font-inter-bold text-[1.25rem] text-white">
                        Quick links
                    </span>

                    <ul className="space-y-5 text-gray-text">
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    How it works
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Why SalesEco
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Join waitlist
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <span className="mb-[2rem] inline-block font-inter-bold text-[1.25rem] text-white">
                        Legal
                    </span>

                    <ul className="space-y-5 text-gray-text">
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Terms of service
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Privacy policy
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Cookie policy
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Data processing
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="">
                    <span className="mb-[2rem] inline-block font-inter-bold text-[1.25rem] text-white">
                        Contact
                    </span>

                    <ul className="space-y-5 text-gray-text">
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    support@saleseco.com
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    +234 70199 54106
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className="font-inter text-[1rem] text-[#D1D5DB]">
                                    Why SalesEco
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <div className="">
                <div className="mb-[2rem]">
                    <p className="text-[1.25rem] leading-[1.75rem] text-gray-text">
                        Connecting buyers with budgets to sellers <br />
                        with solution.
                    </p>
                </div>

                {/* Media links */}
                <div className="mb-[2rem]">
                    <ul className="flex gap-[1.25rem]">
                        <li className="p-[1rem] rounded-full bg-dark-gray">
                            <Link to="/">
                                <svg
                                    className="w-[2.25rem]"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.2526 0.833984H6.7526C8.08594 0.833984 9.16927 1.91732 9.16927 3.25065V6.75065C9.16927 7.39159 8.91466 8.00628 8.46145 8.45949C8.00823 8.91271 7.39354 9.16732 6.7526 9.16732H3.2526C1.91927 9.16732 0.835938 8.08398 0.835938 6.75065V3.25065C0.835938 2.60971 1.09055 1.99502 1.54376 1.54181C1.99698 1.0886 2.61166 0.833984 3.2526 0.833984ZM3.16927 1.66732C2.77145 1.66732 2.38992 1.82535 2.10861 2.10666C1.82731 2.38796 1.66927 2.76949 1.66927 3.16732V6.83398C1.66927 7.66315 2.3401 8.33398 3.16927 8.33398H6.83594C7.23376 8.33398 7.61529 8.17595 7.8966 7.89464C8.1779 7.61334 8.33594 7.23181 8.33594 6.83398V3.16732C8.33594 2.33815 7.6651 1.66732 6.83594 1.66732H3.16927ZM7.1901 2.29232C7.32824 2.29232 7.46071 2.34719 7.55839 2.44487C7.65606 2.54254 7.71094 2.67502 7.71094 2.81315C7.71094 2.95128 7.65606 3.08376 7.55839 3.18144C7.46071 3.27911 7.32824 3.33398 7.1901 3.33398C7.05197 3.33398 6.91949 3.27911 6.82182 3.18144C6.72414 3.08376 6.66927 2.95128 6.66927 2.81315C6.66927 2.67502 6.72414 2.54254 6.82182 2.44487C6.91949 2.34719 7.05197 2.29232 7.1901 2.29232ZM5.0026 2.91732C5.55514 2.91732 6.08504 3.13681 6.47574 3.52751C6.86644 3.91821 7.08594 4.44812 7.08594 5.00065C7.08594 5.55319 6.86644 6.08309 6.47574 6.47379C6.08504 6.86449 5.55514 7.08398 5.0026 7.08398C4.45007 7.08398 3.92017 6.86449 3.52946 6.47379C3.13876 6.08309 2.91927 5.55319 2.91927 5.00065C2.91927 4.44812 3.13876 3.91821 3.52946 3.52751C3.92017 3.13681 4.45007 2.91732 5.0026 2.91732ZM5.0026 3.75065C4.67108 3.75065 4.35314 3.88235 4.11872 4.11677C3.8843 4.35119 3.7526 4.66913 3.7526 5.00065C3.7526 5.33217 3.8843 5.65011 4.11872 5.88453C4.35314 6.11896 4.67108 6.25065 5.0026 6.25065C5.33412 6.25065 5.65207 6.11896 5.88649 5.88453C6.12091 5.65011 6.2526 5.33217 6.2526 5.00065C6.2526 4.66913 6.12091 4.35119 5.88649 4.11677C5.65207 3.88235 5.33412 3.75065 5.0026 3.75065Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className="flex items-center justify-center p-[1rem] rounded-full bg-dark-gray">
                            <Link to="/">
                                <IonLogoX className="text-[2rem] text-white" />
                            </Link>
                        </li>
                        <li className="flex items-center justify-center p-[1rem] rounded-full bg-dark-gray">
                            <Link to="/">
                                <svg
                                    className='w-[2.25rem] h-[2.25rem]'
                                    viewBox="0 0 6 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.83073 5.62565H4.8724L5.28906 3.95898H3.83073V3.12565C3.83073 2.69648 3.83073 2.29232 4.66406 2.29232H5.28906V0.892318C5.15323 0.874401 4.64031 0.833984 4.09865 0.833984C2.9674 0.833984 2.16406 1.5244 2.16406 2.79232V3.95898H0.914062V5.62565H2.16406V9.16732H3.83073V5.62565Z"
                                        fill="white"
                                    />
                                </svg>
                            </Link>
                        </li>
                        <li className="p-[1rem] rounded-full bg-dark-gray">
                            <Link to="/">
                                <svg
                                    className="w-[2.25rem]"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1642_2720)">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.20964 3.665V4.37208C5.35771 4.14653 5.56181 3.96329 5.80196 3.8403C6.04211 3.7173 6.31008 3.65876 6.57964 3.67042C8.01922 3.67042 8.33047 4.57042 8.33047 5.74125V8.125H6.99714V6.01167C6.99714 5.5075 6.89547 4.85917 6.11047 4.85917C5.34922 4.85917 5.21922 5.40792 5.21922 5.97417V8.125H3.89006V3.665H5.20964ZM2.99714 2.54417C2.99697 2.67625 2.95782 2.80535 2.88459 2.91527C2.81136 3.0252 2.7073 3.11105 2.58547 3.16208C2.46369 3.2127 2.32961 3.22594 2.20028 3.20012C2.07095 3.1743 1.95223 3.11058 1.85922 3.01708C1.76604 2.92352 1.7026 2.8045 1.67689 2.67499C1.65117 2.54547 1.66432 2.41124 1.71468 2.28918C1.76505 2.16712 1.85038 2.06267 1.95995 1.98897C2.06952 1.91528 2.19843 1.87563 2.33047 1.875C2.41823 1.875 2.50513 1.89233 2.58617 1.92599C2.66722 1.95964 2.74082 2.00897 2.80276 2.07115C2.8647 2.13332 2.91375 2.2071 2.94711 2.28828C2.98047 2.36945 2.99747 2.45641 2.99714 2.54417Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M2.9974 3.66992H1.66406V8.12451H2.9974V3.66992Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1642_2720">
                                            <rect width="10" height="10" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div>
                    <span className='text-[1.25rem] text-gray-text'>
                        &copy; 2025 SalesEco. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
