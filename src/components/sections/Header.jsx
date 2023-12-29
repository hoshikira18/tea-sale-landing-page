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

    return (
        <section className={`fixed w-full transition-all ${shadowClass} ${bgClass}`}>
            <div className="w-[1170px] mx-auto p-5 flex justify-between">
                <div className="w-28 md:w-40">
                    <img src={Logo} alt="logo image" />
                </div>

                <Nav />
            </div>
        </section>
    )
}