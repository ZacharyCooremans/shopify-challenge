import styled from 'styled-components'
import Like from './Like'

const MarsCard = (props) => {
    const id = props.mars.data[0].nasa_id
    return(
        <div>
            <div>
                <h3>{props.mars.data[0].title}</h3>
                <img src={props.mars.links[0].href} alt={props.mars.links.href}></img>
                <Des>{props.mars.data[0].description}</Des>
                <Like like={id}/>
            </div>
        </div>
    )
}

export default MarsCard

const Des = styled.p`
    display: flex;
    width: 70%;
    margin-left: 15%;
`
