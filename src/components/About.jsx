import { Fragment } from "react"
import Footer from "./Footer"
import Nav from "./Nav"

const About = () => {
    return (
        <Fragment>
            <Nav home={false} course={true} client={false} seekers={false} contact={false} service={false} />
            <section className="max-w-4xl m-10 mx-auto p-16 bg-gradient-to-r from-gray-300 via-black-200 to-gray-100 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                    About Jaisai Academy
                </h1>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                    Jaisai Academy is a premier educational institution that specializes in offering top-quality training and skill development programs.
                    Our focus is on equipping students with the necessary tools and knowledge to excel in their careers and make a significant impact in their chosen fields.
                    Established with a vision to bridge the gap between theoretical knowledge and practical application, Jaisai Academy aims to empower individuals to become leaders and innovators in their respective industries.
                </p>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                    Founded on the principles of excellence, integrity, and innovation, Jaisai Academy provides a wide range of courses, workshops, and certifications in various sectors.
                    We offer training in fields such as technology, business, creative arts, healthcare, and more. Our mission is to foster an environment where students can grow intellectually, professionally, and personally.
                    We strive to create an atmosphere where learning is not just about acquiring knowledge but also about nurturing the skills and mindset required for success in today’s dynamic world.
                </p>

                
                <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        Our IT Courses
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-4">
                        At Jaisai Academy, we offer cutting-edge IT courses designed to equip students with the knowledge and skills required to excel in the ever-evolving tech industry. Here are some of our key IT courses:
                    </p>
                    <ul className="list-disc pl-6 space-y-4 text-gray-700">
                        <li>
                            <strong>Web Development Bootcamp:</strong> Learn how to build dynamic and responsive websites using HTML, CSS, JavaScript, React, and Node.js. This hands-on course takes you from beginner to full-stack web developer.
                        </li>
                        <li>
                            <strong>Data Science & Machine Learning:</strong> Dive deep into data analysis, statistical modeling, and machine learning algorithms using Python, R, and popular libraries like Pandas and TensorFlow.
                        </li>
                        <li>
                            <strong>Cloud Computing & AWS:</strong> Master cloud technologies and platforms, with a focus on Amazon Web Services (AWS). This course covers cloud infrastructure, serverless computing, and deployment techniques.
                        </li>
                        <li>
                            <strong>Cybersecurity Essentials:</strong> Learn how to protect systems from cyber threats, focusing on network security, encryption, penetration testing, and ethical hacking.
                        </li>
                        <li>
                            <strong>Mobile App Development:</strong> Build native mobile applications for Android and iOS using Kotlin, Swift, and cross-platform frameworks like Flutter.
                        </li>
                    </ul>
                </div>

                <p className="text-base sm:text-lg text-gray-700">
                    Jaisai Academy is committed to providing industry-relevant knowledge and skills. Our expert instructors ensure that each course is aligned with the current market trends and prepares students for real-world challenges.
                    Join us and take the first step toward a successful career in IT!
                </p>
            </section>
            <Footer />
        </Fragment>
    )
}

export default About