import {useEffect} from "react";
import Header from "../components/Header.tsx";
import ExploreNow from "../components/ExploreNow.tsx";
import MyCarousel from "../components/Carousel.tsx";
import Services from "../components/Services.tsx";
import RecommendedDestinations from "../components/recommendedDestinations.tsx";
import Blogs from "../components/Blogs.tsx";
import Clients from "../components/Clients.tsx";

export default function Home() {
    useEffect(() => {
        document.title = "Proto"
    }, []);
    return (
        <div className={"max-w-[1786px] mx-auto w-full px-16"}>
            <Header/>
            <MyCarousel/>
            <ExploreNow/>
            <Services/>
            <RecommendedDestinations/>
            <Blogs/>
            <Clients/>
        </div>
    )
}
