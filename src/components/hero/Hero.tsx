import CountdownTimer from '../countdown/CountdownTimer';


// type Props = {};

const Hero = () => {
    return (
        <div className="relative h-full flex flex-col space-y-[2rem] justify-center items-center">
            <div>
                <CountdownTimer />
            </div>

            <div className="text-center">
                <h1 className="font-inter-extrabold text-[2.75rem] md:text-[4.5rem] md:leading-[5rem] mb-[2rem]">
                    Buyers with <span className="inline-block text-[#3b82f6]">Budget</span>. Sellers
                    with <br className="hidden md:block" />
                    <span className="inline-block text-[#3b82f6]">Solutions</span>.
                </h1>

                <p className="text-[1.75rem] leading-[2.15rem]">
                    SalesEco connects real buyers and verified sellers-no fluff, no{' '}
                    <br className="hidden md:block" /> fraud, just fast, intentional sales.
                </p>
            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row-reverse gap-8 md:gap-14">
                <div className="w-fit p-[.8rem] bg-white rounded-[1rem] flex items-center gap-2">
                    <div className="flex items-center isolate">
                        <div className="bg-[#34a659] size-11 flex justify-center items-center rounded-full border border-white">
                            <span className='inline-block text-[1.45rem] text-white'>S</span>
                        </div>
                        <div className="bg-[#4185f4] size-11 flex justify-center items-center relative -left-2 -z-1 rounded-full border border-white">
                            <span className='inline-block text-[1.45rem] text-white'>J</span>
                        </div>
                        <div className="bg-[#e3453d] size-11 flex justify-center items-center rounded-full relative -left-4 -z-2 border border-white">
                            <span className='inline-block text-[1.45rem] text-white'>P</span>
                        </div>
                        <div className="bg-[#f4ba0d] size-11 flex items-center justify-center rounded-full relative -left-6 -z-3 border border-white">
                            <span className='inline-block text-[1.45rem] text-white'>T</span>
                        </div>
                    </div>
                    <div>
                        <span className="text-[1.5rem]">1,343 people have joined</span>
                    </div>
                </div>
                <div className='relative z-1'>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfyPmZHBlVgciq3UgSdU_6LW19FR7-E7zsIOrR4MQ_eGUTzZw/viewform?usp=dialog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="cursor-pointer bg-btn-active flex items-center gap-4 py-[1.35rem] px-[2.5rem] rounded-[1.5rem] text-white">
                            <span className="inline-block text-[1.75rem]">Join waitlist</span>
                            <span className="inline-block">
                                <svg
                                    className="w-[1.75rem]"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.91406 7H11.0807M11.0807 7L7.58073 3.5M11.0807 7L7.58073 10.5"
                                        stroke="white"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>
                    </a>
                </div>
            </div>

            <div className="md:mt-[3rem]">
                <span className="text-[1.5rem]">Secure early access to targeted sales</span>
            </div>
        </div>
    );
};

export default Hero;
