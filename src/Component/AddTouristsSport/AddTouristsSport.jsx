

const AddTouristsSport = () => {
    return (
        <div className="mt-10 mb-10 ml-[190px]">
            <form /* onSubmit={handleRegister} */ className="pt-8 lg:pl-12 sm:pl-0">
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Image URL" required name="ImageURL" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Tourists Sport Name" required name="TouristsSportName" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Country Name" required name="CountryName" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Location" required name="Location" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Short Description" required name="ShortDescription" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Average Cost" required name="AverageCost" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Seasonality - summer/winter" required name="Seasonality" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Travel Time" required name="TravelTime" />
                    </div>
                </div>
                <br />
                <div className="flex">
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px] mr-8">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="User Email" required name="UserEmail" />
                    </div>
                    <div className=" lg:w-[500px] sm:w-[250px] h-[50px]">
                        <input className="w-full h-full rounded-lg text-center" type="text" placeholder="User Name" required name="UserName" />
                    </div>
                </div>
                <br />
                <div className=" lg:w-[600px] sm:w-[250px] h-[50px] ml-[200px]">
                    <input className="w-full h-full rounded-lg text-center" type="text" placeholder="Total Visitors Per Year" required name="TotalVisitors" />
                </div>
                <br />
                <div className=" lg:w-[1040px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> Add</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddTouristsSport;