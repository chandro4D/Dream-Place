import { useLoaderData } from "react-router-dom";
import TouristSectionCard from "../TouristSectionCard/TouristSectionCard";


const TouristSection = () => {

    const sports = useLoaderData()
    return (
        <div className="mt-10 mb-10 lg:grid lg:grid-cols-2 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px]">
            {
                sports.map(sport => <TouristSectionCard
                key={sport._id} sport={sport}
                ></TouristSectionCard>)
            }
        </div>
    );
};

export default TouristSection;