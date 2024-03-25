import logo from "./../assets/logo.jpg"
import { AiOutlineClose } from "react-icons/ai";
import { useRef } from "react"
import { MdArrowForwardIos } from "react-icons/md";

export default function Navbar() {
    let curpage = 0;
    let myref = useRef(null);
    let ham=useRef(null);
    let menu=false;
    /*window.addEventListener("scroll", () => {
        var st = window.scrollY;
        if (st > curpage) {
            myref.current.style.top = "0rem";
            curpage = st;
        }
        else if (st < curpage) {
            myref.current.style.top = "2rem";
            curpage = 0;
        }
    });*/
    function hammenu(){
        if(menu)
        {
            menu=false;
            ham.current.classList.remove("anim");
            ham.current.classList.add("reanim");
        }
        else{
            menu=true;
            ham.current.classList.remove("reanim");
            ham.current.classList.add("anim");
        }
    }
    return <nav className="bg-white shadow-lg w-[96%]  h-[4.5rem] flex-row flex fixed top-[2rem] mx-[2%] z-[99]" ref={myref}>
        <div className=" ml-[1rem] flex-row hidden lg:flex h-[100%] w-[24rem] justify-between items-center z-[2]">
            <a href="#" className="text-[1rem] font-semibold ">Home</a>
            <a href="#" className="text-[1rem] font-semibold">About Us</a>
            <a href="#" className="text-[1rem] font-semibold">Best Sellers</a>
            <a href="#" className="text-[1rem] font-semibold">Location</a>

        </div>
        <div className="block lg:hidden my-[1rem] ml-[1rem] cursor-pointer" onClick={hammenu}>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
        </div>

        <img src={logo} className="w-[10rem] h-[100%] lg:left-[45%] md:left-[40%] left-[35%] absolute"></img>

        <div  ref={ham} className="h-screen shadow-xl bg-white w-[25rem] md:w-[30rem] translate-x-[-70rem] relative z-[99]">
            <div onClick={hammenu} className="cursor-pointer flex flex-row">
                <AiOutlineClose size="25px" style={{marginTop:"1.5rem",marginLeft:"1.5rem"}}/>
                <img src={logo} className="w-[10rem] ml-[15%] md:ml-[25%] mt-[1rem]"></img>
            </div>
            <div className="flex flex-col justify-between h-[35%]  mt-[4rem]">
            <div className="flex flex-row justify-between">
            <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Home</a>
                <MdArrowForwardIos size="20px" style={{marginTop:"0.5rem",marginRight:"1rem"}}/>
            </div>
            <div className="flex flex-row justify-between">
            <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">About Us</a>
                <MdArrowForwardIos size="20px" style={{marginTop:"0.5rem",marginRight:"1rem"}}/>
            </div>
            <div className="flex flex-row justify-between">
            <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Best Sellers</a>
               <MdArrowForwardIos size="20px" style={{marginTop:"0.5rem",marginRight:"1rem"}}/>
            </div> 
            <div className="flex flex-row justify-between">
            <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Location</a>
               <MdArrowForwardIos size="20px" style={{marginTop:"0.5rem",marginRight:"1rem"}}/>
            </div> 
            </div>
        </div>
    </nav>
}