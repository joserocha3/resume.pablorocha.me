import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Ventures from '../components/Ventures'
import Projects from '../components/Projects'
import Center from '../components/Center'

const Main = styled.main`
  display: block;
  background: #fff;
  height: 100%;
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;
`

const Index = () => (
  <Layout>
    <SEO
      title="Home"
      description="Pablo Rocha is a developer & tech enthusiast."
      keywords={['developer', 'technology', 'web', 'mobile', 'software']}
    />
    <Main>
      <Center>
        <Hero />
        <Ventures />
        <Projects />
      </Center>
    </Main>
  </Layout>
)

export default Index
