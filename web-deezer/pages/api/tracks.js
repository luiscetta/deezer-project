import axios from "axios";

const url = "https://api.deezer.com/artist/27/top";

function getTracks() {
    axios.get(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.log(error))
}

getTracks();