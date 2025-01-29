import { Fragment } from "react"
import Nav from "./Nav"

const Menu = () =>{
    return(
        <Fragment>
             <Nav home={false} menu={true} sign={false} cart={false} />
        </Fragment>
    )
}

export default Menu