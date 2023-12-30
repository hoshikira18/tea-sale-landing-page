/* eslint-disable react/prop-types */
import { Button } from "./Button"
import Image from "/About/image_1.jpg"

export function ProductItem({ title, price }) {

    return (
        <div className="flex flex-col space-y-3 pb-20">
            <div>
                <img src={Image} alt="product item image" className="rounded-lg" />
                <h2 className="font-quicksand font-bold text-xl mt-2 px-2">{title}</h2>
            </div>

            <div className="px-2 text-primary font-quicksand font-bold">{price}</div>

            <Button value={"Mua ngay"}/>

        </div>
    )
}