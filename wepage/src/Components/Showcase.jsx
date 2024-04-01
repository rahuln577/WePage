export default function Showcase() {
    return <div>
        <div className="lg:block hidden">
            <div className="w-[93%] h-[40rem] flex flex-row  mx-[6.8%] my-[2%] ">
                <div className="lg:flex flex-row w-[100%] h-[39rem] overflow-hidden hidden">

                    <div className="w-[32%] h-[40rem] m-[1%]">
                    <img src={require("./../assets/model1.jpg")} className=" w-[100%] h-[40rem]">
                    </img>
                    <div className="relative top-[-22%] left-[6%] z-[99] flex flex-col">
                        <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Casual Shirts</h1>
                        <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                    </div>
                    </div>
                    <div className="w-[32%] m-[1%]">
                    <img src={require("./../assets/model2.jpg")} className=" w-[100%] h-[40rem]"></img>
                    <div className="relative bottom-[23%] left-[5%]">
                        <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Suits</h1>
                        <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                    </div>
                    </div>

                    <div className="flex flex-col w-[24rem] h-[95.4%] mt-[0.4%] ">
                        <div className=" m-[2%] w-[100%] h-[14.3rem]">
                            <img src={require("./../assets/model3.jpg")} className="w-[85%]  h-[19rem]"></img>
                        </div>
                        <div className="relative top-[-8%] left-[7%]">
                            <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Formals</h1>
                            <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>

                        </div>

                        <div className="relative m-[2%] w-[100%] h-[44.8rem] top-[-2%]">
                            <img src={require("./../assets/model4.jpg")} className="w-[86%] h-[19rem]"></img>
                            <div className="absolute bottom-[11%] right-[57%]">
                            <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Shirts</h1>
                            <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>

                        </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>


        <div className="no-scrollbar overflow-x-scroll flex flex-row w-[93%] m-[2%] mx-[3%] lg:hidden">
            <div className=" min-w-[16.7rem]  m-[0.8rem] relative">
                <img src={require("./../assets/model1.jpg")} ></img>
                <div className="absolute bottom-[5%] left-[6%] z-[1] flex flex-col">
                    <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Casual Shirts</h1>
                    <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                </div>
            </div>

            <div className=" min-w-[16.7rem]  m-[0.8rem] relative">
                <img src={require("./../assets/model2.jpg")} ></img>
                <div className="absolute bottom-[5%] left-[6%] z-[1] flex flex-col">
                    <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Suits</h1>
                    <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                </div>
            </div>

            <div className=" min-w-[16.7rem]  m-[0.8rem] relative">
                <img src={require("./../assets/model3.jpg")} ></img>
                <div className="absolute bottom-[5%] left-[6%] z-[1] flex flex-col">
                    <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Formals</h1>
                    <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                </div>
            </div>

            <div className=" min-w-[16.7rem]  m-[0.8rem] relative">
                <img src={require("./../assets/model4.jpg")} ></img>
                <div className="absolute bottom-[5%] left-[6%] z-[1] flex flex-col">
                    <h1 className="text-white text-[2rem] font-bold mb-[0.5rem]">Shirts</h1>
                    <a href="#" className="text-[1rem]"><div className="bg-white w-[9rem] h-[2.5rem] rounded-[0.2rem] flex flex-row justify-center items-center"><p className="text-[0.9rem]">KNOW MORE</p></div></a>
                </div>
            </div>

        </div>
    </div>
}