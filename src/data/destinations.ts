import singapore from '../assets/images/singapore.webp'
import thailand from '../assets/images/thailand.webp'
import paris from '../assets/images/paris.webp'
import newZealand from '../assets/images/new_zealand.webp'
import bora from '../assets/images/bora_bora.webp'
import england from '../assets/images/england.webp'

export type Destination = {
    id?: number
    name: string,
    description: string,
    image: any,
    distance: string,
    duration: string,
    cost: string
}

export type DestinationResponse = {
    status: number
    message: string
    data: Destination[]
}
export type SingleDestinationResponse = {
    status: number
    message: string
    data: Destination
}

// export type DestinationResponse = {
//     status: number
//     message: string
//     data: {
//         id: number,
//         name: string,
//         destinations: Destination[]
//     }[]
// }
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
