import { useRef } from "react";
import Back from "./Back";
import BannerAd from "./BannerAd";
import ProductsRow from "./ProductsRow";
import BannerAd2 from "./BannerAd2";

export default function Products() {
    const product = [{
        type: "Full Sleves shirt",
        image: "model1",
        desc: "lorem123333"
    },
    {
        type: "Full pant",
        image: "model1",
        desc: "lorem123333"
    },
    {
        type: "half Sleves shirt",
        image: "model1",
        desc: "lorem123333"
    }]

    return (
        <div className="flex flex-col mt-[120px]">
            <Back />
            <ProductsRow prod={product[0]} />
            <BannerAd />
            <ProductsRow prod={product[1]} />
            <BannerAd2/>
            <ProductsRow prod={product[2]} />
            <BannerAd />
            <ProductsRow prod={product[0]} />
            <BannerAd2 />
        </div>
    )
}