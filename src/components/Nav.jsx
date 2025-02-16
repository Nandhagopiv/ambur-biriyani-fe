import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import menuIcon from '../Assets/Images/hamburger.png'

const Nav = (props) => {
    const Navigate = useNavigate()

    const [sideNav, setSideNav] = useState(false)

    const handleAbout = () => {
        Navigate('/about')
    }

    const handleService = () => {
        Navigate('/services')
    }

    const handleSeekers = () => {
        Navigate('/jobseekers')
    }

    const handleHome = () => {
        Navigate('/')
    }

    const handleClient = () => {
        Navigate('/clients')
    }

    const handleContact = () => {
        Navigate('/contact')
    }

    const handleCloseNav = () => {
        setSideNav(false)
    }

    const handleOpenNav = () => {
        setSideNav(true)
    }
    return (
        <Fragment>
            <main className="w-[100%] shadow bg-white text-white lg:px-24 p-8 lg:py-8 sticky top-0 z-20 flex items-center justify-between">
                <section className="flex lg:flex-row flex-col text-[#EC3A54] items-center font-bold lg:gap-2">
                    <h2 className="lg:text-4xl text-2xl">JAISAI</h2>
                    <h2 className="lg:text-4xl text-2xl">Academy</h2>
                </section>
                <section className="lg:flex hidden font-bold text-black gap-10 cursor-pointer">
                    <p style={{ color: props.home ? '#EC3A54' : '' }} onClick={handleHome} className="hover:text-[#EC3A54]">HOME</p>
                    <p style={{ color: props.course ? '#EC3A54' : '' }} onClick={handleAbout} className="hover:text-[#EC3A54]">ABOUT US</p>
                    <p style={{ color: props.client ? '#EC3A54' : '' }} onClick={handleClient} className="hover:text-[#EC3A54]">CLIENTS</p>
                    <p style={{ color: props.service ? '#EC3A54' : '' }} onClick={handleService} className="hover:text-[#EC3A54]">SERVICES</p>
                    <p style={{ color: props.seekers ? '#EC3A54' : '' }} onClick={handleSeekers} className="hover:text-[#EC3A54]">JOB SEEKERS</p>
                    <p style={{ color: props.contact ? '#EC3A54' : '' }} onClick={handleContact} className="hover:text-[#EC3A54]">CONTACT US</p>
                </section>
                <section className="lg:hidden flex">
                    <img onClick={handleOpenNav} className="w-10" src={menuIcon} alt="menu" />
                </section>
            </main>
            <section style={{ right: sideNav ? '0' : '-75%' }} className="fixed w-[75%] bg-gray-100 duration-500 p-10 top-0 -right-[75%] z-30 h-[100%]">
                <div className="flex flex-col font-bold text-black gap-10">
                    <p onClick={handleCloseNav} className="text-right mb-5 text-3xl">x</p>
                    <p style={{ color: props.home ? '#EC3A54' : '' }} onClick={handleHome} className="hover:text-[#EC3A54]">HOME</p>
                    <p style={{ color: props.course ? '#EC3A54' : '' }} onClick={handleAbout} className="hover:text-[#EC3A54]">ABOUT US</p>
                    <p style={{ color: props.client ? '#EC3A54' : '' }} onClick={handleClient} className="hover:text-[#EC3A54]">CLIENTS</p>
                    <p style={{ color: props.service ? '#EC3A54' : '' }} onClick={handleService} className="hover:text-[#EC3A54]">SERVICES</p>
                    <p style={{ color: props.seekers ? '#EC3A54' : '' }} onClick={handleSeekers} className="hover:text-[#EC3A54]">JOB SEEKERS</p>
                    <p style={{ color: props.contact ? '#EC3A54' : '' }} onClick={handleContact} className="hover:text-[#EC3A54]">CONTACT US</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Nav