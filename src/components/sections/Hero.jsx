import Image from '../../../public/tea_bg_2.jpg';
import { Button } from '../common/Button';

export function Hero() {
    return (
            <div
                id="home"
                style={{ backgroundImage: `url(${Image})` }}
                className="h-screen w-full bg-cover bg-right bg-no-repeat lg:bg-top flex items-center px-4"
            >
                
            <div className="lg:w-[970px] xl:w-[1170px] mx-auto lg:px-5">
                <div className='space-y-5 lg:w-1/2'>
                    <h1 className="text-5xl font-bold font-quicksand">Good food choices are good investments.</h1>
                    <p className="font-quicksand text-lg font-medium text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <div className='pt-3'>
                        <Button value={"Đặt hàng ngay"} href={"#"} size={"medium"} />
                    </div>
                </div>
            </div>

            </div>
    );
}
