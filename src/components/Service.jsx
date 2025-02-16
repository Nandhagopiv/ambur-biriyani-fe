import { Fragment } from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const Service = () => {
    return (
        <Fragment>
            <Nav home={false} course={false} client={false} seekers={false} contact={false} service={true} />
            <section className="min-h-screen bg-gradient-to-r from-gray-300 via-black-200 to-gray-100 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                        Our IT Training Services
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-12">
                        We offer a wide range of IT training programs designed to equip you with the skills needed to excel in the tech industry. Our expert trainers and comprehensive courses ensure you get the best education and hands-on experience.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
                            <p className="text-gray-600 mb-4">
                                Learn full-stack web development using modern technologies such as React, Node.js, and MongoDB. Build interactive, dynamic websites and applications.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Frontend Development (HTML, CSS, JavaScript)</li>
                                <li>Backend Development (Node.js, Express)</li>
                                <li>Database Management (MongoDB, MySQL)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Science</h3>
                            <p className="text-gray-600 mb-4">
                                Dive into the world of Data Science and learn to analyze and interpret complex data using Python, R, and machine learning algorithms.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Data Analysis with Python (Pandas, NumPy)</li>
                                <li>Machine Learning Algorithms (Sklearn, TensorFlow)</li>
                                <li>Data Visualization (Matplotlib, Seaborn)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
                            <p className="text-gray-600 mb-4">
                                Master mobile app development for both Android and iOS platforms using tools like Flutter, React Native, and Swift.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Mobile App Design & Development</li>
                                <li>Cross-Platform App Development (React Native, Flutter)</li>
                                <li>App Monetization & Publishing</li>
                            </ul>
                        </div>

   
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Computing</h3>
                            <p className="text-gray-600 mb-4">
                                Get hands-on experience with cloud platforms like AWS, Azure, and Google Cloud. Learn to deploy, manage, and scale cloud-based applications.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Cloud Infrastructure (AWS, Azure, GCP)</li>
                                <li>Serverless Architecture</li>
                                <li>Cloud Security & Best Practices</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cybersecurity</h3>
                            <p className="text-gray-600 mb-4">
                                Protect digital assets with a deep understanding of cybersecurity tools and strategies. Learn ethical hacking, penetration testing, and more.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Network Security</li>
                                <li>Ethical Hacking & Penetration Testing</li>
                                <li>Data Protection & Encryption</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Digital Marketing</h3>
                            <p className="text-gray-600 mb-4">
                                Unlock the power of digital marketing through SEO, content marketing, social media, and paid advertising strategies to grow your brand online.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Search Engine Optimization (SEO)</li>
                                <li>Social Media Marketing (SMM)</li>
                                <li>Google Ads & Analytics</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Software Testing</h3>
                            <p className="text-gray-600 mb-4">
                                Learn manual and automated testing techniques, including tools like Selenium and JUnit, to ensure the quality of software products.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Manual Testing Techniques</li>
                                <li>Automated Testing with Selenium</li>
                                <li>Performance Testing (JMeter)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Artificial Intelligence</h3>
                            <p className="text-gray-600 mb-4">
                                Dive deep into AI and machine learning algorithms, developing intelligent systems that can perform tasks without human intervention.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Machine Learning Algorithms</li>
                                <li>Deep Learning (TensorFlow, Keras)</li>
                                <li>Natural Language Processing (NLP)</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">DevOps</h3>
                            <p className="text-gray-600 mb-4">
                                Learn to automate and improve the processes of software development and IT operations using DevOps practices, tools, and cloud technologies.
                            </p>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li>Continuous Integration & Deployment (CI/CD)</li>
                                <li>Version Control (Git, GitHub)</li>
                                <li>Containerization (Docker, Kubernetes)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Service