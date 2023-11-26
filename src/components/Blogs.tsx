import england from '../assets/images/england.avif'
import newTravel from '../assets/images/new_travel.avif'
import femaleTraveller from '../assets/images/female_traveller.avif'

export default function Blogs() {
    return (
        <div className={""}>
            <h2 className="text-4xl font-bold dark:text-white mt-8 mb-8 sm:mb-16 sm:mt-36 text-center" data-aos="zoom-in">Blogs</h2>
            <div className={"sm:grid sm:grid-cols-2 sm:gap-8"}>
                <div className={"w-full h-[300px] sm:h-[600px] relative mb-8 sm:mb-0"} data-aos="fade-left">
                    <img className="object-cover h-full w-full" src={england} alt="image description"/>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <h2 className="text-white w-full px-8 sm:px-0 sm:text-4xl  text-2xl font-bold dark:text-white text-center mt-5 sm:w-3/4 mx-auto">The
                                Ultimate Guide to Climbing Mountain Kilimanjaro</h2>
                        </div>
                    </div>
                </div>

                <div className={"h-[300px] sm:h-[600px] mb-36"} >
                    <div className={"w-full h-full sm:h-[285px]  relative mb-8"} data-aos="fade-right">
                        <img className="object-cover h-full w-full rounded-lg" src={newTravel}
                             alt="image description"/>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-white w-full px-8 sm:px-0 sm:text-4xl  text-2xl font-bold dark:text-white text-center mt-5 sm:w-3/4 mx-auto">12
                                    Things I'd Tell Any New Traveller</h2>
                            </div>
                        </div>
                    </div>

                    <div className={"w-full h-full sm:h-[285px] relative"} data-aos="fade-down-left">
                        <img className="object-cover h-full sm:h-[285px] w-full rounded-lg" src={femaleTraveller}
                             alt="image description"/>
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div>
                                <h2 className="text-white w-full px-8 sm:px-0 sm:text-4xl  text-2xl font-bold dark:text-white text-center mt-5 sm:w-3/4 mx-auto">The
                                    Ultimate Packing List for Female Travelers</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
