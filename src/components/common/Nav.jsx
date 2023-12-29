import { Button } from './Button';

// eslint-disable-next-line react/prop-types
export function Nav({ isOpen }) {
    return (
        <div
            className={`${
                isOpen ? 'flex' : 'hidden'
            } flex-col items-center justify-center space-y-4 py-4 lg:text-base text-xl text-center font-quicksand font-bold text-primary lg:bg-transparent bg-white mt-5 lg:mt-0 shadow-md transition-all lg:flex lg:w-full lg:flex-row lg:space-x-4 lg:space-y-0 lg:py-0 lg:shadow-none`}
        >
            <a href="#home">Trang chủ</a>

            <a href="#about">Giới thiệu</a>

            <a href="#products">Sản phẩm</a>

            <a href="#testimonials">Đánh giá</a>

            <Button value={'SĐT: 0917707142'} href={"tel:0917707142"} size={"small"} />
        </div>
    );
}
