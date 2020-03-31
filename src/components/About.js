import React from 'react'
import styled from 'styled-components'

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

const About = () => (
  <Wrapper>
    <Title>About Me</Title>
    <Summary>
      For over a decade I have been working for large enterprises and small businesses. Within
      my various roles I have managed developers and implemented projects on my own from conception
      to development to deployment.
      <br />
      <br />
      I am very passionate about getting the job done, and getting it done right. Software should
      always be robust, well constructed and maintainable.
    </Summary>
  </Wrapper>
)

export default About
