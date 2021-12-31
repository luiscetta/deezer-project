const axios = require('axios');


export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const tracks = (await axios.get('https://api.deezer.com/chart')).data;
            res.status(200).json(tracks);
        }
    } catch (err) {
        console.error(err);
    }
}
