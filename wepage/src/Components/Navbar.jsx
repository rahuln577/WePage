import logo from "./../assets/logo.png"
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState } from "react"
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
    let curpage = 0;
    let myref = useRef(null);
    let ham = useRef(null);
    let menu = false;

    const [visible, setVisible] = useState(false)


    const observer = new IntersectionObserver(
        (enteries) => {
            if (enteries.isIntersecting) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
    )

    observer.observe(document.querySelector("body"))

    document.body.onscroll = () => {
        if (window.scrollY > curpage) {
            myref.current.classList.remove("movedown");
            myref.current.classList.add("moveup");
        }
        else if (window.scrollY < curpage) {
            myref.current.classList.remove("moveup");
            myref.current.classList.add("movedown");
        }
        curpage = window.scrollY;
    }


    function hammenu() {
        if (menu) {
            menu = false;
            ham.current.classList.remove("anim");
            ham.current.classList.add("reanim");
        }
        else {
            menu = true;
            ham.current.classList.remove("reanim");
            ham.current.classList.add("anim");
        }
    }
    return <nav className="bg-white shadow-lg w-[96%]  h-[4.5rem] flex-row flex fixed top-[2rem] mx-[2%] z-[99] movedown" ref={myref}>
        <div className=" ml-[1rem] flex-row hidden lg:flex h-[100%] w-[24rem] justify-between items-center z-[2]">
            <a href="#" className="text-[1rem] font-semibold "><Link to='/'>Home</Link></a>
            <Link to='/aboutus'><a href="#" className="text-[1rem] font-semibold"> About Us </a></Link>
            <a href="#bestsellers" className="text-[1rem] font-semibold scroll-smooth">Best Sellers</a>
            <a href="#Location" className="text-[1rem] font-semibold">Location</a>

        </div>
        <div className="block lg:hidden my-[1rem] ml-[1rem] cursor-pointer reanim" onClick={hammenu}>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
            <div className="w-[30px] h-[2px] rounded-[10%] bg-black my-[0.5rem]"></div>
        </div>

        <img src={logo} className="w-[10rem] h-[100%] lg:left-[45%] md:left-[40%] left-[35%] absolute"></img>

        <div ref={ham} className="h-screen shadow-xl bg-white w-[25rem] md:w-[30rem] translate-x-[-70rem] relative z-[99]">
            <div onClick={hammenu} className="cursor-pointer flex flex-row">
                <AiOutlineClose size="25px" style={{ marginTop: "1.5rem", marginLeft: "1.5rem" }} />
                <img src={logo} className="w-[10rem] ml-[15%] md:ml-[25%] mt-[1rem]"></img>
            </div>
            <div className="flex flex-col justify-between h-[35%]  mt-[4rem]">
                <div className="flex flex-row justify-between">
                    <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Home</a>
                    <MdArrowForwardIos size="20px" style={{ marginTop: "0.5rem", marginRight: "1rem" }} />
                </div>
                <div className="flex flex-row justify-between">
                    <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">About Us</a>
                    <MdArrowForwardIos size="20px" style={{ marginTop: "0.5rem", marginRight: "1rem" }} />
                </div>
                <div className="flex flex-row justify-between">
                    <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Best Sellers</a>
                    <MdArrowForwardIos size="20px" style={{ marginTop: "0.5rem", marginRight: "1rem" }} />
                </div>
                <div className="flex flex-row justify-between">
                    <a href="#" className="font-semibold text-[2rem] ml-[2.5rem]">Location</a>
                    <MdArrowForwardIos size="20px" style={{ marginTop: "0.5rem", marginRight: "1rem" }} />
                </div>
            </div>
        </div>
    </nav>
}