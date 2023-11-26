import {Carousel} from 'flowbite-react';
import {useAllDestinationsQuery} from "../redux/features/api/apiSlice.ts";

export default function MyCarousel() {
    const {data: destinations} = useAllDestinationsQuery()
    return (
        <div className="h-56 sm:h-[500px]">
            <Carousel>
                {
                    destinations?.data.slice(0, 4).map((destination) => (
                        <div className={"w-full h-[600px] relative"} key={destination.id}>
                            <img className="object-cover h-full w-full" src={destination.image}
                                 alt="image description"/>
                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div>
                                    <h1 className=" text-white text-2xl sm:text-4xl font-bold dark:text-white text-center">TRAVEL TO EXPLORE</h1>
                                    <h2 className="text-white  sm:text-2xl dark:text-white text-center mt-5 sm:w-1/2 mx-auto">{destination.description}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
