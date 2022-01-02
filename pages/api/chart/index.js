import axios from 'axios';


const url = 'https://api.deezer.com/chart';

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const tracks = (await axios.get(url)).data;
            res.status(200).json(tracks);
        }
    } catch (err) {
        console.error("Ops! Houve um erro: " + err);
    }
}
