import {clientsData} from "../data/clients.ts";
import {BsQuote} from "react-icons/bs";

export default function Clients() {
    return (
        <div className={"mt-16"}>
            <h2 className="text-4xl font-bold dark:text-white text-center mt-18" data-aos="zoom-in">Clients</h2>
            <div className={"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-6 lg:gap-16"}>
                {
                    clientsData.map((client, index) => (
                            <div key={index}
                                 className="sm:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-12 drop-shadow-lg"
                                 data-aos="zoom-in">
                                <div className={"flex"}>
                                    <div>
                                        <BsQuote size={50} className={"text-gray-400"}/>
                                    </div>
                                    <div>
                                        <h5 className="ms-2 tracking-tight text-gray-900 dark:text-white text-start mt-3">{client.message}</h5>
                                        <div className={"flex mt-5"}>
                                            <div className={"w-16 h-16"}>
                                                <img className={"rounded-full object-cover w-full h-full"} src={client.photo} alt="client"/>
                                            </div>
                                            <div className={"ms-5 pt-2 pb-2"}>
                                                <p className="text-gray-500 dark:text-gray-400 font-bold text-start">{client.name}</p>
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
