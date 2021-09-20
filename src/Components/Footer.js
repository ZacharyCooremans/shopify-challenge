import React from 'react'
import styled from 'styled-components'
import { GoMarkGithub } from "react-icons/go";

function Footer() {
    return (
        <div>
            <SocialIcons className='SocialIcon' href="https://github.com/ZacharyCooremans/shopify-challenge">
                <GoMarkGithub size='3rem'/>
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