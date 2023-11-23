import {BiSearch} from "react-icons/bi";

export default function ExploreNow() {
    return (
        <div className={"rounded-lg border border-gray-500 w-3/4 mx-auto mt-12"}>
            <div className="grid grid-cols-4 p-3 divide-x-2 divide-gray-500">
            {/*<div className="flex p-3 divide-x-2 divide-gray-500 ">*/}
                <div className={"w-fit"}>
                    <p className={"text-start ps-2  w-fit"}>
                        Where You Want to go
                    </p>
                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <BiSearch/>
                        </div>
                        <input type="text"
                               className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block  ps-10 p-2.5 me-5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                               placeholder="Search your Location"/>
                    </div>
                </div>
                <div className={""}>
                    <p className={"text-start ps-5  w-fit"}>
                        Check-in
                    </p>
                    <div className="">
                        <input type="text"
                               className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block ms-5  ps-0 p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                               placeholder="Add Date"/>
                    </div>
                </div>
                <div className={"text-start ps-5  w-full flex col-span-2"}>
                    <div className="">
                        <p className={"text-start ps-5  w-fit"}>
                            Check-out
                        </p>
                        <div className="grid grid-cols-2">
                            <input type="text"
                                   className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block  ps-0 ms-5 p-2.5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                   placeholder="Add Date"/>
                        </div>
                    </div>
                    <button type="button"
                            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">EXPLORE
                        NOW
                    </button>
                </div>

                <div className="divide-gray-500 divide-solid">
                </div>
            </div>
        </div>
    )
}
