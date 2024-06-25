const Sidebar = () => {
    return (
        <aside className="basis-[421px] bg-[#FCFCFC]">
            <div className="p-6 pt-9 sticky top-0">
                <div className="flex items-center gap-4 flex-wrap">
                    <button className="min-w-[fit-content] flex items-center justify-center p-[0.75rem_1.5rem] rounded-lg bg-[#FEF4F2] text-orange border-[0.8px] border-orange flex-1 gap-[0.625rem]">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3.03015H13M3 5.53015H18M16.3333 5.53015L15.7489 14.2962C15.6612 15.6114 15.6174 16.269 15.3333 16.7677C15.0833 17.2066 14.706 17.5596 14.2514 17.7799C13.735 18.0302 13.0759 18.0302 11.7578 18.0302H9.24221C7.92409 18.0302 7.26503 18.0302 6.74861 17.7799C6.29396 17.5596 5.91674 17.2066 5.66665 16.7677C5.38259 16.269 5.33875 15.6114 5.25107 14.2962L4.66667 5.53015M8.83333 9.28015V13.4468M12.1667 9.28015V13.4468"
                                stroke="#DC4A2D"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Delete Job
                    </button>
                    <button className="min-w-[fit-content] flex items-center justify-center p-[0.75rem_1.5rem] rounded-lg bg-orange text-white flex-1 gap-[0.625rem]">
                        <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.5 7.19683L9.83331 4.53016M2.16663 14.8635L4.42287 14.6128C4.69853 14.5822 4.83636 14.5669 4.96519 14.5252C5.07949 14.4882 5.18826 14.4359 5.28855 14.3697C5.4016 14.2952 5.49966 14.1971 5.69578 14.001L14.5 5.19683C15.2364 4.46045 15.2364 3.26654 14.5 2.53016C13.7636 1.79378 12.5697 1.79378 11.8333 2.53016L3.02911 11.3343C2.83299 11.5305 2.73493 11.6285 2.66038 11.7416C2.59425 11.8419 2.54197 11.9506 2.50497 12.0649C2.46326 12.1938 2.44795 12.3316 2.41732 12.6073L2.16663 14.8635Z"
                                stroke="white"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Edit job
                    </button>
                </div>
                <div className="p-3 mt-6">
                    <div className="flex items-center justify-between">
                        <p className="flex items-center text-[#4F4F4F] p-[0.625rem] gap-[0.625rem]">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.3334 18.0302V16.3635C18.3334 14.8103 17.271 13.5052 15.8334 13.1352M12.9167 3.27245C14.1383 3.76694 15 4.96458 15 6.36348C15 7.76239 14.1383 8.96003 12.9167 9.45452M14.1667 18.0302C14.1667 16.477 14.1667 15.7004 13.913 15.0879C13.5746 14.2711 12.9257 13.6222 12.109 13.2839C11.4964 13.0302 10.7198 13.0302 9.16669 13.0302H6.66669C5.11355 13.0302 4.33698 13.0302 3.72441 13.2839C2.90765 13.6222 2.25874 14.2711 1.92042 15.0879C1.66669 15.7004 1.66669 16.477 1.66669 18.0302M11.25 6.36348C11.25 8.20443 9.75764 9.69682 7.91669 9.69682C6.07574 9.69682 4.58335 8.20443 4.58335 6.36348C4.58335 4.52254 6.07574 3.03015 7.91669 3.03015C9.75764 3.03015 11.25 4.52254 11.25 6.36348Z"
                                    stroke="#4F4F4F"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Applicants
                        </p>
                        <span className="text-xl text-[#3D3D3D] leading-[1.5]">
                            400
                        </span>
                    </div>
                    <hr className="my-4 h-[1px] bg-[#E7E7E7]" />
                    <div className="flex items-center justify-between">
                        <p className="flex items-center text-[#4F4F4F] p-[0.625rem] gap-[0.625rem]">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 13.4468H6.25002C5.08705 13.4468 4.50557 13.4468 4.0324 13.5904C2.96707 13.9135 2.13339 14.7472 1.81022 15.8125C1.66669 16.2857 1.66669 16.8672 1.66669 18.0302M13.3334 15.5302L15 17.1968L18.3334 13.8635M12.0834 6.78015C12.0834 8.85122 10.4044 10.5302 8.33335 10.5302C6.26229 10.5302 4.58335 8.85122 4.58335 6.78015C4.58335 4.70908 6.26229 3.03015 8.33335 3.03015C10.4044 3.03015 12.0834 4.70908 12.0834 6.78015Z"
                                    stroke="#4F4F4F"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Matches
                        </p>
                        <span className="text-xl text-[#3D3D3D] leading-[1.5]">
                            100
                        </span>
                    </div>
                    <hr className="my-4 h-[1px] bg-[#E7E7E7]" />
                    <div className="flex items-center justify-between">
                        <p className="flex items-center text-[#4F4F4F] p-[0.625rem] gap-[0.625rem]">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.5 7.03015C2.5 5.63002 2.5 4.92995 2.77248 4.39518C3.01217 3.92477 3.39462 3.54232 3.86502 3.30264C4.3998 3.03015 5.09987 3.03015 6.5 3.03015H13.5C14.9001 3.03015 15.6002 3.03015 16.135 3.30264C16.6054 3.54232 16.9878 3.92477 17.2275 4.39518C17.5 4.92995 17.5 5.63002 17.5 7.03015V11.5302C17.5 12.9303 17.5 13.6303 17.2275 14.1651C16.9878 14.6355 16.6054 15.018 16.135 15.2577C15.6002 15.5302 14.9001 15.5302 13.5 15.5302H8.06979C7.54975 15.5302 7.28972 15.5302 7.04101 15.5812C6.82036 15.6265 6.60683 15.7014 6.40624 15.8039C6.18014 15.9194 5.9771 16.0818 5.57101 16.4067L3.58313 17.997C3.23639 18.2744 3.06302 18.4131 2.91712 18.4132C2.79022 18.4134 2.67019 18.3557 2.59102 18.2565C2.5 18.1425 2.5 17.9204 2.5 17.4764V7.03015Z"
                                    stroke="#4F4F4F"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Messages
                        </p>
                        <span className="text-xl text-[#3D3D3D] leading-[1.5]">
                            147
                        </span>
                    </div>
                    <hr className="my-4 h-[1px] bg-[#E7E7E7]" />
                    <div className="flex items-center justify-between">
                        <p className="flex items-center text-[#4F4F4F] p-[0.625rem] gap-[0.625rem]">
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.01677 11.1245C1.90328 10.9448 1.84654 10.8549 1.81477 10.7163C1.79091 10.6122 1.79091 10.4481 1.81477 10.344C1.84654 10.2054 1.90328 10.1155 2.01677 9.93584C2.95461 8.45086 5.74617 4.69682 10.0003 4.69682C14.2545 4.69682 17.0461 8.45086 17.9839 9.93584C18.0974 10.1155 18.1541 10.2054 18.1859 10.344C18.2098 10.4481 18.2098 10.6122 18.1859 10.7163C18.1541 10.8549 18.0974 10.9448 17.9839 11.1245C17.0461 12.6095 14.2545 16.3635 10.0003 16.3635C5.74617 16.3635 2.95461 12.6095 2.01677 11.1245Z"
                                    stroke="#4F4F4F"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10.0003 13.0302C11.381 13.0302 12.5003 11.9109 12.5003 10.5302C12.5003 9.14944 11.381 8.03016 10.0003 8.03016C8.61962 8.03016 7.50034 9.14944 7.50034 10.5302C7.50034 11.9109 8.61962 13.0302 10.0003 13.0302Z"
                                    stroke="#4F4F4F"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Views
                        </p>
                        <span className="text-xl text-[#3D3D3D] leading-[1.5]">
                            800
                        </span>
                    </div>
                </div>
                <div className="p-8 shadow-[-4px_8px_20px_0px_#0000001A] rounded-xl mt-[2.404rem] bg-white">
                    <p className="text-[#000] text-xl leading-[1.5]">
                        “A quote from a Atlassian.”
                    </p>
                    <figure className="flex items-center gap-4 mt-12">
                        <img
                            width={45}
                            height={45}
                            className="aspect-square rounded-full"
                            src="/author.jpg"
                            alt="Author"
                        />
                        <div className="flex flex-col gap-[2px] leading-[1.5]">
                            <p className="text-[#000]">Name</p>
                            <p className="text-[#6E6D6D]">Description</p>
                        </div>
                    </figure>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
