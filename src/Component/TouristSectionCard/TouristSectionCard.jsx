import { Link } from "react-router-dom";

const TouristSectionCard = ({sport}) => {
    const {_id,image,sport_name,description,cost,location,active_status,travel_time,total_visitors_per_year} = sport;
    return (
        <div>
           <div  className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">
            
            <figure><img data-aos="fade-down-right" data-aos-duration="1000"  src={image} /></figure>
            <div className="card-body">
                
                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" className="text-center text-2xl font-bold text-amber-500">{sport_name}</h2>
                <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" className="text-xl font-medium text-center text-lime-700">{description}</p>
                <div className="divider"></div>
                <div className="flex text-xl font-bold text-center text-black">
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300" className="lg:mr-[250px] sm:mr-2 ">
                        <h2>{cost}</h2>
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400" className="text-amber-500">
                        <h2>{active_status}</h2>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="text-xl font-bold  text-black">
                    <h3>{location}</h3>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1600" className="card-actions justify-center">
                    <Link to={`/resorts/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TouristSectionCard;