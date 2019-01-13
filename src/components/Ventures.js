import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Title = styled.h2`
  font-weight: 800;
  margin-top: 0;

  @media (min-width: 800px) {
    font-size: 2.75rem;
  }

  @media (min-width: 500px) {
    font-size: 2.25rem;
  }
`

const Summary = styled.div`
  line-height: 1.5;
  font-size: 1.2rem;
`

const Heading = styled.h3`
  line-height: 1.3;
  font-size: 1.5rem;
  font-weight: 700;
`

const Descripton = styled.div`
  line-height: 1.5;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`

const Card = styled(Link)`
  width: 400px;
  height: 200px;
  padding: 10px;
  border-radius: 3px;
  text-transform: none;
  color: black;
  background-color: ${({ purple }) => (purple ? '#AFAEE7' : '#F1A7A7')};
  border-top: solid 3px ${({ purple }) => (purple ? '#7372A8' : '#B96F6F')};
  margin-right: 0;
  margin-bottom: 2rem;

  @media (min-width: 750px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const Ventures = () => (
  <Wrapper>
    <Title>Ventures</Title>
    <Summary>I am actively involved in managing, developing and making big decisions in a couple of tech startups.</Summary>
    <Cards>
      <Card href="https://www.nomoreanalog.com/" target="_blank" purple>
        <Heading>NoMoreAnalog</Heading>
        <Descripton>Mobile and web application development. Making cool apps and keeping clients happy.</Descripton>
      </Card>
      <Card href="https://www.dotdotdata.com/" target="_blank">
        <Heading>Dot Dot Data</Heading>
        <Descripton>Proximity technology sevices via web and mobile applications.</Descripton>
      </Card>
    </Cards>
  </Wrapper>
)

export default Ventures
