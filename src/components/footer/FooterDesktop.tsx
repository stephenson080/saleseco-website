import { Link } from 'react-router';

import logo from '../../assets/icons/logo_light.png';
import IonLogoX from '../icons/IonLogoX';
import IonLocationOutline from '../icons/IonLocationOutline';

// type Props = {};

const FooterDesktop = () => {
    return (
        <footer className="w-full flex justify-between py-[4.5rem] px-[2rem] bg-[#111827]">
            {/* Top */}
            <div className="flex flex-col">
                <div className="w-80 h-fit mb-[4rem]">
                    <Link to="/">
                        <img src={logo} alt="company_logo" />
                    </Link>
                </div>

                <div className="">
                    <div className="mb-[2rem]">
                        <p className="text-[1.75rem] leading-[2.25rem] text-gray-text">
                            Connecting buyers with budgets to sellers <br />
                            with solution.
                        </p>
                    </div>

                    {/* Media links */}
                    <div className="mb-[2rem]">
                        <ul className="flex gap-[1.25rem]">
                            <li className="p-[1rem] rounded-full bg-dark-gray">
                                <Link
                                    target="_blank"
                                    to="https://www.instagram.com/salesecoofficial?igsh=MWRxZ3Bydms0dGJvNA=="
                                >
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
                                <Link
                                    target="_blank"
                                    to="https://x.com/sales_eco?t=ZhrjbyR9EVAOhXZ38M8dKg&s=09"
                                >
                                    <IonLogoX className="text-[2rem] text-white" />
                                </Link>
                            </li>
                            <li className="flex items-center justify-center p-[1rem] rounded-full bg-dark-gray">
                                <Link
                                    target="_blank"
                                    to="https://www.tiktok.com/@saleseco5?_t=ZM-8wl8QuLSPOK&_r=1"
                                >
                                    <svg
                                        className="w-[2.25rem]"
                                        viewBox="0 0 16 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.5963 2.82C11.9128 2.03953 11.5361 1.0374 11.5363 0H8.44625V12.4C8.42291 13.0712 8.13977 13.7071 7.65656 14.1735C7.17334 14.6399 6.52785 14.9004 5.85625 14.9C4.43625 14.9 3.25625 13.74 3.25625 12.3C3.25625 10.58 4.91625 9.29 6.62625 9.82V6.66C3.17625 6.2 0.15625 8.88 0.15625 12.3C0.15625 15.63 2.91625 18 5.84625 18C8.98625 18 11.5363 15.45 11.5363 12.3V6.01C12.7892 6.90985 14.2936 7.39265 15.8363 7.39V4.3C15.8363 4.3 13.9563 4.39 12.5963 2.82Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>
                            </li>
                            <li className="p-[1rem] rounded-full bg-dark-gray">
                                <Link target="_blank" to="https://youtube.com/@salesecoafrica?si=OirgIwEz7XiFgr7w">
                                    <svg
                                        className="w-[2.25rem]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Copyright */}
                    <div>
                        <span className="text-[1.65rem] text-gray-text">
                            &copy; 2025 SalesEco. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>

            {/* List */}

            <div className="">
                <span className="mb-[2rem] inline-block font-inter-bold text-[1.95rem] text-white">
                    Quick links
                </span>

                <ul className="space-y-6 text-gray-text">
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                How it works
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Why SalesEco
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfyPmZHBlVgciq3UgSdU_6LW19FR7-E7zsIOrR4MQ_eGUTzZw/viewform?usp=dialog">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Join waitlist
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <span className="mb-[2rem] inline-block font-inter-bold text-[1.95rem] text-white">
                    Legal
                </span>

                <ul className="space-y-6 text-gray-text">
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Terms of service
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Privacy policy
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Cookie policy
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Data processing
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="">
                <span className="mb-[2rem] inline-block font-inter-bold text-[1.95rem] text-white">
                    Contact
                </span>

                <ul className="space-y-5 text-gray-text">
                    <li>
                        <Link to="/" className="space-x-4 flex items-center">
                            <span className="inline-block">
                                <svg
                                    className="w-[1.75rem]"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                                        fill="white"
                                        fillOpacity="0.7"
                                    />
                                </svg>
                            </span>
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                support@saleseco.com
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="space-x-4 flex items-center" to="/">
                            <span className="inline-block">
                                <svg
                                    className="w-[1.75rem]"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.89394e-05 0H8.58003L10.067 6.69L8.20703 8.55C9.30066 10.252 10.7477 11.6988 12.45 12.792L14.31 10.933L21 12.42V21H20C16.1504 21.0066 12.3814 19.8964 9.15003 17.804C6.76725 16.262 4.73807 14.2328 3.19603 11.85C1.10365 8.6186 -0.00653503 4.84967 2.89394e-05 1V0ZM2.02703 2C2.19554 5.11991 3.17776 8.14138 4.87603 10.764C6.26435 12.909 8.09107 14.7357 10.236 16.124C12.8586 17.8223 15.8801 18.8045 19 18.973V14.024L14.947 13.124L12.773 15.299L12.11 14.922C9.59267 13.4915 7.50857 11.4074 6.07803 8.89L5.70103 8.227L7.87603 6.053L6.97603 2H2.02703Z"
                                        fill="white"
                                        fillOpacity="0.7"
                                    />
                                </svg>
                            </span>
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                +234 70199 54106
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="space-x-4 flex items-center" to="/">
                            <span className="inline-block">
                                <IonLocationOutline className="text-[2.25rem]" />
                            </span>
                            <span className="font-inter text-[1.75rem] text-[#D1D5DB]">
                                Benin City, Nigeria
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default FooterDesktop;
