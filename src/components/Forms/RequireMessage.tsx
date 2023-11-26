import {RedStar} from "./RedStar.tsx";

export const RequireMessage = () => {
    return (
        <div className={"py-4"}>
            <p className="font-semibold text-gray-900 dark:text-white italic">
                Fields marked with <RedStar/> are required</p>
        </div>
    )
}
