import Bg from '/Quote/bg_2.jpg';

export function Quote() {
    return (
        <div
            style={{ backgroundImage: `url(${Bg})` }}
            className="h-[400px] w-full bg-cover bg-center"
        ></div>
    );
}
