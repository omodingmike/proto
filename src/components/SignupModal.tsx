import {TextInput} from "./Forms/TextInput.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {useCreateUserMutation} from "../redux/features/api/apiSlice.ts";
import {setUser, User} from "../redux/features/userSlice.ts";
import {SubmitButton} from "./Forms/SubmitButton.tsx";
import {useAppDispatch} from "../redux/store.ts";
const schema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    email: z.string().email(),
    password: z.string().min(1, {message: "Password is required"})
})

export default function SignupModal() {
    const dispatch = useAppDispatch()
    const [isWaiting, setIsWaiting] = useState(false);
    const [error, setError] = useState("");
    const [isError, setIsError] = useState(false);
    const [createUser] = useCreateUserMutation()


    const {register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm<User>({
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            name: "mike",
            email: "mike@gmail.com",
            password: "dsfdsfdsf"
        }
    })
    const submitHandler = (data: User) => {
        setIsWaiting(true)
        setIsError(false)
        createUser(data).then((responseData) => {
            setIsWaiting(false)
            if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
                // @ts-ignore
                dispatch(setUser(responseData.data))
                // @ts-ignore
                console.log(responseData.data.data);
            } else if (Object.prototype.hasOwnProperty.call(responseData, 'error')) {
                setIsError(true)
                // @ts-ignore
                setError(responseData.error.data.message)
            } else {
                setIsError(true)
                setError("Something wrong happened")
            }
        }).catch((error: any) => {
            console.log(error)
        })
    }
    return (
        <div id="signout-modal" aria-hidden="true"
             className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/*Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/*Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Login
                        </h3>
                        <button type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Cancel</span>
                        </button>
                    </div>
                    {/*Modal body */}
                    <form className="p-4 md:p-5" onSubmit={handleSubmit(submitHandler)}>
                        <div className="grid gap-4 mb-4 grid-cols-1">
                            <TextInput label={"Name"} placeholder={"John Doe"} type={"text"} errors={errors} name={"name"} required={false}
                                       register={register}/>
                            <TextInput label={"Email"} placeholder={"example@gmail.com"} type={"email"} errors={errors} name={"email"} required={false}
                                       register={register}/>
                            <TextInput label={"Password"} placeholder={""} type={"text"} errors={errors} name={"password"} required={false}
                                       register={register}/>
                        </div>
                        {
                            isError && (<p className={"text-red-600 text-center text-xl"}>{error}</p>)
                        }
                        <SubmitButton isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting} isWaiting={isWaiting} label={"Login"}/>
                    </form>
                    {/*Modal footer */}
                </div>
            </div>
        </div>
    )
}
