import {destinations} from "../data/destinations.ts";
import {AiOutlineApartment} from "react-icons/ai";

export default function RecommendedDestinations() {
    return (
        <div>
            <h2 className="text-4xl font-bold dark:text-white mt-36 text-center">Recommended Destinations</h2>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-10 w-fit mx-auto">
                <ul className="flex flex-wrap -mb-px mx-auto mt-10">
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                           aria-current="page">Europe</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Asia</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Africa</a>
                    </li>
                    <li className="me-2">
                        <a href="#"
                           className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">America</a>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-1 gap-x-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-16">
                {
                    destinations.map((destination, index) => (
                        <div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={destination.image} alt=""/>
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{destination.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{destination.description}</p>
                                <div className={"flex justify-between w-full items-center mt-5"}>
                                    <div className={"flex"}>
                                        <div className={"bg-primary-600 rounded-full p-2"}>
                                            <AiOutlineApartment color={"white"}/>
                                        </div>
                                        <div className={"bg-primary-600 rounded-full p-2 ms-3"}>
                                            <AiOutlineApartment color={"white"}/>
                                        </div>
                                        <div className={"bg-primary-600 rounded-full p-2 ms-3"}>
                                            <AiOutlineApartment color={"white"}/>
                                        </div>
                                    </div>
                                    <p className="font-normal text-xl text-gray-700 dark:text-gray-400">{destination.cost}</p>
                                </div>
                                <div className={"flex justify-between w-full items-center mt-5"}>
                                    <p className="font-bold text-gray-700 dark:text-gray-400">{destination.distance}</p>
                                    <p className="font-bold text-gray-700 dark:text-gray-400">{destination.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
