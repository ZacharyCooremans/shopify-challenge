import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const history = useHistory()
    
    return(
        <Container>
            <Left>
                <h1>Zachary Cooremans Nasa project</h1>
            </Left>
            <Right>
                <h1 onClick={() => history.push('/')}>Picture of the day</h1>
                <h1 onClick={() => history.push('/Mars')}>50th Anniversary</h1>
            </Right>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    background-color: honeydew;
`
const Left = styled.div`
    width: 25%
`
const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    margin-left: 25%;
`
