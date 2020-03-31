import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: rgb(131, 145, 164);
  transition: color 200ms ease-in 0s;
  &:hover {
    color: rgb(27, 33, 37);
  }
`

const StyledAnchor = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  color: rgb(131, 145, 164);
  transition: color 200ms ease-in 0s;
  &:hover {
    color: rgb(27, 33, 37);
  }
`

const Link = ({ href, children, ...others }) => (
  href
    ? <StyledAnchor href={href} {...others}>{children}</StyledAnchor>
    : <StyledLink {...others}>{children}</StyledLink>
)

export default Link
