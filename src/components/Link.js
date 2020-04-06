import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(GatsbyLink)`
  text-decoration: underline;
  color: #473552;
  transition: color 200ms ease-in 0s;
  &:hover {
    color: black;
  }
`

const StyledAnchor = styled.a`
  text-decoration: underline;
  color: #473552;
  transition: color 200ms ease-in 0s;
  &:hover {
    color: black;
  }
`

const Link = ({ href, children, ...others }) => (
  href
    ? <StyledAnchor href={href} {...others}>{children}</StyledAnchor>
    : <StyledLink {...others}>{children}</StyledLink>
)

export default Link
