type Props = {
    message?: string
}
export const ValidationErrorMessage = ({message}: Props) => {
    return (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500 font-medium"> {message}</p>
    )
}
