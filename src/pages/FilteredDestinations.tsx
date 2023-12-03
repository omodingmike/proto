import {useEffect} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import headerImage from "../assets/images/new_destination.webp"
import {useFilteredDestinationsQuery} from "../redux/features/api/apiSlice.ts";
import {Link, useParams} from "react-router-dom";
import {AiOutlineApartment} from "react-icons/ai";

export default function FilteredDestinations() {
    const {name} = useParams()
    const {data: categoryDestinations, isSuccess}  = useFilteredDestinationsQuery(name)

    useEffect(() => {
        document.title = "Filtered destination"
    }, []);
    return (
        <div className={"max-w-[1786px] mx-auto w-full sm:px-16"}>
            <Header/>
            <div className={"w-full h-[200px] sm:h-[400px] relative mb-8"}>
                <div className="relative">
                    <img className="h-[200px] sm:h-[400px] bg-primary-600 w-full rounded-lg shadow-xl dark:shadow-gray-800" src={headerImage}
                         alt="image description"/>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                </div>
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold dark:text-white text-center">Filtered destinations</h2>
            </div>
            {
                isSuccess && categoryDestinations.data.length < 1 && (
                    <>
                    <h2 className="text-red-600 text-4xl mt-16 font-bold dark:text-white text-center">No results found.</h2>
                        <Link className={"text-center block mt-16 text-2xl text-green-400 hover:underline"} to={"/"}>Search again</Link>
                    </>

                )
            }
            <div className="grid grid-cols-1 gap-x-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-16">
                {
                    isSuccess && categoryDestinations.data.map((destination, index) => (
                        <div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className={"h-64 flex justify-center items-center"}>
                                <img className="rounded-t-lg object-cover" src={destination.image} alt=""/>
                            </div>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{destination.name}</h5>
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
            <Footer/>
            <div/>
        </div>
    )
}
