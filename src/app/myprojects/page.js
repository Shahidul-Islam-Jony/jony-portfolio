import ParticleJs from '@/components/Home/ParticleJs/ParticleJs';
import Banner from '@/components/MyProjects/Banner/Banner';
import Projects from '@/components/MyProjects/Projects/Projects';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export const metadata = {
  title:
    "Shahidul Islam Jony – Owner of Sijma BD | Web Developer & Digital Marketer",
  description:
    "Shahidul Islam Jony is the owner and creator of Sijma BD, a modern Bangladeshi e-commerce platform. He holds a BSc degree in Physics. Shahidul Islam is also a Web Developer and Digital Marketer.",
  keywords: [
    "Shahidul Islam Jony",
    "Shahidul Islam",
    "শহিদুল ইসলাম জনি",
    "জনি",
    "শহিদুল ইসলাম",
    "Jony",
    "JON",
    "Jon the Don",
    "si Jony",
    "si jony",
    "SI Jony",
    "JONY",
    "SHAHIDUL",
    "SHAHIDUL ISLAM JONY",
    "Sijma BD owner",
    "Sijma BD founder",
    "Owner of Sijma BD",
    "SIJMA",
    "Owner of Sijma",
    "SIJMA BD",
    "Web developer Bangladesh",
    "Next.js developer BD",
    "E-commerce developer Bangladesh",
    "Full-stack developer BD",
    "Sijma e-commerce website",
    "Bangladesh online super shop",
    "Village products e-commerce BD",
    "Programmer BD",
  ],
  authors: [
    {
      name: "Shahidul Islam | Shahidul Islam Jony | SIJMA BD | sijmabd",
    },
  ],
};

const myProjects = () => {
    return (
        <div className='mx-auto'>
            <ParticleJs/>
            <Navbar/>
            <Banner/>
            <Projects/>
        </div>
    );
};

export default myProjects;