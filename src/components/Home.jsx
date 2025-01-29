import { Fragment } from "react"
import Nav from "./Nav"
import DishSection from "./DishSection"

const Home = () => {
    return (
        <Fragment>
            <Nav home={true} menu={false} sign={false} cart={false} />
            <main className="text-white">
                <DishSection/>
                <section className="bg-[#FAF7F2] p-3 lg:p-10 text-black text-2xl font-bold flex-col lg:flex-row flex justify-center">
                    <div className="lg:border-r-2 p-8 flex justify-center text-center items-center border-gray-400 border-dashed">
                        <div>

                        </div>
                        <p>Farm to Fork</p>
                    </div>
                    <div className="lg:border-r-2 p-8 flex justify-center text-center items-center border-gray-400 border-dashed">
                        <div>

                        </div>
                        <p>300+ Outlets</p>
                    </div>
                    <div className="lg:border-r-2 p-8 flex justify-center text-center items-center border-gray-400 border-dashed">
                        <div>

                        </div>
                        <p>Doctor Certified &
                        approved Healthy Chicken</p>
                    </div>
                    <div className="p-8 flex justify-center text-center items-center">
                        <div>

                        </div>
                        <p>Best Management
                        Practices</p>
                    </div>
                </section>
                <section>

                </section>
            </main>
        </Fragment>
    )
}

export default Home