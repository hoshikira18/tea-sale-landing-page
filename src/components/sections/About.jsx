import { Button } from '../common/Button';
import Image1 from '/About/image_1.jpg';
import Image2 from '/About/image_2.jpg';

export function About() {
    return (
        <section id="about" className="mt-[26rem] flex  w-full py-24 lg:mt-0">
            <div className="w-full space-y-20 lg:space-y-40 lg:mx-auto lg:w-[970px] xl:w-[1170px]">
                <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-10">
                    <div className="px-5 md:px-10 lg:w-3/5 lg:px-5">
                        <img
                            src={Image2}
                            alt="image cup of tea"
                            className="rounded-lg"
                        />
                    </div>

                    <div className="flex w-full flex-col items-start justify-center space-y-3 px-8 md:w-[90%] md:px-10 lg:w-2/5 lg:space-y-8 lg:px-5">
                        <h2 className="font-quicksand text-2xl font-bold md:text-3xl">
                            We pride ourselves on making real food from the best
                            ingredients.
                        </h2>
                        <p className="text-justify text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.
                        </p>
                        <Button value={'Tìm hiểu thêm'} size={'medium'} />
                    </div>
                </div>

                <div className="flex flex-col space-y-3 lg:flex-row lg:space-x-20">
                    <div className="flex w-full flex-col items-start justify-center space-y-3 px-8 md:w-[90%] md:px-10 lg:w-2/5 lg:space-y-8 lg:px-5 mb-10 pt-5">
                        <h2 className="font-quicksand text-2xl font-bold md:text-3xl">
                            We make everything by hand with the best possible
                            ingredients.
                        </h2>
                        <p className="text-justify text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam et purus a odio finibus bibendum in sit
                            amet leo. Mauris feugiat erat tellus.Far far away,
                            behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <Button value={'Tìm hiểu thêm'} size={'medium'} />
                    </div>

                    <div className="px-5 md:px-10 lg:w-3/5 lg:px-5">
                        <img
                            src={Image1}
                            alt="image cup of tea"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
