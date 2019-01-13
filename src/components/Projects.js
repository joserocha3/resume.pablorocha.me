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
  background-color: ${({ blue }) => (blue ? '#F0F8FC' : '#F6F1E7')};
  border-top: solid 3px ${({ blue }) => (blue ? '#AAB7BD' : '#A9A192')};
  margin-right: 0;
  margin-bottom: 2rem;

  @media (min-width: 750px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const Projects = () => (
  <Wrapper>
    <Title>Projects</Title>
    <Summary>A few noteworthy projects I have developed for clients.</Summary>
    <Cards>
      <Card href="https://www.whiterabbitpress.com/japanesegradedreaders/" target="_blank">
        <Heading>Japanese Graded Readers</Heading>
        <Descripton>React Native mobile application powered by back-office admin dashboard. Uses Firebase for authentication, storage and notifications.</Descripton>
      </Card>
      <Card href="https://www.pawsomedogs.net/" target="_blank" blue>
        <Heading>Pawsome Dogs</Heading>
        <Descripton>Static website designed for a well-known Chicago dog trainer. Built using Gatsby and styled with styled-components.</Descripton>
      </Card>
    </Cards>
  </Wrapper>
)

export default Projects
