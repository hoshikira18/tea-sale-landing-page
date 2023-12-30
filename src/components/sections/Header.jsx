import { useEffect, useState } from 'react';
import { Nav } from '../common/Nav';
import Logo from '../../../public/logo.png';

export function Header() {
    const [Y, setY] = useState(0);

    function handleScroll() {
        setY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shadowClass = Y > 20 ? 'shadow-md' : '';
    const bgClass = Y > 20 ? 'bg-white' : 'bg-transparent';

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section
            className={`z-10 fixed w-full transition-all ${shadowClass} ${bgClass}`}
        >
            <div className="mx-auto flex flex-col justify-between p-5 transition-all lg:w-[970px] lg:flex-row xl:w-[1170px]">
                <div className="flex w-full justify-between">
                    <a href="#home">
                        <img
                            src={Logo}
                            alt="logo image"
                            className="w-28 lg:w-40"
                        />
                    </a>
                    <div
                        className="flex h-full cursor-pointer flex-col space-y-1 lg:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="inline-block h-1.5 w-8 rounded bg-primary"></span>
                        <span className="inline-block h-1.5 w-8 rounded bg-primary"></span>
                        <span className="inline-block h-1.5 w-8 rounded bg-primary"></span>
                    </div>
                </div>

                <Nav isOpen={menuOpen} />
            </div>
        </section>
    );
}
