import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    const history = useHistory()
    
    return(
        <Container>
            <Left>
                <h1>Zachary Cooremans Nasa project</h1>
            </Left>
            <Right>
                <div className='button' onClick={() => history.push('/')}>
                    <p className='btnText'>Picture of the day</p>
                    <div className='btnTwo'> 
                        <FaArrowRight className='btnText2' />
                    </div>
                </div>
                <div className='button' onClick={() => history.push('/Mars')}> 
                    <p className='btnText'>50th Anniversary</p>
                    <div className='btnTwo'> 
                        <FaArrowRight className='btnText2' />
                    </div>
                </div>
            </Right>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
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
