import React from 'react'
import styled from 'styled-components'

import Social from './Social'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  text-align: left;

  @media (min-width: 800px) {
    text-align: center;
  }
`

const Name = styled.h1`
  font-weight: 800;
  margin-top: 80px;

  @media (min-width: 800px) {
    font-size: 4rem;
    margin-top: 110px;
  }

  @media (min-width: 500px) {
    font-size: 3.5rem;
    margin-bottom: .5rem;
  }
`

const Description = styled.div`
  font-size: 1.5rem;
  color: #333;
  letter-spacing: -0.04em;
  line-height: 1.3;
  margin-bottom: 1rem;
`

const IndexPage = () => (
  <Wrapper>
    <Name>Pablo Rocha</Name>
    <Description>Developer & Tech Enthusiast</Description>
    <Social />
  </Wrapper>
)

export default IndexPage
