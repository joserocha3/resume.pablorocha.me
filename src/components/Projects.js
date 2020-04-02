import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Link from './Link'

const data = [
  {
    href: 'https://www.whiterabbitpress.com/japanesegradedreaders',
    heading: 'Japanese Graded Readers',
    description: 'React Native app powered by an admin dashboard. Uses Firebase for authentication, storage and notifications.',
    backgroundColor: '#F0F8FC',
    borderTop: '#AAB7BD',
  },
  {
    href: 'https://www.pawsomedogs.net',
    heading: 'Pawsome Dogs Training & Behavior',
    description: 'Static website designed for a well-known Chicago dog trainer. Built using Gatsby and styled with styled-components.',
    backgroundColor: '#F6F1E7',
    borderTop: '#A9A192',
  },
  {
    href: 'https://www.lospinoshardware.com',
    heading: 'Los Pinos Hardware Co.',
    description: 'Static website hosted for a growing hardware business. This is a static website with vanilla HTML and CSS.',
    backgroundColor: '#F0FCF1',
    borderTop: '#9BB39D',
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Summary = styled.div`
  line-height: 1.5;
  font-size: 1.2rem;
`

const Heading = styled.h3`
  line-height: 1.3;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
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
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-top: solid 3px ${({ borderTop }) => borderTop};
  margin-right: 2rem;
  margin-bottom: 2rem;
`

const Projects = () => (
  <Wrapper>
    <Title>Projects</Title>
    <Summary>A few noteworthy projects I have developed for clients.</Summary>
    <Cards>
      {data.map(d => (
        <Card key={d.href} href={d.href} target="_blank" backgroundColor={d.backgroundColor} borderTop={d.borderTop}>
          <Heading>{d.heading}</Heading>
          <Descripton>{d.description}</Descripton>
        </Card>
      ))}
    </Cards>
  </Wrapper>
)

export default Projects
