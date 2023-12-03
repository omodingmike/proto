import {AiOutlineApartment} from "react-icons/ai";
import {BiEdit, BiPlus, BiTrash} from "react-icons/bi";
import {useAppSelector} from "../redux/store.ts";
import {Link} from "react-router-dom";
import {useDeleteDestinationMutation, useGetDestinationsQuery} from "../redux/features/api/apiSlice.ts";
import {useState} from "react";
import {categories} from "../data/categories.ts";
import AlertModal from "./AlertModal.tsx";

export type DestinationCategory = {
    id?: number
    name: string
}
export type DestinationCategoryResponse = {
    status: number
    message: string
    data: DestinationCategory[]
}

export default function RecommendedDestinations() {
    const [deleteDest] = useDeleteDestinationMutation()
    const user = useAppSelector((state) => (state.user.user))
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [deleteId, setDeleteId] = useState<number | undefined>(0);
    const {data: categoryDestinations, isSuccess} = useGetDestinationsQuery(selectedCategory)
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isWaiting, setIsWaiting] = useState(false);
    const [error, setError] = useState("");
    const [isError, setIsError] = useState(false);

    const onClose = () => {
        setIsOpen(false)
    }
    const deleteDestination = () => {
        setIsOpen(false)
        console.log('delete id ', deleteId);
        deleteDest({id: deleteId}).then((responseData) => {
            setIsWaiting(false)
            if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
                console.log("ok");
            } else if (Object.prototype.hasOwnProperty.call(responseData, 'error')) {
                setIsError(true)
                console.log(error);
                console.log(isError);
                console.log(isWaiting);
                // @ts-ignore
                setError(responseData.error.data.message)
            } else {
                setIsError(true)
                setError("Something wrong happened!")
            }
        })
    }

    return (
        <div>
            <AlertModal title={"Delete Destination"} message={"Are you sure you want to delete this destination"} isOpen={isOpen} onClose={onClose}
                        onAccept={deleteDestination}/>
            <h2 className="sm:text-4xl text-2xl font-bold dark:text-white mt-10 sm:mt-36 text-center" data-aos="zoom-in">Recommended Destinations</h2>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-10 w-fit mx-auto"
                 data-aos="zoom-in">
                <ul className="flex flex-wrap -mb-px mx-auto sm:mt-10">
                    {
                        categories.map((category) => (
                            <li className="me-2" key={category.id}>
                                <button onClick={() => {
                                    // dispatch(api.util.resetApiState());
                                    setSelectedCategory(category.id)
                                }}
                                        className={`inline-block p-4 ${selectedCategory == category.id ? 'text-blue-600 active' : 'border-transparent'}  border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`}
                                        aria-current="page">{category.title}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                !isSuccess && (
                    <div className="text-center w-full h-36 my-auto flex items-center justify-center" data-aos="zoom-in">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
            <div className="grid grid-cols-1 gap-x-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-y-16">
                {
                    isSuccess && categoryDestinations.data.map((destination, index) => (
                        <div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                             data-aos="zoom-in">
                            <div className={"h-64 flex justify-center items-center"}>
                                <img loading={"lazy"} className="rounded-t-lg object-cover h-full w-full" src={destination.image} alt=""/>
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
                                {
                                    user?.role == 'admin' && (
                                        <div className={"flex mt-2"}>
                                            <Link to={"/destination"}>
                                                <div className={"bg-primary-600 rounded-full p-2 cursor-pointer"}>
                                                    <BiPlus color={"white"} size={20}/>
                                                </div>
                                            </Link>
                                            <div className={"bg-primary-600 rounded-full p-2 ms-3 cursor-pointer"}>
                                                <Link to={`update/${destination.id}`}>
                                                    <BiEdit color={"white"} size={20}/>
                                                </Link>
                                            </div>
                                            <div className={"bg-red-700 rounded-full p-2 ms-3 cursor-pointer"}>
                                                <BiTrash color={"white"} size={20} onClick={() => {
                                                    setDeleteId(destination.id)
                                                    setIsOpen(true)
                                                }}/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
