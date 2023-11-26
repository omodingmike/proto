// type CheckBoxProps<TFieldValues>={
//     label:string,
//     name:string,
//     register: UseFormRegister<TFieldValues>
// }
export const CheckBox = ({label, name, register, value}: any) => {
    return (
        <div className="mt-5">
            <label className="relative inline-flex items-center mb-4 cursor-pointer me-10">
                <input type="checkbox" value={value} className="sr-only peer"  {...register(name)}/>
                <div
                    className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                ></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
            </label>
        </div>
    )
}
