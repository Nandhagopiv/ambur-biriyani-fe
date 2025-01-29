import Home from "./components/Home"
import {Route, Routes } from 'react-router-dom'
import Menu from "./components/Menu"
import { Fragment } from "react"

const App = () => {
  return (
    <Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
    </Fragment>
  )
}

export default App