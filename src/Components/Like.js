import {useState, useEffect} from 'react'

function Like() {
    const [toggle, setToggle] = useState(false)
    const [Likes, setLikes] = useState(635)
    
    const addLike = () => {
        setToggle(!toggle)
        localStorage.setItem('toggled', toggle)
        setLikes(Likes + 1)
    }
    
    const disLike = () => {
        setToggle(!toggle)
        localStorage.setItem('toggled', toggle)
        setLikes(Likes - 1)
    } 
    useEffect(() => {
    }, [])
    const LikedStorage = localStorage.getItem('toggled')

    if(LikedStorage === 'false'){
        return(
            <button onClick={addLike}>Like {Likes}</button>
        )
    } else if(LikedStorage === 'true'){
        return(
            <button onClick={disLike}>Unlike: {Likes}</button>
        )
    } 
}

export default Like

