import {useEffect, useState} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import headerImage from "../assets/images/new_destination.png"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {Destination} from "../data/destinations.ts";
import {TextInput} from "../components/Forms/TextInput.tsx";
import {RequireMessage} from "../components/Forms/RequireMessage.tsx";
import {SubmitButton} from "../components/Forms/SubmitButton.tsx";
import {useCreateDestinationMutation} from "../redux/features/api/apiSlice.ts";
import {useNavigate} from "react-router-dom";

export default function NewDestination() {
    const [isWaiting, setIsWaiting] = useState(false);
    const navigate = useNavigate()
    const [createDestination] = useCreateDestinationMutation()
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");
    const MAX_FILE_SIZE = 5000000;
    const ACCEPTED_IMAGE_TYPES = ['image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/tiff',
        'image/webp',
        'image/svg+xml',
        'image/avif',];
    const schema = z.object({
        name: z.string().min(1, {message: "Name is required"}),
        description: z.string().min(1, {message: "Description is required"}),
        distance: z.string().min(1, {message: "Distance is required"}),
        duration: z.string().min(1, {message: "Duration is required"}),
        cost: z.string().min(1, {message: "Cost is required"}),
        image: z
            .any()
            .refine((file) => {
                return file[0]?.size <= MAX_FILE_SIZE
            }, `Max image size is 5MB.`)
            .refine(
                (file) => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),
                "Only .jpg, .jpeg, .png and .webp formats are supported."
            )
    })
    const {register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm<Destination>({
        resolver: zodResolver(schema),
        mode: "all",
        // defaultValues: {
        //     name: "mike",
        //     description: "descirption",
        //     distance: "distance",
        //     duration: "duration",
        //     cost: "cost",
        // }
    })
    const submitHandler = (destination: Destination) => {
        console.log('submitHandler', destination);
        setIsWaiting(true)
        const formData = new FormData()
        for (const key in destination) {
            if (key != "image") {
                // @ts-ignore
                formData.set(key, destination[key])
            }
        }
        formData.set('image', destination.image[0])
        createDestination(formData).then((responseData) => {
            setIsWaiting(false)
            if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
                navigate("/")
            } else if (Object.prototype.hasOwnProperty.call(responseData, 'error')) {
                setIsError(true)
                // @ts-ignore
                setError(responseData.error.data.message)
                // @ts-ignore
                console.log(responseData.data.data);
            } else {
                setIsError(true)
                setError("Something wrong happened")
            }
        })
    }
    useEffect(() => {
        document.title = "New Destination"
    }, []);
    return (
        <div className={"max-w-[1786px] mx-auto w-full lg:px-16"}>
            <Header/>
            <div className={"w-full h-[200px] sm:h-[400px] relative mb-8"}>
                <div className="relative">
                    <img className="h-[200px] sm:h-[400px] bg-primary-600 w-full rounded-lg shadow-xl dark:shadow-gray-800" src={headerImage}
                         alt="image description"/>
                    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
                </div>
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold dark:text-white text-center">Create
                    New Destination</h2>
            </div>
            <div className={"md:w-3/4 lg:w-1/2 mx-auto"}>
                <form className=" mx-auto px-4" onSubmit={handleSubmit(submitHandler)}>
                    <RequireMessage/>
                    <TextInput label={"Name"} placeholder={"name"} type={"text"} errors={errors} name={"name"} required={true} register={register}/>
                    <TextInput label={"Description"} placeholder={"description"} type={"text"} errors={errors} name={"description"} required={true}
                               register={register}/>
                    <TextInput label={"Distance"} placeholder={"distance"} type={"text"} errors={errors} name={"distance"} required={true} register={register}/>
                    <TextInput label={"Duration"} placeholder={"duration"} type={"text"} errors={errors} name={"duration"} required={true} register={register}/>
                    <TextInput label={"Cost"} placeholder={"cost"} type={"text"} errors={errors} name={"cost"} required={true} register={register}/>
                    <input
                        {...register("image")}
                        accept=".jpeg, .jpg, .png, .gif, .bmp, .tiff, .webp, .svg, .avif"
                        name="image"
                        className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        type="file" id="file_input"/>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Supported Files images</p>
                    {
                        isError && (<p className={"text-red-600 text-center text-xl"}>{error}</p>)
                    }
                    <SubmitButton isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting} isWaiting={isWaiting} label={"Create"}/>
                </form>
            </div>
            <Footer/>
            <div/>
        </div>
    )
}
