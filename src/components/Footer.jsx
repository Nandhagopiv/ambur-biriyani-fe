import { Fragment } from "react"

const Footer = () => {
    return (
        <Fragment>
            <main className="bg-gradient-to-r from-red-700 via-red-500 to-yellow-100 p-14 flex justify-center font-bold text-white">
                <div className="md:w-[50%] md:text-xl flex flex-col gap-5">
                    <h2 className="md:text-4xl text-2xl">Contact Us</h2>
                    <p>
                        Address: No:158,Shree Palaniandavar Complex,
                        ByPass Road, RSP Nagar,
                        Dharapuram,Tiruppur
                        Tamil Nadu -638656
                    </p>
                    <hr/>
                    <div>
                        <p>Email: info@onejobs.in</p>
                        <p>Contact: +91 9994258881</p>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Footer