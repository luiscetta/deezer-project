import axios from "axios";

const url = "https://api.deezer.com/chart";

export default async function getTracks() {
    try {
        const tracks = (await axios.get(url)).data;
        return tracks;
    } catch (err) {
        console.error(err);
    }
}

getTracks();