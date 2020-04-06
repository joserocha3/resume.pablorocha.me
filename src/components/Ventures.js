import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
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
  flex-wrap: wrap;
  flex-direction: row;
`

const Card = styled(Link)`
  width: 300px;
  height: 200px;
  padding: 10px;
  border-radius: 3px;
  text-transform: none;
  color: black;
  background-color: ${({ purple }) => (purple ? '#AFAEE7' : '#F1A7A7')};
  border-top: solid 3px ${({ purple }) => (purple ? '#7372A8' : '#B96F6F')};
  margin-right: 2rem;
  margin-bottom: 2rem;
`

const Ventures = () => (
  <Wrapper>
    <Title>Ventures</Title>
    <Summary>I am actively involved in managing, developing and making big decisions in a couple of tech startups.</Summary>
    <Cards>
      <Card href="https://www.nomoreanalog.com/" target="_blank" rel="noreferrer" purple>
        <Heading>NoMoreAnalog</Heading>
        <Descripton>Mobile and web application development. Making cool apps and keeping clients happy.</Descripton>
      </Card>
      <Card href="https://www.dotdotdata.com/" target="_blank" rel="noreferrer">
        <Heading>Dot Dot Data</Heading>
        <Descripton>Proximity technology sevices via web and mobile applications.</Descripton>
      </Card>
    </Cards>
  </Wrapper>
)

export default Ventures
