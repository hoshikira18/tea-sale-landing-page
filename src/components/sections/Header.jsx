import { useEffect, useState } from 'react'
import { Nav } from "../common/Nav";
import Logo from "../../../public/logo.png"

export function Header() {

    const [ Y, setY ] = useState(0)

    function handleScroll () {
        setY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const shadowClass = Y > 20 ? 'shadow-md' : ''
    const bgClass = Y > 20 ? 'bg-white' : 'bg-transparent'

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className={`fixed w-full transition-all ${shadowClass} ${bgClass}`}>
            <div className="xl:w-[1170px] lg:w-[970px] mx-auto p-5 flex flex-col lg:flex-row justify-between transition-all">
                <div className="w-full flex justify-between">
                    <a href="#home">
                        <img src={Logo} alt="logo image" className="w-28 lg:w-40" />
                    </a>
                    <div className="lg:hidden h-full flex flex-col space-y-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="bg-primary h-1.5 w-8 rounded inline-block"></span>
                        <span className="bg-primary h-1.5 w-8 rounded inline-block"></span>
                        <span className="bg-primary h-1.5 w-8 rounded inline-block"></span>
                    </div>
                </div>

                <Nav isOpen={menuOpen} />
            </div>
        </section>
    )
}