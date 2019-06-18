import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const FooterStyle = styled.footer`
    background: #F2F5F5;
    border-top: 1px solid #53736A;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavButton = styled(NavLink)`
    margin: 0 0 35px;
    height: 50px;
    width: 50px;
    background: #77A6A1;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
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

Footer.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.elementType
}