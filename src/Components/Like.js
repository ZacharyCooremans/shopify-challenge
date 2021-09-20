import {useState} from 'react'
import { GiThumbUp } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";


function Like(props) {
    const {like} = props

    const [toggle, setToggle] = useState(false)
    const [Likes] = useState(635)
    
    const addLike = () => {
        setToggle(!toggle)
        localStorage.setItem(like, true)
        // setLikes(Likes + 1)
    }
    
    const disLike = () => {
        setToggle(!toggle)
        localStorage.setItem(like, false)
        // setLikes(Likes - 1)
    } 

    const newLiked = localStorage.getItem(like)

    if(newLiked === 'true'){
        return(
            <div className='button' onClick={disLike}>
                <p className='btnText'>Liked: {Likes + 1}</p>
                <div className='btnTwo'>
                    <GiThumbUp className='btnText2' />
                </div>
            </div>
        )
    } else{
        return(
            <div className='button' onClick={addLike}>
                <p className='btnText'>Like: {Likes}</p>
                <div className='btnTwo'>
                    <FaArrowRight className='btnText2' />
                </div>
            </div>
        )
    }
}

export default Like

