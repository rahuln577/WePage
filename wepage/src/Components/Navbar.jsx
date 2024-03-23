import logo from "./../assets/logo.jpg"
export default function Navbar() {
    return <nav className="bg-gray-100 w-[96%]  h-[4.5rem] flex-row flex fixed top-[2rem] mx-[2%]">
        <div className=" ml-[1rem] flex-row hidden lg:flex h-[100%] w-[24rem] justify-between items-center">
        <a href="#" className="text-[1rem] font-semibold ">Home</a>
        <a href="#" className="text-[1rem] font-semibold">About Us</a>
        <a href="#" className="text-[1rem] font-semibold">Best Sellers</a>
        <a href="#" className="text-[1rem] font-semibold">Location</a>

    </div>
    <div className="block lg:hidden my-[1rem] ml-[1rem]">
        <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
        <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
        <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
    </div>
    <img src={logo} className="w-[10rem] right-[32%] absolute top-[1rem] md:right-[43%] ss:right-[37%]"></img>
    </nav>
}