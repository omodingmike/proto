import {clientsData} from "../data/clients.ts";
import {BsQuote} from "react-icons/bs";

export default function Clients() {
    return (
        <div>
            <h2 className="text-4xl font-bold dark:text-white mt-36 text-center">Clients</h2>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-16"}>
                {
                    clientsData.map((client, index) => (
                            <div key={index}
                                 className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12 drop-shadow-lg">
                                <div className={"flex"}>
                                    <div>
                                        <BsQuote size={50} className={"text-gray-400"}/>
                                    </div>
                                    <div>
                                        <h5 className="tracking-tight text-gray-900 dark:text-white text-start">{client.message}</h5>
                                        <div className={"flex mt-5"}>
                                            <img className={"rounded-full w-20"} src={client.photo} alt="client"/>
                                            <div className={"ms-5"}>
                                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-start">{client.name}</p>
                                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-start">{client.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}
