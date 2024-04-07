import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Back() {
    return (
        <div className="w-full top-0 relative h-12 bg-grey-50 flex flex-row items-center justify-start gap-4 p-4">
            <Link to='/'>
                <h1 className="font-bold text-xl flex">
                    <IoIosArrowBack style={{ width: "2rem", height: "2rem", margin: "0" }} />
                    Back
                </h1>
            </Link>
        </div>
    )
}