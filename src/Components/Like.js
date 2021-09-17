import {useState} from 'react'

function Like() {
    const [toggle, setToggle] = useState(false)
    const [Likes, setLikes] = useState(635)
    
    const addLike = () => {
        setToggle(!toggle)
        localStorage.setItem('toggled', true)
        setLikes(Likes + 1)
    }
    
    const disLike = () => {
        setToggle(!toggle)
        localStorage.setItem('toggled', false)
        setLikes(Likes - 1)
    } 

    const LikedStorage = localStorage.getItem('toggled')

    if(LikedStorage === 'true'){
        return(
            <button onClick={disLike}>Unlike: {Likes}</button>
        )
    } else{
        return(
            <button onClick={addLike}>Like {Likes}</button>
        )
    }
}

export default Like

