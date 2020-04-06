import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Subtitle from './Subtitle'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Badge = styled.div`
  padding: 1rem;
  background-color: #BFE6FE;
  border-radius: 50px;
  margin-right: 1rem;
  margin-bottom: 1rem;
`

const Skills = () => (
  <Wrapper>
    <Title>Skills</Title>
    <Subtitle>Programming</Subtitle>
    <Badges>
      <Badge>JavaScript</Badge>
      <Badge>React</Badge>
      <Badge>React Native</Badge>
      <Badge>Flutter</Badge>
      <Badge>Next.js</Badge>
      <Badge>Vue.js</Badge>
      <Badge>Firebase</Badge>
      <Badge>Node.js</Badge>
      <Badge>Heroku</Badge>
      <Badge>Hasura</Badge>
      <Badge>PostgreSQL</Badge>
      <Badge>MongoDB</Badge>
      <Badge>GraphQL</Badge>
      <Badge>Git</Badge>
      <Badge>style-components</Badge>
      <Badge>HTML and CSS</Badge>
      <Badge>Netlify</Badge>
      <Badge>D3.js</Badge>
    </Badges>

    <Subtitle>SAP</Subtitle>
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
