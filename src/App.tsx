import Header from "./components/ui/Header/Header";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import SkillTag from "./components/ui/SkillTag";

function App() {
    return (
        <>
            <Header />
            <nav className="border border-[#e7e7e7] flex gap-[4.5rem] pl-[6.25rem] py-5 text-xl leading-[1.5] xl:pl-[1.5rem] lg:gap-4 lg:text-base lg:overflow-x-auto">
                <a
                    className=" text-orange relative after:absolute after:w-[4.0625rem] after:h-[2.13px] after:bg-orange after:left-1/2 after:-bottom-5  after:-translate-x-1/2"
                    href="#"
                >
                    Job preview
                </a>
                <a className="text-[#888888] " href="#">
                    Preview
                </a>
                <a className="text-[#888888] " href="#">
                    Match
                </a>
                <a className="text-[#888888] " href="#">
                    Messages
                </a>
            </nav>
            <main className="grid grid-cols-[1fr_minmax(0,_421px)] lg:grid-cols-1">
                <section className="border-r border-[#e7e7e7]">
                    <div className="preview-section pt-9 pb-[1.4375rem]">
                        <div className="flex items-center gap-3 lg:flex-wrap">
                            <h2 className="text-[2.1875rem] font-bold leading-[1.5]">
                                Senior Product Designer
                            </h2>
                            <i className="w-1 aspect-square bg-[#D1D1D1] rounded-full"></i>
                            <p className="text-[#888888] text-sm">
                                posted 2 days ago
                            </p>
                            <span className="text-xs leading-[1.5] flex items-center border border-[#ABEFC6] text-[#067647] p-[2px_8px_2px_6px] bg-[#ECFDF3] rounded-full before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#17B26A] gap-1">
                                Open
                            </span>
                        </div>
                        <div className="flex gap-4 items-center text-xl leading-[1.5] text-[#5D5D5D] mt-6">
                            <p className="flex items-center gap-2">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 13.5302C13.6569 13.5302 15 12.187 15 10.5302C15 8.8733 13.6569 7.53015 12 7.53015C10.3431 7.53015 9 8.8733 9 10.5302C9 12.187 10.3431 13.5302 12 13.5302Z"
                                        stroke="#5D5D5D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 22.5302C16 18.5302 20 14.9484 20 10.5302C20 6.11187 16.4183 2.53015 12 2.53015C7.58172 2.53015 4 6.11187 4 10.5302C4 14.9484 8 18.5302 12 22.5302Z"
                                        stroke="#5D5D5D"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Delaware, USA
                            </p>
                            <i className="w-1 aspect-square bg-[#D1D1D1] rounded-full"></i>
                            <p className="flex items-center gap-2">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13 5.53015C13 6.63472 10.5376 7.53015 7.5 7.53015C4.46243 7.53015 2 6.63472 2 5.53015M13 5.53015C13 4.42558 10.5376 3.53015 7.5 3.53015C4.46243 3.53015 2 4.42558 2 5.53015M13 5.53015V7.03015M2 5.53015V17.5302C2 18.6347 4.46243 19.5302 7.5 19.5302M7.5 11.5302C7.33145 11.5302 7.16468 11.5274 7 11.522C4.19675 11.4301 2 10.5734 2 9.53015M7.5 15.5302C4.46243 15.5302 2 14.6347 2 13.5302M22 12.0302C22 13.1347 19.5376 14.0302 16.5 14.0302C13.4624 14.0302 11 13.1347 11 12.0302M22 12.0302C22 10.9256 19.5376 10.0302 16.5 10.0302C13.4624 10.0302 11 10.9256 11 12.0302M22 12.0302V19.5302C22 20.6347 19.5376 21.5302 16.5 21.5302C13.4624 21.5302 11 20.6347 11 19.5302V12.0302M22 15.7802C22 16.8847 19.5376 17.7802 16.5 17.7802C13.4624 17.7802 11 16.8847 11 15.7802"
                                        stroke="#5D5D5D"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                $300K-$400K
                            </p>
                        </div>
                    </div>
                    <div className="preview-section pt-8 pb-6">
                        <div className="flex items-start gap-x-16 gap-y-4 flex-wrap">
                            <div className="basis-[170px]">
                                <h6>Skills Required</h6>
                                <div className="flex items-start gap-2 flex-col mt-2">
                                    <SkillTag
                                        skillName="Figma"
                                        logo="figma.png"
                                    />
                                    <SkillTag
                                        skillName="Adobe Illustrator"
                                        logo="illustrator.png"
                                    />
                                    <SkillTag
                                        skillName="Adobe XD"
                                        logo="xd.png"
                                    />
                                </div>
                            </div>
                            <div className="basis-[170px]">
                                <h6>Preferred Language</h6>
                                <div className="mt-2">
                                    <p className="text-[#3D3D3D]">English</p>
                                </div>
                            </div>
                            <div className="basis-[170px]">
                                <h6>Type</h6>
                                <div className="mt-2">
                                    <p className="text-[#3D3D3D]">Full time</p>
                                </div>
                            </div>
                            <div className="basis-[180px]">
                                <h6>Years of Experience</h6>
                                <div className="mt-2">
                                    <p className="text-[#3D3D3D]">
                                        3+ Years of Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="preview-section pt-8 pb-[1.875rem]">
                        <div>
                            <h6>About the job</h6>
                            <div className="mt-2">
                                <div className="text-[#3D3D3D] leading-[1.75]">
                                    <ol className="list-decimal pl-4">
                                        <li>
                                            Handle the UI/UX research design
                                        </li>
                                        <li>
                                            Work on researching on latest web
                                            applications designs & trends
                                        </li>
                                        <li>
                                            Work on conceptualizing and
                                            visualizing
                                        </li>
                                        <li>
                                            Work on creating graphics content
                                            and other graphic related works
                                        </li>
                                    </ol>
                                    Benefits:
                                    <ul className="list-disc pl-5">
                                        <li>Health insurance</li>
                                        <li>Provident Fund</li>
                                    </ul>
                                    Schedule:
                                    <ul className="list-disc pl-5">
                                        <li>Day shift</li>
                                    </ul>
                                    Supplemental pay types:
                                    <ul className="list-disc pl-5">
                                        <li>Performance bonus</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="preview-section pt-[2.375rem] pb-6">
                        <div>
                            <div>
                                <figure className="flex items-center gap-3">
                                    <img
                                        width={40}
                                        height={40}
                                        src="/profile.png"
                                        alt="Logo"
                                        className="rounded-[0.25rem]"
                                    />
                                    <figcaption>Atlassian</figcaption>
                                    <button className="p-[0.28125rem_0.9375rem] bg-[#E0EBF9] text-[#003788] font-bold text-[0.6875rem] rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                                        Follow
                                    </button>
                                </figure>
                            </div>
                            <div className="mt-[1.625rem] grid grid-flow-row grid-cols-2 gap-x-12 gap-y-6 max-w-[46rem]">
                                <article>
                                    <h6>Company Size</h6>
                                    <p className="mt-2">1k - 2k Employees</p>
                                </article>
                                <article>
                                    <h6>Type</h6>
                                    <p className="mt-2">Private</p>
                                </article>
                                <article>
                                    <h6>Sector</h6>
                                    <p className="mt-2">
                                        Information Technology, Infrastructure
                                    </p>
                                </article>
                                <article>
                                    <h6>Funding</h6>
                                    <p className="mt-2">Bootstrapped</p>
                                </article>
                                <article>
                                    <h6>Founded In</h6>
                                    <p className="mt-2">2019</p>
                                </article>
                                <article>
                                    <h6>Founded By</h6>
                                    <p className="mt-2">
                                        Scott Farquhar, Mike Cannon-Brookes
                                    </p>
                                </article>
                            </div>
                            <div className="mt-[1.4375rem]">
                                <a
                                    href="#"
                                    className="underline text-[#B0B0B0] text-xs"
                                >
                                    Report this listing
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Sidebar />
            </main>
        </>
    );
}

export default App;
