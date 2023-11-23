import client from '../assets/images/client.avif'

type Client = {
    message: string,
    name: string,
    position: string,
    photo: string
}
export const clientsData: Client[] = [
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi" +
            " eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet",
        name: "Mario Rossi",
        position: "Manager",
        photo: client
    },
    {
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi" +
            " eget mauris pharetra. Amet risus nullam eget felis eget nunc lobortis. Purus in massa tempor nec. Porta nibh venenatis cras sed. Viverra ipsum nunc aliquet",
        name: "Luca Verdi",
        position: "Developer",
        photo: client
    },
]
