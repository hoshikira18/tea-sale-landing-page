import Image from '/Hero/tea_bg_2.jpg';
import { Button } from '../common/Button';
import { CountUp } from '../common/CountUp';

export function Hero() {
    return (
            <div
                id="home"
                style={{ backgroundImage: `url(${Image})` }}
                className="relative h-screen w-full bg-cover bg-right bg-no-repeat lg:bg-top flex items-center "
            >
                
            <div className="lg:w-[970px] xl:w-[1170px] mx-auto px-4 lg:px-5">
                <div className='space-y-5 lg:w-1/2'>
                    <h1 className="text-4xl lg:text-5xl font-bold font-quicksand">Good food choices are good investments.</h1>
                    <p className="font-quicksand text-lg font-medium text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    <div className='pt-3'>
                        <Button value={"Đặt hàng ngay"} href={"#"} size={"medium"} />
                    </div>
                </div>
            </div>

            <div className='absolute -bottom-[30rem] lg:bottom-0 w-full h-[30rem] lg:h-40 bg-primary flex flex-col lg:flex-row justify-center items-center lg:space-x-60'>
                <CountUp title={"Savings"} end={1287} />
                <CountUp title={"PHOTOS"} end={5786} />
                <CountUp title={"ROCKETS"} end={1440} />
                <CountUp title={"GLOBES"} end={7110} />
            </div>

            </div>
    );
}
