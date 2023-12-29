import { Button } from './Button'

export function Nav () {
    return (
        <div className="text-[#121212] font-bold space-x-4 items-center hidden md:flex font-quicksand">
            <a href="#home">Trang chủ</a>
            <a href="#about">Giới thiệu</a>
            <a href="#products">Sản phẩm</a>
            <a href="#testimonials">Đánh giá</a>
            <Button value={"0917707142"} />
        </div>
    )
}