import Link from "next/link";


const Footer = () => {
    return (
        <div className="bg-black relative flex flex-col md:flex-row justify-between items-center gap-4 text-white py-10">
            <div className="flex gap-6 ml-7">
                <Link href='/'>Home</Link>
                <Link href='#skills'>Skills</Link>
                <Link href='#aboutMe'>About Me</Link>
                <Link href='#contactMe'>Contact Me</Link>
                <Link href='https://www.sijmabd.com'>Sijma BD</Link>
            </div>
            <div>
                <p className="md:mr-4">&copy;2023.Developed by <span className="text-lg text-red-600">&#9829;</span> Shahidul Islam Jony.</p>
            </div>
        </div>
    );
};

export default Footer;