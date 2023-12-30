import { ProductItem } from "../common/ProductItem";

export function Products() {
    return (
        <section className="w-full ">
            <div className="w-full lg:mx-auto lg:w-[970px] xl:w-[1170px]">
                <div className="text-center py-20 px-32 space-y-5">
                    <h2 className="text-3xl font-quicksand font-bold">Explore Our Products</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam et purus a odio finibus bibendum in sit amet leo.
                        Mauris feugiat erat tellus. Far far away, behind the
                        word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove.
                    </p>
                </div>
                <div className="flex space-x-10">
                    <ProductItem title={"Trà thảo mộc"} price={"200.000 VNĐ"} />
                    <ProductItem title={"Trà thảo mộc"} price={"200.000 VNĐ"} />
                    <ProductItem title={"Trà thảo mộc"} price={"200.000 VNĐ"} />
                </div>
            </div>
        </section>
    );
}
