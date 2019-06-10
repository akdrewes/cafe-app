import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const FooterStyle = styled.footer`
    background: white;
    border-top: 1px solid #53736A;
    position: relative;
`

const NavButton = styled(NavLink)`
    height: 50px;
    width: 50px;
    background: #77A6A1;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: -25px;
    left: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`

export const NavIcon = styled.img`
    width: 70%;
`

export default function Footer({path, icon}) {
    return(
        <FooterStyle>
            <NavButton to={path}>
                <NavIcon src={icon}/>
            </NavButton>
        </FooterStyle>
    )
}