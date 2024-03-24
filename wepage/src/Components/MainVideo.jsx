//import video from "./../assets/Main.mp4"
export default function MainVideo() {
    return <div>
        <div className=" w-[100%]  h-screen overflow-hidden bg">
            <video muted="true" src={require("./../assets/Main.mp4")} type="video/mp4" autoplay="true" className=" relative z-[-99] object-fill min-h-screen " loop="true"></video>
            <div className="flex flex-row justify-around absolute top-[55%] w-[100%] ">
            <div className="flex flex-col">
                <h1 className="text-yellow-400 leading-[90%] font-extrabold text-[4rem]  lg:text-[5rem]">GET TAILORED.<br/>GET YOUR FIT.</h1>
                <div className="absolute bottom-[-3rem] lg:bottom-[-4rem]">
                    <p className="text-yellow-200 text-[1.1rem] md:text-[1.2rem]">Visit us to get all your tailoring needs fulfilled with atmost precision.</p>
                </div>
            </div>
            </div>

        </div>

    </div>

}