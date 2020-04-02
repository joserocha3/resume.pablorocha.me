import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Social from './Social'

const Wrapper = styled.footer`
  display: block;
  text-align: center;
  background: #f8f8f8;
  padding: 3rem 2rem;
`

const Links = styled.div`
  width: 300px;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: space-between;
  font-size: .9rem;
`

const Footer = () => (
  <Wrapper>
    <Links>
      <Link to="/">{'Pablo\'s Portfolio'}</Link>
      <Link to="/contact/">Get In Touch</Link>
    </Links>
    <Social />
  </Wrapper>
)

export default Footer
