import axios from 'axios'
import React, { useState, useEffect } from 'react'
import MarsCard from './MarsCard'

function Mars() {
    const [marsData, setMarsData] = useState([])

    useEffect(() => {
        axios
        .get('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
        .then((res) => {
            console.log(res.data.collection.items)
            setMarsData(res.data.collection.items)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    return (
        <>
            <div>
                {marsData.map((mars) => {
                    return(
                        <div>
                            <MarsCard key={mars.id} mars={mars}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Mars
