import { Fragment } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { useState } from "react"
import axios from 'axios'

const Contact = () => {

    const[name, setName] = useState('')
    const[email,setEmail] = useState('')
    const[message, setMessage] = useState('')

    const handleSubmit = async(evt) =>{
        evt.preventDefault()
        axios.post('http://localhost:5000/sendmessage',{name:name,email:email,message:message})
        setEmail('')
        setMessage('')
        setName('')
        alert('Message sent successfully...')
    }

    const handleName = (e) =>{
         setName(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleMessage = (e) =>{
        setMessage(e.target.value)
    }

    return (
        <Fragment>
            <Nav home={false} course={false} client={false} seekers={false} contact={true} service={false} />
            <section className="min-h-screen bg-gradient-to-r from-gray-300 via-black-200 to-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                        Contact Us
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8">
                        We would love to hear from you. Please reach out to us using the contact details below.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Address</h3>
                        <p className="text-gray-600 mb-4">
                            <strong>Address:</strong> No:158, Shree Palaniandavar Complex, <br />
                            ByPass Road, RSP Nagar, Dharapuram, Tiruppur, <br />
                            Tamil Nadu - 638656
                        </p>
                        <hr className="border-t-2 border-gray-300 mb-4" />
                        <div>
                            <p className="text-gray-600"><strong>Email:</strong> info@onejobs.in</p>
                            <p className="text-gray-600"><strong>Contact:</strong> +91 9994258881</p>
                        </div>
                    </div>

               
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    id="name"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="email"
                                    id="email"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="message">
                                    Message
                                </label>
                                <textarea value={message}
                                    onChange={handleMessage}
                                    id="message"
                                    rows="4"
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button onClick={handleSubmit}
                                type="button"
                                className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Contact