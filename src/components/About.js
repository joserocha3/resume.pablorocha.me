import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Summary = styled.div`
  line-height: 1.5;
  font-size: 1.2rem;
`

const Item = styled.div`
  margin-bottom: .3rem;
`

const About = () => (
  <Wrapper>
    <Title>About Me</Title>
    <Summary>
      <p>
        For over a decade I have been working for large enterprises and small businesses. Within
        my various roles I have managed developers and implemented projects on my own from conception
        to development to deployment.
      </p>
      <p>
        I am very passionate about getting the job done, and getting it done right. Software should
        always be robust, well-constructed and maintainable.
      </p>
      <p>
        I am available to help you with your next project or endevour.
        Simply reach out to me and we will discuss your requirements.
      </p>
      <Item>
        <span role="img" aria-label="contact">✏️ </span>
        Get in touch via my
        <Link to="/contact"> contact form</Link>
      </Item>
      <Item>
        <span role="img" aria-label="contact">📫 </span>
        Email at
        <Link href="mailto:hello@pablorocha.me" target="_blank"> hello@pablorocha.me</Link>
      </Item>
      <Item>
        <span role="img" aria-label="contact">📄 </span>
        Download my
        <Link href="https://pablorocha.me/pablo-rocha-resume.pdf" target="_blank"> resume</Link>
      </Item>
    </Summary>
  </Wrapper>
)

export default About
