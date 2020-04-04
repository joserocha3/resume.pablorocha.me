import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Center from '../components/Center'
import Link from '../components/Link'

const Wrapper = styled(Center)`
  padding: 0 1rem 2rem;
  text-align: left;

  @media (min-width: 800px) {
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  margin: 0 0 3rem 0;


  @media (min-width: 800px) {
    text-align: center;
    align-items: center;
    margin: 0 auto 3rem auto;
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
  margin-bottom: 4rem;
`

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  -webkit-appearance: none;
  margin: 0px 0px 2rem;
  border-width: 0px 0px 1px;
  border-image: initial;
  padding: 0.5rem 0px;
  background: transparent;
  border-bottom: 1px solid rgb(221, 229, 232);
  outline: 0px;
`
const TextArea = styled.textarea`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  -webkit-appearance: none;
  margin: 0px 0px 2rem;
  border-width: 0px 0px 1px;
  border-image: initial;
  padding: 0.5rem 0px;
  background: transparent;
  border-bottom: 1px solid rgb(221, 229, 232);
  outline: 0px;
`
const Submit = styled.button`
  color: white;
  width: 200px;
  margin-top: 1rem;
  position: relative;
  text-transform: uppercase;
  font-size: 1rem;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
  padding: 1rem 1.25rem;
  border-radius: 30px;
  border-width: 0px;
  background: #AFAEE7;
`

const Email = styled.p`
  font-size: 1.2rem;
`

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Contact Pablo to work on your upcoming project or chat about your favorite tech stack."
      keywords={[
        'Contact', 'Hire', 'Technology', 'Contractor',
        'Software Development', 'Web Development', 'JavaScript', 'React', 'Programming',
        'Coding', 'HTML', 'CSS', 'GraphQL', 'Software Engineering',
      ]}
    />
    <Wrapper>
      <Name>{'Let\'s Collaborate'}</Name>
      <Description>I am available for contract work or to simply talk tech</Description>
      <Form action="https://formspree.io/hello@pablorocha.me" method="POST">
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <input type="hidden" name="_subject" value="New submission from pablorocha.me" />

        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email Address" required />
        <TextArea type="text" name="text" placeholder="Tell me how I can help" rows="5" required />

        <Submit type="submit">Send</Submit>
      </Form>

      <Email>
        or email me at
        {' '}
        <Link href="mailto:hello@pablorocha.me">hello@pablorocha.me</Link>
      </Email>
    </Wrapper>
  </Layout>
)

export default Contact
