const MarsCard = (props) => {
    console.log(props.mars.links[0].href)
    return(
        <div>
            <div>
                <img src={props.mars.links[0].href} alt={props.mars.links.href}></img>
            </div>
        </div>
    )
}

export default MarsCard
