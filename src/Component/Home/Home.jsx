

import Extra from "../Extra/Extra";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import TouristSection from "../TouristSection/TouristSection";

const Home = () => {
    return (
        <div className="mt-10">
            <div data-aos="zoom-in" className="animate__animated  animate__delay-4s animate__swing mt-3 mb-12">
                <h2 className="text-5xl font-extrabold text-yellow-500 text-center">BEST CHOICE FOR FAMILY</h2>
                <br />
                <h2 className="text-5xl font-extrabold text-black text-center">COME AS A GUEST,LEAVE AS A FRIEND</h2>
            </div>
            <SwiperSlider></SwiperSlider>
            <div data-aos="zoom-in" className="animate__animated  animate__delay-4s animate__swing mt-3 mb-12">
                <h2 className="text-5xl font-extrabold text-yellow-500 text-center">You Can Choose</h2>
                <br />
                <h2 className="text-5xl font-extrabold text-black text-center">This Natural Places</h2>
            </div>
            <TouristSection></TouristSection>
            <Extra></Extra>
            

        </div>
    );
};

export default Home;