import {FaFacebook, FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {navigation} from "../data/navigation.ts";

export default function Footer() {
    return (
        <div className={""}>
            <footer className="bg-footer-bg justify-between rounded-lg mt-36 mb-24 shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
                <p className="mb-4 text-xl text-center text-gray-500 dark:text-gray-400 sm:mb-0 pt-2">
                    Copyright © 2021 Proto Web Site Test. All rights reserved
                </p>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto " id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {
                            navigation.map((menuItem, index) => (
                                    <li key={index}>
                                        <a href="#"
                                           className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                           aria-current="page">{menuItem.label}</a>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center space-x-1">
                    <a href="#" data-tooltip-target="tooltip-twitter" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <FaFacebook size={40}/>
                        <span className="sr-only">Twitter</span>
                    </a>
                    <div id="tooltip-twitter" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Follow us on Facebook
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <a href="#" data-tooltip-target="tooltip-github" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <FaLinkedin size={40}/>
                        <span className="sr-only">Linked In</span>
                    </a>
                    <div id="tooltip-github" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Star us on LinkedIn
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <a href="#" data-tooltip-target="tooltip-dribbble" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <FaInstagram size={40}/>
                        <span className="sr-only">Proto</span>
                    </a>
                    <div id="tooltip-dribbble" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                        Follow us on Dribbble
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
