import axios from 'axios';


const url = 'https://api.deezer.com/search?q=';

export default async function getDataList(req, res) {
    try {
        if (req.method === 'GET') {
            const search = (await axios.get(url)).data;
            res.status(200).json(search);
            console.log('ok');
        }
    } catch (err) {
        console.error("Ops! Houve um erro: " + err);
    }
}
