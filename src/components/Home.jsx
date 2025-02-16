import { Fragment } from "react"
import Nav from "./Nav"
import Slider from "./Slider"
import Footer from "./Footer"

const Home = () => {
    return (
        <Fragment>
            <Nav home={true} course={false} client={false} seekers={false} contact={false} service={false} />
            <Slider />
            <section className="bg-white p-3 lg:p-10 text-black md:text-2xl font-bold gap-5 flex-wrap flex justify-center">
                <div className="border-2 flex-grow basis-1 p-8 flex justify-center text-center flex-shrink-0 items-center border-gray-400 border-dashed">
                    <div>

                    </div>
                    <p>12 Active Clients</p>
                </div>
                <div className="border-2 flex-grow basis-1 w-[25%] p-8 flex justify-center text-center flex-shrink-0 items-center border-gray-400 border-dashed">
                    <div>

                    </div>
                    <p>800 Candidates Placed</p>
                </div>
                <div className="border-2 flex-grow basis-1 w-[25%] p-8 flex justify-center text-center flex-shrink-0 items-center border-gray-400 border-dashed">
                    <div>

                    </div>
                    <p>300 Students Trained</p>
                </div>
                <div className="p-8 border-2 flex w-[25%] flex-grow basis-1 justify-center text-center flex-shrink-0 border-gray-400 border-dashed items-center">
                    <div>

                    </div>
                    <p>100 Campus Organized</p>
                </div>
            </section>
            <section className="max-w-6xl m-16 mx-auto p-16 bg-gradient-to-r from-gray-300 to-indigo-100 rounded-lg shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                    Our Achievements
                </h1>
                <p className="text-lg text-center text-gray-700 mb-12">
                    At Jaisai Technologies, we pride ourselves on the milestones we've achieved over the years. Our team is dedicated to innovation, quality, and driving success in the IT industry.
                    Below are some of the key achievements that we’ve accomplished.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-blue-600 mb-4">100+ Successful Projects</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Over 100 successful IT projects delivered across various industries including healthcare, finance, education, and more.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/project.png"
                            alt="Project Icon"
                        />
                        <p className="text-sm text-gray-500">Projects that shaped industries and impacted businesses globally.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-green-600 mb-4">Awarded Best IT Solutions Provider</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Recognized as the best IT solutions provider in the industry, winning prestigious awards for excellence in technology innovation.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/trophy.png"
                            alt="Award Icon"
                        />
                        <p className="text-sm text-gray-500">An acknowledgment of our expertise in delivering exceptional IT solutions.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Global Presence</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Expanding our reach to multiple countries, Jaisai Technologies now has a global presence, serving clients across North America, Europe, and Asia.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/globe.png"
                            alt="Global Icon"
                        />
                        <p className="text-sm text-gray-500">We continue to expand our footprint across the world, driving global IT transformations.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-yellow-600 mb-4">1000+ Satisfied Clients</h3>
                        <p className="text-base text-gray-700 mb-4">
                            We've helped over 1000 clients achieve their business goals by delivering cutting-edge IT solutions and customer-focused services.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/checked-user-male.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Our clients' trust in us is our biggest achievement and a true testament to our commitment to excellence.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-red-600 mb-4">ISO 9001 Certification</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Achieved ISO 9001 certification for our commitment to quality management and continuous improvement in all our processes.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/certificate.png"
                            alt="Certification Icon"
                        />
                        <p className="text-sm text-gray-500">A mark of excellence that demonstrates our focus on maintaining high-quality standards.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Industry Leaders in AI</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Leading the way in Artificial Intelligence (AI) development, we’ve built innovative AI-driven solutions for businesses worldwide.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/artificial-intelligence.png"
                            alt="AI Icon"
                        />
                        <p className="text-sm text-gray-500">Pioneering AI technologies and reshaping industries through intelligent automation and smart solutions.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Home