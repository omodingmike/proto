import {TextInput} from "./Forms/TextInput.tsx";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {useLoginMutation} from "../redux/features/api/apiSlice.ts";
import {setUser, User} from "../redux/features/userSlice.ts";
import {SubmitButton} from "./Forms/SubmitButton.tsx";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {Modal} from "flowbite-react";
import {toggleLoginModal} from "../redux/features/appSlice.ts";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {message: "Password is required"})
})

export default function LoginModal() {
    const dispatch = useAppDispatch()
    const [isWaiting, setIsWaiting] = useState(false);
    const [error, setError] = useState("");
    const [isError, setIsError] = useState(false);
    const [loginUser] = useLoginMutation()
    const modalOpen = useAppSelector((state) => (state.app.loginModalOpen))

    const {register, handleSubmit, formState: {errors, isDirty, isValid, isSubmitting}} = useForm<User>({
        resolver: zodResolver(schema),
        mode: "all",
        defaultValues: {
            email: "admin@gmail.co",
            password: "admin@gmail.com"
        }
    })

    const submitHandler = (data: User) => {
        setIsWaiting(true)
        setIsError(false)
        loginUser(data).then((responseData) => {
            setIsWaiting(false)
            if (Object.prototype.hasOwnProperty.call(responseData, 'data')) {
                // @ts-ignore
                dispatch(setUser(responseData.data.data))
                dispatch(toggleLoginModal())
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
        <>
            <Modal show={modalOpen} size="md" onClose={() => {
                dispatch(toggleLoginModal())
            }} popup>
                <Modal.Header>
                    Login
                </Modal.Header>
                <Modal.Body>
                    <form className="p-4 md:p-5" onSubmit={handleSubmit(submitHandler)}>
                        <div className="grid gap-4 mb-4 grid-cols-1">
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
                </Modal.Body>
            </Modal>
        </>
    )
}
