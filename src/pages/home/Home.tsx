import React from 'react';

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <section className='px-[1rem] py-[4rem]'>
                <div className="w-full mx-auto">
                    <div className="text-center mb-[2rem]">
                        <h3 className="font-inter-bold text-[1.75rem]">
                            <span>Why </span>
                            <span className='text-[#3b82f6]'>SalesEco</span>
                        </h3>
                    </div>

                    <div className='w-full py-[2.5rem] px-[2.5rem] rounded-[1.5rem] shadow-2xl'>
                        <div>

                        </div>
                        <div>
                            <h4 className='font-inter-bold text-[1.75rem] mb-[.75rem]'>
                                Set budgets, not just interests
                            </h4>
                            <p className='text-[1.5rem]'>
                                No more window shoppers. Every user has a set budget and intent to transact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section className="px-[1rem] py-[4rem] bg-white shadow-2xl">
                <div className="w-full mx-auto">
                    <div className="text-center mb-[2rem]">
                        <h3 className="font-inter-bold text-[1.75rem]">Early Access Perks</h3>
                    </div>

                    <div className="w-full space-y-[2.25rem] py-[2.5rem] px-[1.25rem] rounded-[1.5rem] shadow-2xl">
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem]"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 10V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H5.17C5.05698 3.67873 4.99949 3.34057 5 3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.316071 7.20435 0 8 0C9 0 9.88 0.5 10.43 1.24V1.23L11 2L11.57 1.23V1.24C12.12 0.5 13 0 14 0C14.7956 0 15.5587 0.316071 16.1213 0.87868C16.6839 1.44129 17 2.20435 17 3C17.0005 3.34057 16.943 3.67873 16.83 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9C22 9.26522 21.8946 9.51957 21.7071 9.70711C21.5196 9.89464 21.2652 10 21 10ZM3 18H10V10H3V18ZM19 18V10H12V18H19ZM8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2ZM14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3C13 3.26522 13.1054 3.51957 13.2929 3.70711C13.4804 3.89464 13.7348 4 14 4C14.2652 4 14.5196 3.89464 14.7071 3.70711C14.8946 3.51957 15 3.26522 15 3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2ZM2 6V8H10V6H2ZM12 6V8H20V6H12Z"
                                        fill="#3B82F6"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem]">
                                    Get 5% of your set budget as a shopping voucher upon launch
                                </h4>
                                <p className="text-[1.45rem]">
                                    Early adopters receive special vouchers to kickstart their
                                    shopping experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem]"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.125 2.5L8 5.75L9.875 4.0625L9.4375 6.25H2.8125L2.375 4.0625L4.25 5.75L6.125 2.5ZM6.125 0L3.9375 3.75L0.5 0.625L1.75 7.5H10.5L11.75 0.625L8.3125 3.75L6.125 0ZM10.5 8.75H1.75V9.375C1.75 9.75 2 10 2.375 10H9.875C10.25 10 10.5 9.75 10.5 9.375V8.75Z"
                                        fill="#3B82F6"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem]">
                                    Enjoy a full month of premium experience &mdash; on us
                                </h4>
                                <p className="text-[1.45rem]">
                                    Access all premium features without any charges for your first
                                    month.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem]"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.37497 5.74988L6.87497 8.24988L5.62497 6.99988M8.27878 1.66175L9.04188 2.31206C9.23413 2.47589 9.47284 2.57494 9.72464 2.59504L10.724 2.67468C11.3116 2.72157 11.7783 3.188 11.8252 3.77558L11.9047 4.77515C11.9248 5.02694 12.0242 5.26599 12.188 5.45825L12.838 6.22114C13.2204 6.66978 13.2204 7.32971 12.8381 7.77835L12.1881 8.54136C12.0242 8.73361 11.925 8.97275 11.9049 9.22455L11.8249 10.2239C11.778 10.8115 11.312 11.2782 10.7245 11.3251L9.7247 11.4049C9.47291 11.425 9.23397 11.5238 9.04172 11.6876L8.27878 12.338C7.83014 12.7203 7.1698 12.7204 6.72116 12.338L5.95822 11.6877C5.76597 11.5238 5.52703 11.4249 5.27524 11.4048L4.27548 11.3251C3.6879 11.2782 3.22191 10.8116 3.17502 10.2241L3.09506 9.22461C3.07497 8.97282 2.9757 8.73388 2.81186 8.54163L2.16184 7.77838C1.77951 7.32974 1.77933 6.67002 2.16166 6.22138L2.81227 5.45813C2.9761 5.26588 3.07442 5.02694 3.09452 4.77515L3.17447 3.7757C3.22136 3.18812 3.6887 2.72151 4.27628 2.67462L5.27493 2.59497C5.52672 2.57488 5.76578 2.47591 5.95803 2.31208L6.72123 1.66175C7.16987 1.27942 7.83014 1.27942 8.27878 1.66175Z"
                                        stroke="#3B82F6"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem]">
                                    Be among the first verified users with higher visibility
                                </h4>
                                <p className="text-[1.45rem]">
                                    Get priority placement in search results and recommendations
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem]"
                                    viewBox="0 0 15 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.875 11.6875V2C1.875 1.65625 2.15625 1.375 2.5 1.375H12.5C12.8438 1.375 13.125 1.65625 13.125 2V9.5C13.125 9.84375 12.8438 10.125 12.5 10.125H3.4375L1.875 11.6875Z"
                                        stroke="#3B82F6"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M7.5 3.875V5.125"
                                        stroke="#3B82F6"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M7.5 7.625V7.63125"
                                        stroke="#3B82F6"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem]">
                                    Beta tester recognition and feedback opportunities
                                </h4>
                                <p className="text-[1.45rem]">
                                    Help shape the platform's future and get recognized for your
                                    contributions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // [ToDo - Waitlist form] // Know more
            <section className="px-[2rem] py-[4rem] bg-white shadow-2xl">
                <div className="w-[85%] mx-auto">
                    <div className="text-center mb-[2rem]">
                        <h3 className="font-inter-bold text-[1.75rem]">
                            Want to Know More Before You Join?
                        </h3>
                    </div>
                    <div className="w-full p-[2.5rem] rounded-[1.5rem] shadow-2xl">
                        <h4 className="text-[1.75rem] font-inter-bold text-center mb-[2rem]">
                            SalesEco is built for people who've experienced:
                        </h4>

                        <ul className="space-y-7.5">
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-3 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Slow sales</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-3 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Poor visibility</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-3 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Wasted ad spend</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-3 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">
                                    Fraud or unserious buyers/sellers
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
