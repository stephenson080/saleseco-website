// Components
// import SalesEcoForm from '../../components/form/SalesEcoForm';
import Hero from '../../components/hero/Hero';

// Icons
import cardTl from '../../assets/icons/card_tl.svg';
import cardTr from '../../assets/icons/card_tr.svg';
import cardBl from '../../assets/icons/shop_bags.svg';
import cardBr from '../../assets/icons/cart.svg';

// Images
import image_1 from '../../assets/images/image_1.jpg';
import image_2 from '../../assets/images/image_2.jpg';
import image_3 from '../../assets/images/image_3.jpg';

type Props = {
    howItWorksRef: React.RefObject<HTMLDivElement>;
    whySalesEcoRef: React.RefObject<HTMLDivElement>;
    earlyAccessRef: React.RefObject<HTMLDivElement>;
};

const Home = (props: Props) => {
    return (
        <div className="pt-[5rem]">
            <section className="relative h-fit md:h-[calc(100vh-50px)] py-[4rem] grad">
                <div className="w-[80%] h-full mx-auto ">
                    <Hero />
                </div>

                {/* Icons */}
                <div className="absolute top-0 left-0 h-full w-full">
                    <img
                        src={cardTl}
                        alt=""
                        className="squiggly-effect absolute top-14 left-0 md:top-20 md:left-50 w-[6rem] md:w-[11rem]"
                    />
                    <img
                        src={cardTr}
                        alt=""
                        className="squiggly-effect absolute top-35 right-20 md:top-40 md:right-90 w-[4rem] md:w-[11rem]"
                    />
                    <img
                        src={cardBl}
                        alt=""
                        className="squiggly-effect absolute bottom-40 left-0 md:bottom-30 md:left-100 w-[6rem] md:w-[11rem]"
                    />
                    <img
                        src={cardBr}
                        alt=""
                        className="squiggly-effect absolute bottom-60 right-0 md:bottom-80 md:right-100 w-[6rem] md:w-[11rem]"
                    />
                </div>
            </section>

            <section className="px-[2rem] py-[4rem] md:py-[8rem] bg-white">
                <div className="space-y-[2rem] md:space-y-0 md:flex md:justify-center gap-[3.5rem] items-center">
                    <div className="w-full md:w-[60rem] custom-shadow rounded-[1.75rem]">
                        <div className="w-full p-[4rem]">
                            <h4 className="font-inter-bold text-[1.75rem] md:text-[2.5rem] text-center mb-[3rem]">
                                Built for sellers who want
                            </h4>
                            <ul className="space-y-[1.5rem]">
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        No more random traffic
                                    </span>
                                </li>
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        Access to buyers with set shopping budgets
                                    </span>
                                </li>
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        Increased visibility based on intent, not promotion
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-[60rem] custom-shadow rounded-[1.75rem]">
                        <div className="w-full p-[4rem]">
                            <h4 className="font-inter-bold text-[1.75rem] md:text-[2.5rem] text-center mb-[3rem]">
                                Built for buyers who want
                            </h4>
                            <ul className="space-y-[1.5rem]">
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        A safer more focused shopping experience
                                    </span>
                                </li>
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        Sellers that meet their budget and prefrences
                                    </span>
                                </li>
                                <li className="flex items-center gap-[1.5rem]">
                                    <span className="inline-block">
                                        <svg
                                            className="w-[1.85rem] md:w-[2rem]"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.75 7.49933L6.40165 10.151L11.7044 4.84766"
                                                stroke="#3B82F6"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-[1.25rem] md:text-[1.75rem]">
                                        Clear, simple matching by location and intent
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How? */}
            <section ref={props.howItWorksRef} className="px-[1rem] py-[4rem] grad-2">
                <div className="w-full mx-auto">
                    <div className="text-center mb-[3rem] md:mb-[6rem]">
                        <h3 className="font-inter-bold text-[1.75rem] md:text-[2.75rem]">
                            <span>How </span>
                            <span className="text-[#3b82f6]">SalesEco </span>
                            <span>Works</span>
                        </h3>
                    </div>

                    <div className="w-full space-y-[3.75rem]">
                        <div className="w-full md:w-[90%] mx-auto space-y-[4rem]">
                            <div className="md:w-[70%] flex gap-4 md:gap-12">
                                <div className="flex-shrink-0 h-[15rem] w-[50%] md:h-[28rem] rounded-[1.5rem]">
                                    <img
                                        src={image_1}
                                        alt=""
                                        className="w-full h-full object-cover rounded-[1.5rem]"
                                    />
                                </div>
                                <div className="flex gap-4 md:gap-12">
                                    <span className="inline-block font-inter-bold text-[2rem] md:text-[3.5rem] text-[#3b82f6]">
                                        01)
                                    </span>
                                    <div>
                                        <h4 className="font-inter-bold text-[1.5rem] md:text-[1.85rem] md:leading-[2rem] mb-[.75rem]">
                                            State your shopping budget or inventory list
                                        </h4>
                                        <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                            Let us know what you are planning on buying or selling
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[70%] flex justify-self-end gap-4 md:gap-12">
                                <div className="flex-shrink-0 h-[15rem] w-[50%] md:h-[28rem] rounded-[1.5rem]">
                                    <img
                                        src={image_2}
                                        alt=""
                                        className="w-full h-full object-cover rounded-[1.5rem]"
                                    />
                                </div>
                                <div className="flex gap-4 md:gap-12">
                                    <span className="inline-block font-inter-bold text-[2rem] md:text-[3.5rem] text-[#3b82f6]">
                                        02)
                                    </span>
                                    <div>
                                        <h4 className="font-inter-bold text-[1.5rem] md:text-[1.85rem] md:leading-[2rem] mb-[.75rem]">
                                            Get Matched With the Right Users
                                        </h4>
                                        <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                            SalesEco connects you based on category, budget, gender,
                                            and location.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[70%] flex gap-4 md:gap-12">
                                <div className="flex-shrink-0 h-[15rem] w-[50%] md:h-[28rem] rounded-[1.5rem]">
                                    <img
                                        src={image_3}
                                        alt=""
                                        className="w-full h-full object-cover rounded-[1.5rem]"
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-between">
                                    <div className="flex gap-4 md:gap-12">
                                        <span className="inline-block font-inter-bold text-[2rem] md:text-[3.5rem] text-[#3b82f6]">
                                            03)
                                        </span>
                                        <div>
                                            <h4 className="font-inter-bold text-[1.5rem] md:text-[1.85rem] md:leading-[2rem] mb-[.75rem]">
                                                Shop or Sell to Active Verified Users
                                            </h4>
                                            <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                                No more window shoppers. Every user has a set budget
                                                and intent to transact.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex place-self-end md:place-self-start">
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfyPmZHBlVgciq3UgSdU_6LW19FR7-E7zsIOrR4MQ_eGUTzZw/viewform?usp=dialog"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <button className="bg-btn-active py-[1rem] md:py-[1.35rem] px-[1.5rem] md:px-[2.5rem] rounded-[.75rem] text-white text-[1.5rem]">
                                                Join waitlist
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why? */}
            <section ref={props.whySalesEcoRef} className="px-[1rem] py-[4rem] md:py-[8rem]">
                <div className="w-full md:w-[90%] mx-auto">
                    <div className="text-center mb-[3rem] md:mb-[6rem]">
                        <h3 className="font-inter-bold text-[1.75rem] md:text-[2.75rem]">
                            <span>Why </span>
                            <span className="text-[#3b82f6]">SalesEco</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[3rem] space-y-[3rem] md:space-y-0">
                        <div className="w-full py-[4.5rem] px-[2.5rem] rounded-[1.5rem] custom-shadow">
                            <div className="mb-[2rem]">
                                <svg
                                    className="w-[2.75rem]"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.8333 6.33333V3.83333C15.8333 3.61232 15.7455 3.40036 15.5893 3.24408C15.433 3.0878 15.221 3 15 3H4.16667C3.72464 3 3.30072 3.17559 2.98816 3.48816C2.67559 3.80072 2.5 4.22464 2.5 4.66667C2.5 5.10869 2.67559 5.53262 2.98816 5.84518C3.30072 6.15774 3.72464 6.33333 4.16667 6.33333H16.6667C16.8877 6.33333 17.0996 6.42113 17.2559 6.57741C17.4122 6.73369 17.5 6.94565 17.5 7.16667V10.5M17.5 10.5H15C14.558 10.5 14.1341 10.6756 13.8215 10.9882C13.5089 11.3007 13.3333 11.7246 13.3333 12.1667C13.3333 12.6087 13.5089 13.0326 13.8215 13.3452C14.1341 13.6577 14.558 13.8333 15 13.8333H17.5C17.721 13.8333 17.933 13.7455 18.0893 13.5893C18.2455 13.433 18.3333 13.221 18.3333 13V11.3333C18.3333 11.1123 18.2455 10.9004 18.0893 10.7441C17.933 10.5878 17.721 10.5 17.5 10.5Z"
                                        stroke="#3B82F6"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.5 4.66602V16.3327C2.5 16.7747 2.67559 17.1986 2.98816 17.5112C3.30072 17.8238 3.72464 17.9993 4.16667 17.9993H16.6667C16.8877 17.9993 17.0996 17.9116 17.2559 17.7553C17.4122 17.599 17.5 17.387 17.5 17.166V13.8327"
                                        stroke="#3B82F6"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-inter-bold text-[1.75rem] md:text-[2rem] mb-[.75rem]">
                                    Set budgets, not just interests
                                </h4>
                                <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                    No more window shoppers. Every user has a set budget and intent
                                    to transact.
                                </p>
                            </div>
                        </div>
                        <div className="w-full py-[4.5rem] px-[2.5rem] rounded-[1.5rem] custom-shadow">
                            <div className="mb-[2rem]">
                                <svg
                                    className="w-[2.75rem]"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1642_2400)">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.4281 3.82115C11.4281 3.60803 11.3435 3.40364 11.1928 3.25294C11.0421 3.10224 10.8377 3.01758 10.6246 3.01758C10.4114 3.01758 10.207 3.10224 10.0563 3.25294C9.90564 3.40364 9.82098 3.60803 9.82098 3.82115V5.13151C8.67196 5.30427 7.60861 5.84091 6.78709 6.66262C5.96558 7.48433 5.42919 8.5478 5.2567 9.69686H3.9442C3.73108 9.69686 3.52668 9.78153 3.37599 9.93223C3.22529 10.0829 3.14063 10.2873 3.14062 10.5004C3.14062 10.7136 3.22529 10.9179 3.37599 11.0686C3.52668 11.2193 3.73108 11.304 3.9442 11.304H5.25455C5.42731 12.453 5.96395 13.5164 6.78566 14.3379C7.60737 15.1594 8.67085 15.6958 9.81991 15.8683V17.1797C9.81991 17.3928 9.90457 17.5972 10.0553 17.7479C10.206 17.8986 10.4104 17.9833 10.6235 17.9833C10.8366 17.9833 11.041 17.8986 11.1917 17.7479C11.3424 17.5972 11.4271 17.3928 11.4271 17.1797V15.8694C12.5761 15.6966 13.6394 15.16 14.4609 14.3383C15.2825 13.5165 15.8188 12.4531 15.9913 11.304H17.3028C17.5159 11.304 17.7203 11.2193 17.871 11.0686C18.0217 10.9179 18.1063 10.7136 18.1063 10.5004C18.1063 10.2873 18.0217 10.0829 17.871 9.93223C17.7203 9.78153 17.5159 9.69686 17.3028 9.69686H15.9924C15.8197 8.548 15.2832 7.48476 14.4617 6.66326C13.6402 5.84176 12.577 5.30528 11.4281 5.13258V3.82115ZM14.4453 10.494C14.444 9.73889 14.219 9.00108 13.7987 8.37376C13.3784 7.74643 12.7816 7.25772 12.0837 6.96933C11.3858 6.68095 10.6181 6.60583 9.8776 6.75345C9.13705 6.90108 8.45685 7.26484 7.92291 7.79879C7.38896 8.33274 7.0252 9.01293 6.87757 9.75348C6.72994 10.494 6.80507 11.2617 7.09345 11.9596C7.38183 12.6575 7.87055 13.2543 8.49787 13.6746C9.1252 14.0949 9.86301 14.3199 10.6181 14.3212H10.631C11.6421 14.3195 12.6113 13.917 13.3262 13.2021C14.0412 12.4871 14.4436 11.518 14.4453 10.5069V10.494ZM9.3067 10.5004C9.3067 10.1509 9.44554 9.81572 9.69269 9.56857C9.93983 9.32142 10.275 9.18258 10.6246 9.18258C10.9741 9.18258 11.3093 9.32142 11.5564 9.56857C11.8036 9.81572 11.9424 10.1509 11.9424 10.5004C11.9424 10.85 11.8036 11.1852 11.5564 11.4323C11.3093 11.6794 10.9741 11.8183 10.6246 11.8183C10.275 11.8183 9.93983 11.6794 9.69269 11.4323C9.44554 11.1852 9.3067 10.85 9.3067 10.5004Z"
                                            fill="#3B82F6"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1642_2400">
                                            <rect
                                                width="15"
                                                height="15"
                                                fill="white"
                                                transform="translate(3.125 3)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-inter-bold text-[1.75rem] md:text-[2rem] mb-[.75rem]">
                                    Targeted Matching
                                </h4>
                                <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                    We eliminate noise by focusing on real-time needs and market
                                    categories.
                                </p>
                            </div>
                        </div>
                        <div className="w-full py-[4.5rem] px-[2.5rem] rounded-[1.5rem] custom-shadow">
                            <div className="mb-[2rem]">
                                <svg
                                    className="w-[2.75rem]"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.1667 14.6667C13.2462 14.6667 12.5 15.4129 12.5 16.3333C12.5 17.2538 13.2462 18 14.1667 18C15.0871 18 15.8333 17.2538 15.8333 16.3333C15.8333 15.4129 15.0871 14.6667 14.1667 14.6667ZM14.1667 14.6667H7.74495C7.36074 14.6667 7.16828 14.6667 7.01009 14.5983C6.87055 14.538 6.74949 14.4409 6.66128 14.3171C6.56242 14.1783 6.52266 13.9928 6.44395 13.6254L4.3929 4.05387C4.31237 3.67803 4.27156 3.49031 4.17155 3.34993C4.08335 3.22612 3.96231 3.12868 3.82276 3.06837C3.66455 3 3.47316 3 3.08878 3H2.5M5 5.5H15.7277C16.3292 5.5 16.6296 5.5 16.8315 5.6253C17.0083 5.73505 17.1378 5.90718 17.1942 6.1075C17.2586 6.33619 17.1759 6.62497 17.0092 7.20288L15.8553 11.2029C15.7556 11.5484 15.7058 11.7209 15.6047 11.8491C15.5154 11.9622 15.3977 12.0508 15.2642 12.1052C15.1134 12.1667 14.9343 12.1667 14.5767 12.1667H6.44206M6.66667 18C5.74619 18 5 17.2538 5 16.3333C5 15.4129 5.74619 14.6667 6.66667 14.6667C7.58714 14.6667 8.33333 15.4129 8.33333 16.3333C8.33333 17.2538 7.58714 18 6.66667 18Z"
                                        stroke="#3B82F6"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-inter-bold text-[1.75rem] md:text-[2rem] mb-[.75rem]">
                                    Built for Real Sales
                                </h4>
                                <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                    Buyers and sellers remain in the ecosystem to boost trust and
                                    transaction flow.
                                </p>
                            </div>
                        </div>
                        <div className="w-full py-[4.5rem] px-[2.5rem] rounded-[1.5rem] custom-shadow">
                            <div className="mb-[2rem]">
                                <svg
                                    className="w-[2.75rem]"
                                    viewBox="0 0 20 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.903 6.42369C19.1402 6.71941 19.2716 7.10369 19.2716 7.50084C19.2716 7.89941 19.1402 8.28227 18.903 8.57798C17.403 10.3937 13.9887 13.9294 10.003 13.9294C6.0173 13.9294 2.60301 10.3937 1.10301 8.57798C0.86104 8.2714 0.731009 7.89139 0.734441 7.50084C0.734441 7.10369 0.86587 6.71941 1.10301 6.42369C2.60301 4.60798 6.0173 1.07227 10.003 1.07227C13.9887 1.07227 17.403 4.60798 18.903 6.42369Z"
                                        stroke="#3B82F6"
                                        strokeWidth="1.71429"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M10.0056 10.3588C10.7633 10.3588 11.4901 10.0578 12.0259 9.52198C12.5617 8.98616 12.8627 8.25944 12.8627 7.50167C12.8627 6.74391 12.5617 6.01719 12.0259 5.48137C11.4901 4.94555 10.7633 4.64453 10.0056 4.64453C9.24782 4.64453 8.52109 4.94555 7.98528 5.48137C7.44946 6.01719 7.14844 6.74391 7.14844 7.50167C7.14844 8.25944 7.44946 8.98616 7.98528 9.52198C8.52109 10.0578 9.24782 10.3588 10.0056 10.3588Z"
                                        stroke="#3B82F6"
                                        strokeWidth="1.71429"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-inter-bold text-[1.75rem] md:text-[2rem] mb-[.75rem]">
                                    Visibility That Counts
                                </h4>
                                <p className="text-[1.5rem] md:text-[1.75rem] md:leading-[1.95rem]">
                                    The more you're willing to spend or offer, the more reach you
                                    unlock.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section ref={props.earlyAccessRef} className="px-[1rem] py-[4rem] md:py-[6rem] bg-white custom-shadow">
                <div className="w-full md:w-[80%] mx-auto">
                    <div className="text-center mb-[2rem] md:mb-[4rem]">
                        <h3 className="font-inter-bold text-[1.75rem] md:text-[2.75rem]">
                            Early Access Perks
                        </h3>
                    </div>

                    <div className="w-full space-y-[2.5rem] py-[2.5rem] px-[1.25rem] md:p-[5rem] rounded-[1.5rem] custom-shadow">
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] md:p-[2rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem] md:w-[2.5rem]"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21 10V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V10C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H5.17C5.05698 3.67873 4.99949 3.34057 5 3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.316071 7.20435 0 8 0C9 0 9.88 0.5 10.43 1.24V1.23L11 2L11.57 1.23V1.24C12.12 0.5 13 0 14 0C14.7956 0 15.5587 0.316071 16.1213 0.87868C16.6839 1.44129 17 2.20435 17 3C17.0005 3.34057 16.943 3.67873 16.83 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9C22 9.26522 21.8946 9.51957 21.7071 9.70711C21.5196 9.89464 21.2652 10 21 10ZM3 18H10V10H3V18ZM19 18V10H12V18H19ZM8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4C8.26522 4 8.51957 3.89464 8.70711 3.70711C8.89464 3.51957 9 3.26522 9 3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2ZM14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3C13 3.26522 13.1054 3.51957 13.2929 3.70711C13.4804 3.89464 13.7348 4 14 4C14.2652 4 14.5196 3.89464 14.7071 3.70711C14.8946 3.51957 15 3.26522 15 3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2ZM2 6V8H10V6H2ZM12 6V8H20V6H12Z"
                                        fill="#3B82F6"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem] md:text-[1.75rem]">
                                    Get 5% of your set budget as a shopping voucher upon launch
                                </h4>
                                <p className="text-[1.45rem] md:text-[1.65rem]">
                                    Early adopters receive special vouchers to kickstart their
                                    shopping experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] md:p-[2rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem] md:w-[2.5rem]"
                                    viewBox="0 0 12 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.125 2.5L8 5.75L9.875 4.0625L9.4375 6.25H2.8125L2.375 4.0625L4.25 5.75L6.125 2.5ZM6.125 0L3.9375 3.75L0.5 0.625L1.75 7.5H10.5L11.75 0.625L8.3125 3.75L6.125 0ZM10.5 8.75H1.75V9.375C1.75 9.75 2 10 2.375 10H9.875C10.25 10 10.5 9.75 10.5 9.375V8.75Z"
                                        fill="#3B82F6"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem] md:text-[1.75rem]">
                                    Enjoy a full month of premium experience &mdash; on us
                                </h4>
                                <p className="text-[1.45rem] md:text-[1.65rem]">
                                    Access all premium features without any charges for your first
                                    month.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] md:p-[2rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem] md:w-[2.5rem]"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.37497 5.74988L6.87497 8.24988L5.62497 6.99988M8.27878 1.66175L9.04188 2.31206C9.23413 2.47589 9.47284 2.57494 9.72464 2.59504L10.724 2.67468C11.3116 2.72157 11.7783 3.188 11.8252 3.77558L11.9047 4.77515C11.9248 5.02694 12.0242 5.26599 12.188 5.45825L12.838 6.22114C13.2204 6.66978 13.2204 7.32971 12.8381 7.77835L12.1881 8.54136C12.0242 8.73361 11.925 8.97275 11.9049 9.22455L11.8249 10.2239C11.778 10.8115 11.312 11.2782 10.7245 11.3251L9.7247 11.4049C9.47291 11.425 9.23397 11.5238 9.04172 11.6876L8.27878 12.338C7.83014 12.7203 7.1698 12.7204 6.72116 12.338L5.95822 11.6877C5.76597 11.5238 5.52703 11.4249 5.27524 11.4048L4.27548 11.3251C3.6879 11.2782 3.22191 10.8116 3.17502 10.2241L3.09506 9.22461C3.07497 8.97282 2.9757 8.73388 2.81186 8.54163L2.16184 7.77838C1.77951 7.32974 1.77933 6.67002 2.16166 6.22138L2.81227 5.45813C2.9761 5.26588 3.07442 5.02694 3.09452 4.77515L3.17447 3.7757C3.22136 3.18812 3.6887 2.72151 4.27628 2.67462L5.27493 2.59497C5.52672 2.57488 5.76578 2.47591 5.95803 2.31208L6.72123 1.66175C7.16987 1.27942 7.83014 1.27942 8.27878 1.66175Z"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem] md:text-[1.75rem]">
                                    Be among the first verified users with higher visibility
                                </h4>
                                <p className="text-[1.45rem] md:text-[1.65rem]">
                                    Get priority placement in search results and recommendations
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-[2.5rem]">
                            <div className="p-[1rem] md:p-[2rem] h-fit rounded-full bg-light-blue">
                                <svg
                                    className="w-[2rem] md:w-[2.5rem]"
                                    viewBox="0 0 15 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.875 11.6875V2C1.875 1.65625 2.15625 1.375 2.5 1.375H12.5C12.8438 1.375 13.125 1.65625 13.125 2V9.5C13.125 9.84375 12.8438 10.125 12.5 10.125H3.4375L1.875 11.6875Z"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 3.875V5.125"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M7.5 7.625V7.63125"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="space-y-[.85rem]">
                                <h4 className="font-inter-bold text-[1.5rem] md:text-[1.75rem]">
                                    Beta tester recognition and feedback opportunities
                                </h4>
                                <p className="text-[1.45rem] md:text-[1.65rem]">
                                    Help shape the platform's future and get recognized for your
                                    contributions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* [ToDo - Waitlist form] */}
            {/* <section className=" disabled px-[1rem] bg-[#f9fafb] py-[6rem]">
                <div className="w-[95%] mx-auto">
                    <div className="text-center mb-[3rem]">
                        <h3 className="font-inter-bold text-[1.75rem] md:text-[2.75rem] mb-[1.5rem]">
                            Be the First to Join the Future of Fast, Trusted Sale
                        </h3>
                        <span className="inline-bloc text-[1.5rem] md:text-[1.75rem]">
                            Join our exclusive waitlist and secure early access to SalesEco
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-[80%] mx-auto">
                    <SalesEcoForm />
                </div>
            </section> */}

            <section className="px-[2rem] py-[6rem] bg-white custom-shadow">
                <div className="w-[85%] mx-auto">
                    <div className="text-center mb-[4rem]">
                        <h3 className="font-inter-bold text-[1.75rem] md:text-[2.75rem]">
                            Want to Know More Before You Join?
                        </h3>
                    </div>
                    <div className="w-full p-[2.5rem] md:p-[5rem] rounded-[1.5rem] custom-shadow">
                        <h4 className="text-[1.75rem] md:text-[2rem] font-inter-bold text-center mb-[2rem] md:mb-[4rem]">
                            SalesEco is built for people who've experienced:
                        </h4>

                        <ul className="space-y-7.5 mb-[4rem]">
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-2 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Slow sales</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-2 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Poor visibility</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-2 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">Wasted ad spend</span>
                            </li>
                            <li className="flex items-center gap-4.5">
                                <span className="inline-block p-[.5rem] rounded-full border-2 border-[#f63b3b]">
                                    <svg
                                        className="w-[1rem]"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5 13.5L7.50002 7.50002M7.50002 7.50002L1.5 1.5M7.50002 7.50002L13.5 1.5M7.50002 7.50002L1.5 13.5"
                                            stroke="#F63B3B"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-[1.65rem]">
                                    Fraud or unserious buyers/sellers
                                </span>
                            </li>
                        </ul>

                        <div className="mb-[4rem]">
                            <span className="text-[1.25rem] md:text-[1.75rem] md:leading-[1.75rem]">
                                We're building a transaction-focused marketplace that matches real
                                users for <br className="hidden md:block" />
                                serious results.
                            </span>
                        </div>

                        <div className="flex w-full justify-center gap-8 items-center">
                            <a
                                href="mailto:support@saleseco.org"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="py-[1.15rem] px-[1.75rem] text-[1.5rem] border border-[#3b82f6] text-[#3b82f6] cursor-pointer rounded-[.85rem] md:text-[1.45rem]">
                                    Talk to us
                                </button>
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1D3SP1A_0cevqY96WVR7pstAmHfy8ZU6ECk_5nLN_8oA/edit?tab=t.0"
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="py-[1.15rem] px-[1.75rem] text-[1.5rem] border border-[#3b82f6] text-[#3b82f6] cursor-pointer rounded-[.85rem] md:text-[1.45rem]">
                                    View our road map
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
