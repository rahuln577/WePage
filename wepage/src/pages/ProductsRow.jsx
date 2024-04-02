import ProductsCard from "./ProductsCard";

import { useRef } from "react";

export default function ProductsRow({prod}) {

    const prodcard = useRef(null);
    const slider = useRef(null);

    function slide(){
        let curr = prodcard.current.scrollLeft;
        let total = prodcard.current.scrollWidth - prodcard.current.clientWidth;

        let val = (curr / total) * 100;

        slider.current.style.width = val.toString() + "%";
    }

    return (
        <div className="flex flex-col">
            <div className="w-full my-4">
                <h1 className="font-bold text-[2rem] md:text-[3rem] ml-[2rem] md:ml-[3rem] bg-gray-50 "> Shirts Collection </h1>
            </div>
            <div className="w-full overflow-x-scroll no-scrollbar relative flex flex-row"  ref={prodcard} onScroll={slide} >
                <ProductsCard prod = {prod} />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
                <ProductsCard />
            </div>
            <div  className="w-[90%] h-[0.15rem] bg-gray-50 mx-auto mt-4">
                <div className="w-[5%] bg-black h-[0.15rem] "  ref={slider}></div>
            </div>
        </div>
    )
}