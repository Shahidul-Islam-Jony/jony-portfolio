import Image from "next/image";
import React from "react";
import shahidul from '../../assets/images/Shahidul-Islam-Jony.png'

const Jony = () => {
  return (
    <div className="relative">
      <div className="min-h-screen z-50 flex flex-col md:flex-row justify-evenly items-center">
        <div>
          <Image
            className="z-50 p-2 rounded-2xl"
            src={shahidul}
            width={500}
            height={500}
            alt="shahidul islam jony"
          />
        </div>
        <div className="w-full p-2 md:w-1/2">
          <p className="text-lg text-white">
            <span className="text-5xl font-bold">Hi,</span> I’m{" "}
            <span className="font-bold text-xl">Shahidul Islam Jony</span>, the
            owner and creator of{" "}
            <span className="font-bold text-xl">Sijma BD.</span> I’m a
            passionate web developer who loves building useful, modern, and
            user-friendly digital products. Sijma BD is my own e-commerce
            project, where I am working to bring all kinds of village products,
            daily essentials, and modern items together on one trusted platform.{" "}
            <br />
            <br /> I handle everything from development to design — building
            Sijma with technologies like Next.js, Tailwind CSS, MongoDB, and
            more. I’m continuously improving the platform to make sure customers
            get a smooth shopping experience and sellers get a reliable place to
            grow. <br />
            <br /> I enjoy learning new technologies step by step, improving my
            skills every day, and turning ideas into real projects. Sijma BD is
            one of my biggest dreams, and I’m working hard to make it a
            successful and reliable brand in Bangladesh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jony;
