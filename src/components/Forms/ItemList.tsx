import {CheckBox} from "./CheckBox.tsx";


export const ItemList = ({errors, items, register, name}: any) => {
    return (
        <ul className={`flex max-sm:flex-wrap justify-center items-center w-full text-sm font-medium text-gray-900 bg-white border  rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white ${errors[name] ? 'border-red-700' : 'border-gray-200'}`}>
            {
                items.map((item: any, index: number) => (
                    <li key={index} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 ms-5">
                        <CheckBox label={item.name} name={name} register={register} value={item.id}/>
                        {/*<CheckBox label={item.name} name={name} {...register(name[index])} value={item.id}/>*/}
                    </li>
                ))
            }
        </ul>
    )
}
