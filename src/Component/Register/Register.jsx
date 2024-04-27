import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="lg:w-[500px] lg:h-[630px] sm:w-[400px] sm:h-[550px] bg-slate-400 lg:ml-[500px] sm:ml-0 mt-10 mb-10 rounded-xl">
            {/* <Helmet>
                <title>Dream Resorts//Register</title>
            </Helmet> */}
            <div className=" pt-10">
                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900" className="text-center text-2xl font-bold text-white mb-2">WELCOME TO DREAM RESORTS</h2>
                <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="text-center text-xl font-semibold text-black">Register to your account </p>
            </div>
            <form  className="pt-8 lg:pl-12 sm:pl-0">
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100" className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="name" placeholder="Your Name" required name="name" />
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" className=" lg:w-[400px] sm:w-[250px] h-[50px]">
                    <input className="w-full h-full rounded-lg text-center" type="email" placeholder="Your Email" required name="email" />
                </div>
                <br />
                <div className="flex ">
                    <div className="w-[400px] " data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1300">
                        <input className="text-black rounded-lg text-center w-full     h-[50px]" placeholder="password" required
                           /* type={showPassword ? "text" : "password"}*/ name="password" />
                    </div>
                    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400" className="mt-3  ">
                        {/* <span className="" onClick={() => { setShowPassword(!showPassword) }}>
                            {
                                showPassword ? <FaEyeSlash className="w-10 h-5"></FaEyeSlash> : <FaEye className="w-10 h-5"></FaEye>
                            }
                        </span> */}
                    </div>
                </div>


                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1400" className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
                    <input className="w-full h-full text-center rounded-lg" type="text" placeholder="Enter Your Photo URL" required name="PhotoURL" />
                </div>
                <br />
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className=" lg:w-[400px] sm:w-[250px]]  h-[50px] bg-lime-400 rounded-2xl">
                    <button className="w-full h-full text-white"> Register</button>
                </div>
            </form>
            {/* {
                registerError && <p className="text-red-700 text-center text-xl font-semibold mt-5">{registerError}</p>
            }
            {
                success && <p className="text-green-500 text-center text-xl font-semibold mt-5">{success}</p>
            } */}
            <br />
            <div>
                <h3 className="text-center text-xl font-medium text-amber-600">Already Have An Account? <Link to={"/login"}><span className="text-lime-300" >LOGIN</span></Link></h3>
            </div>
        </div>
    );
};

export default Register;