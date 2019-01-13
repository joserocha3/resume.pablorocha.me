import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Center from './Center'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 15px;
`

const Flex = styled(Center)`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  height: 50px;
  padding: 0 1rem;

  @media (min-width: 800px) {
    height: 80px;
  }
`

const Pablo = styled(Link)`
  font-weight: 800;
  color: black;
  font-size: 1.2rem;
`

const Contact = styled(Link)`
  font-size: .9rem;
`

const Header = () => (
  <Wrapper>
    <Flex>
      <Pablo to="/">Pablo Rocha</Pablo>
      <Contact to="/contact/">Contact</Contact>
    </Flex>
  </Wrapper>
)

export default Header
