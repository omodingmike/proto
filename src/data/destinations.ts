import singapore from '../assets/images/singapore.avif'
import thailand from '../assets/images/thailand.avif'
import paris from '../assets/images/paris.avif'
import newZealand from '../assets/images/new_zealand.avif'
import bora from '../assets/images/bora_bora.avif'
import england from '../assets/images/england.avif'

type Destination = {
    name: string,
    description: string,
    image: string,
    distance: string,
    duration: string,
    cost: string
}
export const destinations: Destination[] = [
    {
        name: "Singapore",
        description: "Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast.",
        image: singapore,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "€ 10,000"
    },
    {
        name: "Thailand",
        description: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces",
        image: thailand,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "€ 10,000"
    },
    {
        name: "Paris",
        description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and",
        image: paris,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "€ 10,000"
    }, {
        name: "New Zealand",
        description: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two",
        image: newZealand,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "₹ 38,800"
    },
    {
        name: "Bora Bora",
        description: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand",
        image: bora,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "₹ 38,800"
    },
    {
        name: "London",
        description: "London, the capital of England and the United Kingdom, is a 21st-century city with history",
        image: england,
        distance: "1000 Kms",
        duration: "Approx 2 night trip",
        cost: "₹ 38,800"
    },
]
