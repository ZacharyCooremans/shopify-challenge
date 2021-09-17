import {useState, useEffect} from 'react'
import styled from 'styled-components'
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

    if (loading === false){
        return <h1>Loading...</h1>
    } else{
        return (
            <Contain>
                <h1>{nasaData.title}</h1>
                <p>{nasaData.date}</p>
                <Image src={nasaData.url} alt={nasaData.url}></Image>
                <Des>{nasaData.explanation}</Des>
                <Like />
            </Contain>
        )
    }
}

export default Container

const Des = styled.p`
    display: flex;
    width: 70%;
    margin-left: 15%;
`

const Image = styled.img`
    width: 50%;
    height: 50%;
`

const Contain = styled.div`
border: 1px solid grey;
    background-color: grey;
    padding-bottom: 5%;

`
