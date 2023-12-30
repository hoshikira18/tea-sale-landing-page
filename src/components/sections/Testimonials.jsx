import { useEffect, useState } from 'react';
import Image from '/Testimonials/phamnhatvuong.jpg';

export function Testimonials() {
    const customer = [
        {
            name: 'Phạm Nhật Vượng',
            comment:
                '"Không chỉ là việc tách trà, mà bạn còn tạo ra một trải nghiệm tinh tế. Từ cách bạn chọn lá trà đến cách bạn phục vụ, tất cả đều rất chuyên nghiệp."',
        },
        {
            name: 'Phạm Nhật Vượng 2',
            comment:
                '"Cảm ơn bạn vì sự chăm sóc tỉ mỉ trong việc tách trà. Mỗi lần uống trà, tôi thấy như mình đang thưởng thức một tác phẩm nghệ thuật."',
        },
        {
            name: 'Phạm Nhật Vượng 3',
            comment:
                '"Tôi không chỉ uống trà, mà còn trải nghiệm một thời gian yên bình và tận hưởng mỗi giọt trà được tách ra bởi bạn. Điều này thực sự là một trải nghiệm độc đáo."',
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
        <section className="flex h-[600px] w-full items-center bg-primary">
            <div className="relative mx-auto w-1/2 py-20">
                <div className=" rounded-lg bg-[#eeeeee] px-12 py-20 font-quicksand text-lg font-medium">
                    <p>{content.comment}</p>
                    <p className='font-quicksand text-primary font-bold mt-2'> ~ {content.name} ~</p>
                </div>
                <img
                    src={Image}
                    alt=""
                    className="absolute top-4 mx-10 h-32 w-32 rounded-full border-8 border-[#eeeeee] object-cover"
                />
            </div>
        </section>
    );
}
