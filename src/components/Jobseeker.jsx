import { Fragment } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { useState } from "react"
import axios from "axios"

const Jobseeker = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        jobRole: '',
        presentAddress: '',
        preferredLocation: '',
        willingToRelocate: 'no',
        currentSalary: '',
        expectedSalary: '',
        resume: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

  
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            resume: file,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            setFormData({
                name: '',
                email: '',
                mobile: '',
                jobRole: '',
                presentAddress: '',
                preferredLocation: '',
                willingToRelocate: 'no',
                currentSalary: '',
                expectedSalary: '',
                resume: null
            })
            const response = await axios.post('http://localhost:5000/applying', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Fragment>
            <Nav home={false} course={false} client={false} seekers={true} contact={false} service={false} />
            <section className="min-h-screen bg-gradient-to-r from-gray-300 via-black-200 to-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                        Apply for a Job
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8">
                        Register with us and get a job! Please fill out the form below.
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Mobile Number"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="jobRole">
                                    Job Role You Are Looking For
                                </label>
                                <select
                                    id="jobRole"
                                    required
                                    name="jobRole"
                                    value={formData.jobRole}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="Asp.net developer">Asp.net developer</option>
                                    <option value="Frontend developer">Frontend developer</option>
                                    <option value="Backend developer">Backend developer</option>
                                    <option value="Full Stack developer">Full Stack developer</option>
                                    <option value="Java developer">Java developer</option>
                                    <option value="Python developer">Python developer</option>
                                    <option value="Web designer">Web designer</option>
                                    <option value="UI/UX Designer">UI/UX Designer</option>
                                    <option value="DevOps engineer">DevOps engineer</option>
                                    
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="presentAddress">
                                    Present Address
                                </label>
                                <textarea
                                    id="presentAddress"
                                    name="presentAddress"
                                    value={formData.presentAddress}
                                    onChange={handleInputChange}
                                    rows="3"
                                    required
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Present Address"
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="preferredLocation">
                                    Preferred Job Location
                                </label>
                                <input
                                    type="text"
                                    id="preferredLocation"
                                    name="preferredLocation"
                                    value={formData.preferredLocation}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Preferred Job Location"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="willingToRelocate">
                                    Willing to Relocate?
                                </label>
                                <select
                                    id="willingToRelocate"
                                    name="willingToRelocate"
                                    required
                                    value={formData.willingToRelocate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="currentSalary">
                                    Current Salary
                                </label>
                                <input
                                    type="number"
                                    id="currentSalary"
                                    name="currentSalary"
                                    value={formData.currentSalary}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Current Salary"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="expectedSalary">
                                    Expected Salary
                                </label>
                                <input
                                    type="number"
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Expected Salary"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-left text-gray-700" htmlFor="resume">
                                    Attach Your Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    onChange={handleFileChange}
                                    className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Jobseeker