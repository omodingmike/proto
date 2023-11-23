import england from '../assets/images/england.avif'

export default function Blogs() {
    return (
        <div>
            <h2 className="text-4xl font-bold dark:text-white mt-36 text-center">Blogs</h2>
            <div className={"grid grid-cols-2 gap-8"}>
                <div className={"w-fit h-[600px]"}>
                    <img className="h-auto opacity-60 bg-primary-600 w-full max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 mt-16" src={england} alt="image description"/>
                    <h2 className="absolute text-4xl font-bold dark:text-white text-center">The Ultimate Guide to Climbing Mountain Kilimanjaro</h2>
                </div>
                <div className={"w-fit"}>
                    <div className={""}>
                        <img className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 mt-16" src={england} alt="image description"/>
                        <h2 className="text-4xl font-bold dark:text-white text-center">The Ultimate Guide to Climbing Mountain Kilimanjaro</h2>
                    </div>
                    <div className={""}>
                        <img className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 mt-16" src={england} alt="image description"/>
                        <h2 className="text-4xl font-bold dark:text-white text-center">The Ultimate Guide to Climbing Mountain
                            Kilimanjaro</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
