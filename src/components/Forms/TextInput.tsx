import {ValidationErrorMessage} from "../error/ValidationErrorMessage.tsx";
import {errorClasses, normalClasses} from "./Form.tsx";
import {RedStar} from "./RedStar.tsx";

export const TextInput = ({label, name, errors, placeholder, register, type, required}: any) => {
    return (
        <div className={"mb-6"}>
            <label htmlFor={name}
                   className={`block mb-2 text-sm font-medium ${errors[name] ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'} `}>{label} {required &&
                <RedStar/>}</label>
            <input type={type} id={name}
                   {...register(name)}
                   className={errors[name] ? errorClasses : normalClasses}
                   placeholder={placeholder}/>
            {errors[name] && <ValidationErrorMessage message={errors[name]?.message}/>}
        </div>
    )
}
