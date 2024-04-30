import { useLoaderData } from "react-router-dom";
import MyTable from "../MyTable/MyTable";


const MyList = () => {
    const Sports = useLoaderData()
    return (
        <div className=" lg:grid lg:grid-cols-2 lg:mr-[80px] lg:ml-[140px] sm:grid-cols-1 sm:ml-[60px] sm:mr-[80px] mt-10 mb-10">
            {
                Sports.map(Sport => <MyTable
                    key={Sport._id}
                    Sport={Sport}
                ></MyTable>)
            }
            
        </div>
    );
};

export default MyList;