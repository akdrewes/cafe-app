import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FooterStyle = styled.footer`
  background: #f2f5f5;
  border-top: 1px solid #53736a;
  position: relative;
`

const NavButton = styled(NavLink)`
  height: 50px;
  width: 50px;
  background: #77a6a1;
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

export default function Footer({ path, icon }) {
  return (
    <FooterStyle>
      <NavButton to={path}>
        <NavIcon src={icon} />
      </NavButton>
    </FooterStyle>
  )
}

Footer.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
}
