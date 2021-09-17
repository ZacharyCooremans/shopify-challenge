import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MarsCard from './MarsCard'
import styled from 'styled-components'

function Mars() {
    const [marsData, setMarsData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios
        .get('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
        .then((res) => {
            setMarsData(res.data.collection.items)
            setLoading(true)

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    if (loading === false){
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div>
                {marsData.map((mars) => {
                    return(
                        <Contain>
                            <MarsCard key={mars.id} mars={mars}/>
                        </Contain>
                    )
                })}
            </div>
        </>
    )
}

export default Mars

const Contain = styled.div`
    border: 1px solid darkgrey;
    background-color: grey;
`
