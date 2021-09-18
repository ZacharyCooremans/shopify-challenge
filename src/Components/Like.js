import {useState} from 'react'
import { GiThumbUp, GiThumbDown } from "react-icons/gi";


function Like(props) {
    const {like} = props

    const [toggle, setToggle] = useState(false)
    const [Likes, setLikes] = useState(635)
    
    const addLike = () => {
        setToggle(!toggle)
        localStorage.setItem(like, true)
        setLikes(Likes + 1)
    }
    
    const disLike = () => {
        setToggle(!toggle)
        localStorage.setItem(like, false)
        setLikes(Likes - 1)
    } 

    const newLiked = localStorage.getItem(like)

    if(newLiked === 'true'){
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

