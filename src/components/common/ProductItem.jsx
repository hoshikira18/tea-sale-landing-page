/* eslint-disable react/prop-types */
import { Button } from './Button';
import Image from '/About/image_1.jpg';

export function ProductItem({ title, price, discountPrice }) {
    return (
        <div className="flex flex-col space-y-3 pb-20">
            <div>
                <img
                    src={Image}
                    alt="product item image"
                    className="rounded-lg"
                />
                <h2 className="mt-2 px-2 font-quicksand text-xl font-bold">
                    {title}
                </h2>
            </div>
            <div className="flex">
                <div className="px-2 font-quicksand font-bold text-primary">
                    {discountPrice}
                </div>
                <div className="px-2 font-quicksand font-bold text-gray-500 line-through">
                    {price}
                </div>
            </div>

            <Button value={'Mua ngay'} />
        </div>
    );
}
