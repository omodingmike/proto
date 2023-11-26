import {BiSearch} from "react-icons/bi";
import "../styles/explore_now.css"
// import {Datepicker} from "flowbite-react";
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {Controller, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";

const schema = z.object({
    destination: z.string().min(1, {message: "Destination is required"}),
    checkInDate: z.date().refine((data) => data > new Date(), {message: "Check-in date must be in the future"}),
    checkOutDate: z.date().refine((data) => data > new Date(), {message: "Check-out date must be in the future"}),
})
type Booking = z.infer<typeof schema>
export default function ExploreNow() {
    const navigate = useNavigate()

    const {
        register, handleSubmit, control, formState: { errors}
    }
        = useForm<Booking>({
        resolver: zodResolver(schema),
        mode: "onTouched",
    })

    const submitData = (data: Booking) => {
        console.log(data)
        navigate(`/filtered/${data.destination}`)
    }
    return (
        <div className={"rounded-lg border border-gray-500  lg:w-3/4 w-full lg:mx-auto mt-12"} data-aos="zoom-in">
            <form onSubmit={handleSubmit(submitData)}>
                <div className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-3 md:divide-x-2 lg:divide-x-2 md:divide-gray-500 lg:divide-gray-500">
                    <div className={"sm:w-fit"}>
                        <p className={"text-start ps-2  w-fit"}>
                            Where You Want to go
                        </p>
                        <div className="relative mt-2">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <BiSearch/>
                            </div>
                            <input type="text"
                                   className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-white focus:border-white block  ps-10 p-2.5 me-5  dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                   {...register("destination")}
                                   placeholder="Search your Location"/>
                            {
                                errors.destination && (<p className={"text-red-600 ms-3"}>{errors.destination.message}</p>)
                            }
                        </div>
                    </div>
                    <div className={"mt-3 sm:mt-0 "}>
                        <p className={"text-start ps-2 sm:ps-5  w-fit mb-3"}>
                            Check-in
                        </p>
                        <div className="ms-2 sm:ms-5 sm:me-5">
                            <Controller
                                control={control}
                                name='checkInDate'
                                render={({field}) => (
                                    <DatePicker placeholderText='Add Date'
                                                onChange={(date: never) => field.onChange(date)}
                                                selected={field.value}
                                                inputProps={{readOnly: true}}
                                                onFocus={(e:any) => e.target.blur()}
                                                className={"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg" +
                                                    " focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700" +
                                                    " dark:border-gray-600 dark:placeholder-gray-400 w-full dark:text-white dark:focus:ring-blue-500" +
                                                    " dark:focus:border-blue-500 w-full"}
                                                timeIntervals={1}
                                                style={{width: 300}}
                                                scrollableYearDropdown={true}
                                                popperClassName={"ms-2"}
                                                showYearDropdown={true}
                                                wrapperClassName="w-full"
                                                dateFormat="MMMM d, yyyy"/>
                                )}
                            />
                            {
                                errors.checkInDate && (<p className={"text-red-600"}>{errors.checkInDate.message}</p>)
                            }
                        </div>
                    </div>
                    <div className={"text-start sm:ps-5  w-full flex justify-between flex-col md:flex-row md:col-span-2"}>
                        <div className="">
                            <p className={"text-start ps-2  sm:ps-5 mt-3 sm:mt-0 mb-3  sm:w-fit"}>
                                Check-out
                            </p>
                            {/*<div className="sm:grid sm:grid-cols-2 ms-2 w-full pe-2 md:pe-0 ">*/}
                            <div className="ms-2 w-full pe-2 md:pe-0 ">
                                <Controller
                                    control={control}
                                    name='checkOutDate'
                                    render={({field}) => (
                                        // <Datepicker/>
                                        <DatePicker placeholderText='Add Date'
                                                    onChange={(date: never) => field.onChange(date)}
                                                    selected={field.value}
                                                    inputProps={{readOnly: true}}
                                                    onFocus={(e: any) => e.target.blur()}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                                    timeIntervals={1}
                                                    style={{width: 300}}
                                                    scrollableYearDropdown={true}
                                                    popperClassName={"ms-2"}
                                                    showYearDropdown={true}
                                                    wrapperClassName="w-full"
                                                    dateFormat="MMMM d, yyyy"/>
                                    )}
                                />
                                {
                                    errors.checkOutDate && (<p className={"text-red-600"}>{errors.checkOutDate.message}</p>)
                                }
                            </div>
                        </div>

                        <div className={"mt-3 w-full justify-self-end flex items-center justify-center sm:justify-end"}>
                            <button type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full md:w-3/4 text-sm px-5 py-3 sm:py-5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">EXPLORE
                                NOW
                            </button>
                        </div>
                    </div>

                    <div className="divide-gray-500 divide-solid">
                    </div>
                </div>
            </form>
        </div>
    )
}
