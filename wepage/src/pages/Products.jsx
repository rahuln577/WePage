import { useRef } from "react";
import Back from "./Back";
import ProductsRow from "./ProductsRow";

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
        <div className="flex flex-col">
            <Back />
            <ProductsRow prod={product[0]} />
            <ProductsRow prod={product[1]} />
            <ProductsRow prod={product[2]} />
            <ProductsRow prod={product[0]} />

        </div>
    )
}