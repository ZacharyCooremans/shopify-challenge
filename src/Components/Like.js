import {useState} from 'react'
import { GiThumbUp, GiThumbDown } from "react-icons/gi";


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
            <div className='Like'>
                <GiThumbDown className='icon' />
                <button className='button-like hover' onClick={disLike}>Unlike: {Likes}</button>
            </div>
        )
    } else{
        return(
            <div className='Dislike'>
                <GiThumbUp className='icon'/>
                <button className='button-dislike hover' onClick={addLike}>Like: {Likes}</button>
            </div>
        )
    }
}

export default Like

