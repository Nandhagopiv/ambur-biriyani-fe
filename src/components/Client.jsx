import { Fragment } from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Client = () => {
    return (
        <Fragment>
            <Nav home={false} course={false} client={true} seekers={false} contact={false} service={false} />
            <section className="max-w-6xl m-16 mx-auto p-16 bg-gradient-to-r from-gray-300 via-black-200 to-gray-100 rounded-lg shadow-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                    Our Previous Clients
                </h1>
                <p className="text-lg text-center text-gray-700 mb-12">
                    At Jaisai Technologies, we’ve had the privilege of working with some amazing clients.
                    Below is a list of the distinguished companies that we have helped grow and thrive through our IT solutions.
                </p>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Fitsys</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Fitsys is a leading IT service provider that specializes in offering custom software solutions to businesses globally.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/branch.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Collaborated to deliver enterprise-grade solutions for their clients across industries.</p>
                    </div>

                
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Hubino</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Hubino is an innovation-driven company focusing on bringing next-gen technology solutions to various industries.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/innovation.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Built cutting-edge software solutions to streamline their operations and enhance efficiency.</p>
                    </div>

                 
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Junction Fabrics & Apparels</h3>
                        <p className="text-base text-gray-700 mb-4">
                            A premium fabric and apparel company, Junction specializes in providing high-quality textile products to the fashion industry.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/needle-thread.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Developed a customized ERP system to streamline production and sales processes.</p>
                    </div>

                 
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Learning Matters</h3>
                        <p className="text-base text-gray-700 mb-4">
                            A leading education platform focused on providing quality learning resources and tutoring services for students of all levels.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/book-open.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Built an e-learning platform that facilitates online tutoring, assessments, and learning management.</p>
                    </div>

                 
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">R Soft</h3>
                        <p className="text-base text-gray-700 mb-4">
                            A software development company specializing in custom software and IT solutions for startups and SMEs.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/cogs.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Partnered in building tailor-made software solutions for various businesses and startups.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Sadhvi</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Sadhvi is a multi-faceted organization offering services in various sectors such as education, healthcare, and technology.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/organization.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Developed a robust CRM system to enhance their organizational efficiency and customer management.</p>
                    </div>

                 
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">UX Mind</h3>
                        <p className="text-base text-gray-700 mb-4">
                            UX Mind focuses on designing user-centric applications and experiences for clients in various industries.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/web-design.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Worked together to create intuitive and engaging UX/UI designs for mobile and web applications.</p>
                    </div>

                 
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Chennai Silks</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Chennai Silks is a renowned retailer offering a wide range of silk sarees and garments, catering to both traditional and contemporary fashion.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/fabric.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Enhanced their e-commerce platform with smooth UX and faster product management.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Doiter</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Doiter is an IT consulting firm that provides strategic business solutions through innovative technology.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/consulting.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Built customized IT solutions and provided consultancy services for improving operational workflows.</p>
                    </div>

        
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4">Cloud Fix</h3>
                        <p className="text-base text-gray-700 mb-4">
                            Cloud Fix is a cloud computing solutions provider that helps businesses transition to cloud-based services.
                        </p>
                        <img
                            className="w-16 h-16 mx-auto mb-4"
                            src="https://img.icons8.com/ios-filled/50/000000/cloud.png"
                            alt="Client Icon"
                        />
                        <p className="text-sm text-gray-500">Collaborated to optimize their cloud management systems, improving scalability and security.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Client