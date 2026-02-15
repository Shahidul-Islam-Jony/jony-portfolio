import Image from "next/image";
import reactLogo from "../../../assets/react.svg";
import "./app.css";

const Banner = () => {
  return (
    <div className="relative text-white">
      <div className="flex justify-end p-4">
        <a></a>
        <a
          href="https://react.dev"
          target="_blank"
          className=""
          rel="noreferrer"
        >
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <span className="satisfyFont text-center text-7xl space-y-7">
          <p className="font-semibold">I am a MERN Stack</p>
          <p className="font-semibold">Web developer</p>
        </span>
        <span>
          <p className="text-center mt-12 text-xl fira">
            Hi, My name is Shahidul Islam Jony.The owner and creator of{" "}
            <a href="https://www.sijmabd.com">Sijma BD</a>.<br />
            I am a MERN stack web developer. I want to design user attractive &
            beautiful website.
            <br /> Weclome to my portfolio page that I have designed to show my
            skills and expertise.
          </p>
        </span>
      </div>
      <div className="flex justify-start p-4">
        <a></a>
        <a
          href="https://react.dev"
          target="_blank"
          className=""
          rel="noreferrer"
        >
          <Image src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
