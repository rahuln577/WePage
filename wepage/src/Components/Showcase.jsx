export default function Showcase(){
    return<div>
        <div className="lg:block hidden"> 
    <div className="w-[93%] h-[40rem] flex flex-row  mx-[6.8%] my-[2%] ">
        <div className="lg:flex flex-row w-[100%] overflow-hidden hidden">
            <img src={require("./../assets/model1.jpg")} className="max-w-[32%]  m-[1%]"></img>
            <img src={require("./../assets/model2.jpg")} className="max-w-[32%] m-[1%]"></img>
            <div className="flex flex-col w-[30%] h-[98.4%] mt-[0.4%] ">
                <div className="overflow-hidden m-[2%] w-[170%] h-[27.8rem]">
                <img src={require("./../assets/model3.jpg")} className="max-w-[50%] "></img>
                </div>
                <div className="overflow-hidden m-[2%] w-[136%] h-[27.8rem]">
                <img src={require("./../assets/model4.jpg")} className="max-w-[62.5%]"></img>
                </div>
            </div>
        </div>
    </div>
    </div>


<div className="w-[93%] h-[30rem] lg:h-[40rem] flex flex-row  lg:mx-[6.8%] my-[2%] mx-[4.5%]">
<div className="flex flex-row w-[100%] lg:overflow-hidden overflow-x-auto  overflow-y-hidden">
    <img src={require("./../assets/model1.jpg")} className="min-w-[20rem] lg:max-w-[32%]  m-[1%]"></img>
    <img src={require("./../assets/model2.jpg")} className="min-w-[20rem] lg:max-w-[32%] m-[1%]"></img>
    <div className="flex flex-row lg:flex-col lg:w-[30%] lg:h-[98.4%] lg:mt-[0.4%]  min-w-[40rem] h-[29.3rem]">
        <div className="overflow-hidden lg:m-[2%] m-[1%] lg:w-[170%] w-[20rem] h-[27.8rem]">
        <img src={require("./../assets/model3.jpg")} className="lg:max-w-[50%] w-full "></img>
        </div>
        <div className="overflow-hidden lg:m-[2%] lg:w-[136%] w-[20rem] h-[27.8rem] m-[1%]">
        <img src={require("./../assets/model4.jpg")} className="w-full lg:max-w-[62.5%]"></img>
        </div>
    </div>
</div>
</div>
</div>
}