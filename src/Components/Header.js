import {useHistory} from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    
    return(
        <div>
            <h1 onClick={() => history.push('/')}>Picture of the day</h1>
            <h1 onClick={() => history.push('/Mars')}>Rover</h1>
        </div>
    )
}

export default Header
