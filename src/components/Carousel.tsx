import hero_2 from '../assets/images/hero_2.avif'
import hero_3 from '../assets/images/hero_3.avif'
import hero_4 from '../assets/images/hero_4.avif'
import { Carousel } from 'flowbite-react';

export default function MyCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img src={hero_2} alt="..." />
                <img src={hero_3} alt="..." />
                <img src={hero_4} alt="..." />
            </Carousel>
        </div>
        // <div id="default-carousel" className="relative w-full" data-carousel="slide">
        //     <div className="relative h-56 overflow-hidden rounded-lg md:h-[500px]">
        //         {/*Item 1*/}
        //
        //         {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
        //         {/*    <img src={hero_1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        //         {/*         alt="..."/>*/}
        //         {/*   */}
        //         {/*</div>*/}
        //         {/*Item 2 */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src={hero_2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                  alt="..."/>
        //             {/*<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">TRAVEL TO EXPLORE</h1>*/}
        //         </div>
        //         {/*Item 3 */}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src={hero_3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                  alt="..."/>
        //         </div>
        //         {/*Item 4*/}
        //         <div className="hidden duration-700 ease-in-out" data-carousel-item>
        //             <img src={hero_4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        //                  alt="..."/>
        //         </div>
        //         {/*Item 5 */}
        //         {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
        //         {/*    <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
        //         {/*         alt="..."/>*/}
        //         {/*</div>*/}
        //     </div>
        //     {/*Slider indicators */}
        //     <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        //         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        //     </div>
        //     {/*Slider controls*/}{/**/}
        //     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        //             data-carousel-prev>
        // <span
        //     className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        //          viewBox="0 0 6 10">
        //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        //     </svg>
        //     <span className="sr-only">Previous</span>
        // </span>
        //     </button>
        //     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        //             data-carousel-next>
        // <span
        //     className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        //     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
        //          viewBox="0 0 6 10">
        //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        //     </svg>
        //     <span className="sr-only">Next</span>
        // </span>
        //     </button>
        // </div>

    )
}
