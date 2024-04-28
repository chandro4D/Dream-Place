import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyTable = ({ Sport }) => {
    const { ImageURL, TouristsSportName, AverageCost, Seasonality, TravelTime, TotalVisitors, _id } = Sport;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:7000/addTouristsSport/${_id}`,{
                    mathod: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });

    }
    return (
        <div className="card  bg-base-100 shadow-xl mb-14 lg:mr-[40px]  sm:mr-[0px]">

            <figure><img data-aos="fade-down-right" data-aos-duration="1000" src={Sport.ImageURL} /></figure>
            <div className="card-body">

                <h2 className="text-center text-2xl font-bold text-amber-500">{Sport.TouristsSportName}</h2>
                <div className="flex">
                    <div className="mr-32">
                        <h2 className="text-center text-2xl font-medium text-black">Travel Time : {Sport.TravelTime} Days</h2>
                    </div>
                    <div>
                        <p className="text-2xl font-medium text-center text-lime-700"> Season:{Sport.Seasonality}</p>
                    </div>
                </div>


                <div className="divider"></div>
                <div className="flex text-xl font-bold text-center text-black mb-5">
                    <div className="lg:mr-[40px] sm:mr-2 ">
                        <h2>Average Cost:{Sport.AverageCost} BDT</h2>
                    </div>
                    <div className="text-amber-500">
                        <h2> Visitors Per Year:{Sport.TotalVisitors}</h2>
                    </div>
                </div>



                <div className="card-actions justify-center flex">
                    <div className="mr-10">
                        <Link to={'/update'} ><button className="btn btn-primary">Update</button></Link>
                    </div>
                    <div>
                        <Link ><button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-primary">Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTable;