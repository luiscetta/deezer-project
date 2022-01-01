const axios = require('axios');


export default async function searchFilter(req, res) {
    try {
        if (req.method === 'GET') {
            const search = (await axios.get('https://api.deezer.com/search?q=')).data;
            res.status(200).json(search);
        }
    } catch (err) {
        console.error(err);
    }
}
