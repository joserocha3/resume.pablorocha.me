import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Subtitle = styled.h3`
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 0;
  color: #696969;

  @media (min-width: 800px) {
    font-size: 2.25rem;
  }

  @media (min-width: 500px) {
    font-size: 1.75rem;
  }
`

const Heading = styled.h3``

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Badge = styled.div`
  font-size: 1rem;
  padding: 1rem;
  background-color: #BFE6FE;
  border-radius: 50px;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

const Skills = () => (
  <Wrapper>
    <Subtitle>Skills</Subtitle>
    <Heading>Programming</Heading>
    <Badges>
      <Badge>JavaScript</Badge>
      <Badge>React</Badge>
      <Badge>React Native</Badge>
      <Badge>Firebase</Badge>
      <Badge>MongoDB</Badge>
      <Badge>GraphQL</Badge>
      <Badge>Style Components</Badge>
      <Badge>HTML and CSS</Badge>
      <Badge>Netlify</Badge>
      <Badge>Node.js</Badge>
      <Badge>D3.js</Badge>
      <Badge>Git</Badge>
    </Badges>

    <Heading>SAP</Heading>
    <Badges>
      <Badge>ABAP programming</Badge>
      <Badge>Remote function calls</Badge>
      <Badge>IDOC interfaces</Badge>
      <Badge>Material Management</Badge>
      <Badge>Plant Maintance</Badge>
    </Badges>
  </Wrapper>
)

export default Skills
