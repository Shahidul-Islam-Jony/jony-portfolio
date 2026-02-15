import Footer from "@/components/Footer/Footer";
import ParticleJs from "@/components/Home/ParticleJs/ParticleJs";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Jony from "@/components/Jony/Jony";

export const metadata = {
  title:
    "Shahidul Islam Jony – Owner of Sijma BD | Web Developer & Digital Marketer",
  description:
    "Shahidul Islam Jony is the owner and creator of Sijma BD, a modern Bangladeshi e-commerce platform. He holds a BSc degree in Physics. Shahidul Islam is also a Web Developer and Digital Marketer.",
  keywords: [
    "Shahidul Islam Jony",
    "Shahidul Islam",
    "Shohidul Islam",
    "Shohidul Islam Jony",
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
      name: "Shahidul Islam | Shahidul Islam Jony | SIJMA BD | sijmabd | Shohidul Islam | Shohidul Islam Jony | জনি । শহিদুল ইসলাম । শহিদুল ইসলাম জনি ",
    },
  ],
};

const shahidulIslamJony = () => {
  return (
    <div>
      <ParticleJs />
      <Navbar />
      <Jony />
      <Footer />
    </div>
  );
};

export default shahidulIslamJony;
