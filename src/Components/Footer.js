import React from 'react'
import styled from 'styled-components'
import { GoMarkGithub } from "react-icons/go"
import { FaLinkedin} from "react-icons/fa"


function Footer() {
    return (
        <div>
            <SocialIcons href="https://github.com/ZacharyCooremans/shopify-challenge">
                <GoMarkGithub size='3rem'/>
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/zachary-cooremans-a26065208/'>
                <FaLinkedin size='3rem'/>
            </SocialIcons>
        </div>
    )
}

export default Footer

const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
`