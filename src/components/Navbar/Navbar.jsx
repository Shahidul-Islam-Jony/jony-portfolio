"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/jony.png"
import { useState } from "react";


const Navbar = () => {
    const [isActive, setisActive] = useState(false);
    const [isActiveMyProject, setActiveMyProject] = useState(false);

    const links = <div className="flex flex-col lg:flex-row gap-7 text-white text-lg">
        <Link href='/' onClick={() => setActiveMyProject(false)}>Home</Link>
        {
            isActiveMyProject ? '' :
                <div className="flex flex-col lg:flex-row gap-7">
                    <Link href='#skills'>Skills</Link>
                    <a href="https://drive.google.com/file/d/1e1kVYu5B926zSdngXC5xOLbZQokFCLuE/view" target="blank" download="Shahidul Islam Resume.pdf">Resume</a>
                    <Link href='#aboutMe'>About Me</Link>
                    <Link href='#contactMe'>Contact Me</Link>
                </div>
        }
        <Link href='/myprojects' onClick={() => setActiveMyProject(true)}>My Projects</Link>
    </div>
    return (
        <div className="w-[90%] mx-auto py-4">
            <div className="flex justify-center items-center relative shadow-md rounded-b-lg z-50">
                <div className="absolute left-0 top-5">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={() => setisActive(!isActive)} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} onClick={() => setisActive(!isActive)} className={`${isActive ? ' menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0C6168] rounded-box w-52 rounded-xl' : 'hidden'}`}>
                            {/* small devices */}
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="flex ml-8 md:ml-12 items-center w-full">
                        <Image src={logo} width={70} height={70} alt="logo"  className="w-14 h-14 border-4 border-white md:w-20 md:h-20 rounded-full" />
                        <p className=" text-2xl md:text-4xl satisfyFont font-bold ml-4 bg-gradient-to-r from-orange-600 to-pink-500 text-transparent bg-clip-text"><a href="shahidul-islam-jony">Shahidul Islam</a></p>
                    </div>
                <div className="w-full hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* large devices links */}
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;