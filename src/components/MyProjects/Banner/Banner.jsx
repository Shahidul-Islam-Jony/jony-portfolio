'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider from '../../../assets/slider/slider.png'
import slider2 from '../../../assets/slider/slider2.png'
import slider6 from '../../../assets/slider/slider6.png'
import slider4 from '../../../assets/slider/slider4.png'
import slider1 from '../../../assets/slider/slider1.png'
import slider7 from '../../../assets/slider/slider7.png'
import slider8 from '../../../assets/slider/slider8.png'
import slider3 from '../../../assets/slider/slider3.png'
import slider5 from '../../../assets/slider/slider5.png'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative">
            <Carousel autoPlay interval={3000} infiniteLoop>
                <div>
                    <Image width={800} height={800} alt="s1" src={slider1} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s2" src={slider2} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s3" src={slider3} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s4" src={slider4} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s5" src={slider5} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s6" src={slider6} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s7" src={slider} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s8" src={slider7} />
                </div>
                <div>
                    <Image width={800} height={800} alt="s9" src={slider8} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;