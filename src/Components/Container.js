import {useState, useEffect} from 'react'
import axios from 'axios'

function Container() {
    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=xfvQms5mLeM3dN1rIaumNprPgH8ZObSOBrjTuDGP')
        .then((res) => {
            setNasaData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(nasaData)

    return (
        <div>
            <h1>TEST</h1>
        </div>
    )
}

export default Container
