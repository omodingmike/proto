import {useEffect} from "react";
import Header from "../components/Header.tsx";
import ExploreNow from "../components/ExploreNow.tsx";
import MyCarousel from "../components/Carousel.tsx";
import Services from "../components/Services.tsx";
import RecommendedDestinations from "../components/recommendedDestinations.tsx";
import Blogs from "../components/Blogs.tsx";
import Clients from "../components/Clients.tsx";
import Footer from "../components/Footer.tsx";
// @ts-ignore
// import aos from "aos"
// import "aos/dist/aos.css"
import  "../styles/test.css"

export default function Home() {
    useEffect(() => {
        document.title = "Proto"
        // aos.init({
        //     duration: 2000
        // })
    }, []);
    return (
        <div className={"max-w-[1786px] mx-auto w-full lg:px-16"}>
            <Header/>
            <MyCarousel/>
            <div className={"px-4 md:px-0"}>
                <ExploreNow/>
                <Services/>
                <RecommendedDestinations/>
                <Blogs/>
                <div className={"relative"}>

                </div>
                <Clients/>
            </div>
            <Footer/>
        </div>
    )
}
