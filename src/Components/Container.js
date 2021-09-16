import {useState, useEffect} from 'react'
import axios from 'axios'
import Like from './Like'


function Container() {
    const [nasaData, setNasaData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=xfvQms5mLeM3dN1rIaumNprPgH8ZObSOBrjTuDGP')
        .then((res) => {
            setNasaData(res.data)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(nasaData)
    if (loading === false){
        return <h1>Loading...</h1>
    } else{
        return (
            <div>
                <h1>{nasaData.title}</h1>
                <p>{nasaData.date}</p>
                <img src={nasaData.url} alt={nasaData.url}></img>
                <p>{nasaData.explanation}</p>
                <Like />
            </div>
        )
    }
}

export default Container

