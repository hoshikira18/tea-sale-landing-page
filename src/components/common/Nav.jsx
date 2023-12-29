import { Button } from './Button'

// eslint-disable-next-line react/prop-types
export function Nav ({ isOpen }) {

    return (
        <div className={ `${isOpen ? 'flex' : 'hidden'} lg:flex text-[#121212] font-bold flex-col lg:flex-row justify-center py-4 lg:py-0 lg:space-x-4 space-y-4 lg:space-y-0 items-center font-quicksand text-center transition-all shadow-md lg:shadow-none lg:w-full`}>
            <a href="#home">Trang chủ</a>
        
            <a href="#about">Giới thiệu</a>
        
            <a href="#products">Sản phẩm</a>
        
            <a href="#testimonials">Đánh giá</a>

            <Button value={"SĐT: 0917707142"} />
        </div>
    )
}