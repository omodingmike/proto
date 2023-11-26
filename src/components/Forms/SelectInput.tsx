export const SelectInput = ({register, name, options, optionKey, optionValue, label}: any) => {
    return (
        <div className="mt-2 mb-5">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select id="template"
                    {...register(name)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                    options.map((option: any, index: number) => (
                            <option value={option[optionValue]} key={index}>{option[optionKey]}</option>
                        )
                    )
                }
            </select>
        </div>
    )
}
