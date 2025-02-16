import Home from "./components/Home"
import { Route, Routes } from 'react-router-dom'
import { Fragment } from "react"
import About from "./components/About"
import Client from "./components/Client"
import Jobseeker from "./components/Jobseeker"
import Contact from "./components/Contact"
import Service from "./components/Service"

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/clients" element={<Client />}></Route>
        <Route path="/services" element={<Service/>}></Route>
        <Route path="/jobseekers" element={<Jobseeker />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App