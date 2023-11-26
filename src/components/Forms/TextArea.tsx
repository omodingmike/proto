import {ValidationErrorMessage} from "../error/ValidationErrorMessage.tsx";
import {errorClasses, normalClasses} from "./Form.tsx";
import {forwardRef} from "react";
import {RedStar} from "./RedStar.tsx";

// type TextInputProps<T> = {
//     label: string;
//     name: Path<T>; // Make sure "name" matches a key in your generic type
//     register: UseFormRegister<T>;
//     errors: FieldErrors<T>;
//     inputType: string,
//     placeholder?: string;
// }
export const TextArea = forwardRef(({label, name, errors, placeholder, register, rows}: any, ref: any) => {
    return (
        <div className={"mb-6"}>
            <label htmlFor={name}
                   className={`block mb-2 text-sm font-medium ${errors[name] ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'} `}>{label}<RedStar/></label>
            <textarea id="body" rows={rows}
                      ref={ref}
                      className={errors[name] ? errorClasses : normalClasses}
                      {...register(name)}
                      placeholder={placeholder}></textarea>
            {errors[name] && <ValidationErrorMessage message={errors[name]?.message}/>}
        </div>
    )
})
