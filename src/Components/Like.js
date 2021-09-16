import {useState} from 'react'

function Like() {
    const LikedStorage = localStorage.getItem('toggled')
    const LikesStorage = localStorage.getItem('Likes')
    const [toggle, setToggle] = useState(LikedStorage)
    const [Likes, setLikes] = useState(LikesStorage)
    
    const addLike = () => {
        setToggle(true)
        setLikes(parseInt(LikesStorage) + 1)
    }
    
    const disLike = () => {
        setToggle(false)
        setLikes(parseInt(LikesStorage) - 1)
    } 

    localStorage.setItem('Likes', Likes)
    localStorage.setItem('toggled', toggle)

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

