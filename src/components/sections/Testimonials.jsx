import { useEffect, useState } from 'react';

export function Testimonials() {
    const customer = [
        {
            name: 'Phạm Nhật Vượng',
            comment:
                '"Không chỉ là việc tách trà, mà bạn còn tạo ra một trải nghiệm tinh tế. Từ cách bạn chọn lá trà đến cách bạn phục vụ, tất cả đều rất chuyên nghiệp."',
            image: "/Testimonials/phamnhatvuong.jpg"
        },
        {
            name: 'Shark Minh Beta',
            comment:
                '"Cảm ơn bạn vì sự chăm sóc tỉ mỉ trong việc tách trà. Mỗi lần uống trà, tôi thấy như mình đang thưởng thức một tác phẩm nghệ thuật."',
                image: "/Testimonials/minhbeta.webp"
        },
        {
            name: 'Shark Hùng Anh',
            comment:
                '"Tôi không chỉ uống trà, mà còn trải nghiệm một thời gian yên bình và tận hưởng mỗi giọt trà được tách ra bởi bạn. Điều này thực sự là một trải nghiệm độc đáo."',
                image: "/Testimonials/sharkhunganh.jpeg"
        },
    ];

    const [content, setContent] = useState(customer[0]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * customer.length);
        setContent(customer[randomIndex]);
      }, 3000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="testimonials" className="flex w-full items-start bg-primary">
            <div className="relative mx-auto lg:w-3/5 py-20 px-5">
                <div className=" rounded-lg bg-[#eeeeee] lg:px-12 px-8 pt-20 pb-10 font-quicksand text-lg font-bold">
                    <p>{content.comment}</p>
                    <p className='font-quicksand text-primary text-xl font-bold mt-2'> ~ {content.name} ~</p>
                </div>
                <img
                    src={content.image}
                    alt=""
                    className="absolute top-4 mx-10 h-32 w-32 rounded-full border-8 border-[#eeeeee] object-cover"
                />
            </div>
        </section>
    );
}
