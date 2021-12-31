import axios from "axios";


export async function getTracks() {
    try {
        const url = "https://api.deezer.com/chart";
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
        }
        
        const tracks = (await axios.get(url, { headers })).data;
        console.log(tracks)
        return tracks;
    } catch (err) {
        console.error(err);
    }
}