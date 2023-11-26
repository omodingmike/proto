type SectionLabelProps = {
    label: string
}
export const SectionLabel = ({label}: SectionLabelProps) => {
    return (
        // <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mt-3 mb-3">
        //     {label}
        // </h1>
        <h3 className="text-xl sm:text-2xl font-semibold dark:text-white  mt-3 mb-3">
            {label}
        </h3>
    )
}
