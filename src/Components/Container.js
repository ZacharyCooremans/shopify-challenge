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
            <h1>{nasaData.title}</h1>
            <img src={nasaData.url} alt={nasaData.url}></img>
            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default Container
