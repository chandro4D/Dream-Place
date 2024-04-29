import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const Sport = useLoaderData()
    const { ImageURL, TouristsSportName, CountryName, Location, ShortDescription, AverageCost, Seasonality, TravelTime, UserEmail, UserName, TotalVisitors,_id } = Sport;


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;

        const ImageURL = form.ImageURL.value;
        const TouristsSportName = form.TouristsSportName.value;
        const CountryName = form.CountryName.value;
        const Location = form.Location.value;
        const ShortDescription = form.ShortDescription.value;
        const AverageCost = form.AverageCost.value;
        const Seasonality = form.Seasonality.value;
        const TravelTime = form.TravelTime.value;
        const UserEmail = form.UserEmail.value;
        const UserName = form.UserName.value;
        const TotalVisitors = form.TotalVisitors.value;

        const updateSport = { ImageURL, TouristsSportName, CountryName, Location, ShortDescription, AverageCost, Seasonality, TravelTime, UserEmail, UserName, TotalVisitors }
        console.log(updateSport);
        // send data to the server
        fetch(`http://localhost:7000/addTouristsSport/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: ' Tourists Sport Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }


    return (
        <div className="mt-10 mb-10 ml-[190px]">
            <form onSubmit={handleUpdate} className="pt-8 lg:pl-12 sm:pl-0">
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={ImageURL} placeholder="Image URL" required name="ImageURL" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={TouristsSportName} placeholder="Tourists Sport Name" required name="TouristsSportName" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={CountryName} placeholder="Country Name" required name="CountryName" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={Location} placeholder="Location" required name="Location" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={ShortDescription} placeholder="Short Description" required name="ShortDescription" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={AverageCost} placeholder="Average Cost" required name="AverageCost" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={Seasonality} placeholder="Seasonality - summer/winter" required name="Seasonality" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={TravelTime} placeholder="Travel Time" required name="TravelTime" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={UserEmail} placeholder="User Email" required name="UserEmail" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={UserName} placeholder="User Name" required name="UserName" />
                    </div>
                </div>
                <br />
                <div className=" lg:w-[600px] sm:w-[250px] h-[50px] ml-[200px]">
                    <input className="w-full h-full rounded-lg text-center" type="text" defaultValue={TotalVisitors} placeholder="Total Visitors Per Year" required name="TotalVisitors" />
                </div>
                <br />
                <div className=" lg:w-[1040px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white">UPDATE</button>
                </div>

            </form>
        </div>
    );
};

export default Update;