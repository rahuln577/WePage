//import video from "./../assets/Main.mp4"
export default function MainVideo()
{
    return<div>
            <div className=" w-[100%]  h-screen overflow-hidden">
        <video muted="true" src={require("./../assets/Main.mp4")} type="video/mp4" autoplay="true"  className=" relative z-[-99] object-fill min-h-screen " loop="true"></video>
        <div className="flex flex-col absolute z-[99] top-[55%] sm:left-[26%] ss:left-[15%] ">
            <h1 className="text-white font-extrabold text-[2.4rem] vs:text-[3rem] us:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">GET TAILORED.</h1>
            <h1 className="absolute bottom-[-4rem]  vs:text-[3rem] us:bottom-[-4.5rem] text-white font-extrabold text-[2.4rem] us:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">GET YOUR FIT.</h1>
            <div className="absolute bottom-[-8rem] lg:bottom-[-6rem]">
            <p className="text-white text-[1.1rem] md:text-[1.2rem]">Visit us to get all your tailoring needs fulfilled with atmost precision.</p>
            </div>
        </div>
        
        </div>

        </div> 

}