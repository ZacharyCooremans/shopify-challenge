import {useState} from 'react'

function Like() {
    const [toggle, setToggle] = useState(false)
    const [like, setLike] = useState(0)

    const addLike = () => {
        setToggle(!toggle)
        if(toggle === false){
            let newCount = like + 1
            setLike(newCount)
        }
        else{
            let newCount = like - 1
            setLike(newCount)
        }
    }

    const label = toggle ? 'Unlike' : 'Like'

    return (
        <button onClick={addLike}>{label} {like}</button>
    )
}

export default Like

