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

const Copy = styled.div`
  display: block;
  font-size: 0.8rem;
  color: rgb(140, 149, 161);
  margin-top: 2rem;
`

const Footer = () => (
  <Wrapper>
    <Links>
      <Link to="/">{'Pablo\'s Portfolio'}</Link>
      <Link to="/contact/">Get In Touch</Link>
    </Links>
    <Social />
    <Copy>Copyright © 2019 Pablo Rocha</Copy>
  </Wrapper>
)

export default Footer
