import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import menuIcon from '../Assets/Images/hamburger.png'

const Nav = (props) => {
    const Navigate = useNavigate()

    const [sideNav, setSideNav] = useState(false)

    const handleMenu = () => {
        Navigate('/menu')
    }

    const handleHome = () => {
        Navigate('/')
    }

    const handleSign = () => {
        Navigate('/menu')
    }

    const handleCart = () => {
        Navigate('/')
    }

    const handleCloseNav = () =>{
        setSideNav(false)
    }

    const handleOpenNav =() =>{
        setSideNav(true)
    }
    return (
        <Fragment>
            <main className="w-[100%] bg-[#0E1317] text-white lg:px-24 p-8 lg:py-8 sticky top-0 z-10 flex items-center justify-between">
                <section className="flex lg:flex-row flex-col items-center font-bold lg:gap-2">
                    <h2 className="lg:text-3xl text-2xl">Ambur Biriyani</h2>
                    <h2 className="lg:text-3xl text-2xl text-[#E13750]">Kallakurichi</h2>
                </section>
                <section className="lg:flex hidden font-bold gap-10 cursor-pointer">
                    <p style={{ color: props.home ? '#E13750' : '' }} onClick={handleHome} className="hover:text-[#E13750]">HOME</p>
                    <p style={{ color: props.menu ? '#E13750' : '' }} onClick={handleMenu} className="hover:text-[#E13750]">MENU</p>
                    <p style={{ color: props.sign ? '#E13750' : '' }} onClick={handleSign} className="hover:text-[#E13750]">LOGIN IN/SIGN UP</p>
                    <p style={{ color: props.cart ? '#E13750' : '' }} onClick={handleCart} className="hover:text-[#E13750]">CART</p>
                </section>
                <section className="lg:hidden flex">
                    <img onClick={handleOpenNav} className="w-10" src={menuIcon} alt="menu" />
                </section>
            </main>
            <section style={{right: sideNav?'0':'-75%'}} className="fixed w-[75%] bg-[#FAF7F2] duration-500 p-10 top-0 -right-[75%] z-20 h-[100%]">
                    <div className="flex flex-col font-bold gap-10">
                        <p onClick={handleCloseNav} className="text-right mb-5 text-3xl">x</p>
                        <p style={{ color: props.home ? '#E13750' : '' }} onClick={handleHome} className="hover:text-[#E13750]">HOME</p>
                        <p style={{ color: props.menu ? '#E13750' : '' }} onClick={handleMenu} className="hover:text-[#E13750]">MENU</p>
                        <p style={{ color: props.sign ? '#E13750' : '' }} onClick={handleSign} className="hover:text-[#E13750]">LOGIN IN/SIGN UP</p>
                        <p style={{ color: props.cart ? '#E13750' : '' }} onClick={handleCart} className="hover:text-[#E13750]">CART</p>
                    </div>
                </section>
        </Fragment>
    )
}

export default Nav