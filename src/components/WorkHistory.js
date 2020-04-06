import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Subtitle from './Subtitle'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`

const Section = styled.div`
  line-height: 1.5; 
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 3px;
  background-color: #E8E8E8;
  border-top: solid 3px #BCBCBC;
`

const Name = styled.h4`
  font-weight: bold;
  color: #3e3e3e;
  margin: 0;
`

const Description = styled.div`
  margin-bottom: 1.5rem;
`

const WorkHistory = () => (
  <Wrapper>
    <Title>Work History</Title>
    <Subtitle>NoMoreAnalog</Subtitle>
    <Section>
      <Name>Owner / Developer</Name>
      <Description>2015 - present</Description>
      <div>- Lead programmer for multiple web-based applications built React / Vue.js and MobX / Redux state management</div>
      <div>- Publish applications using a Node.js and GraphQL backend with React and Redux on the frontend</div>
      <div>- Document React component architecture for use by self and other team members</div>
      <div>- Deploy Meteor applications to Galaxy and Heroku hosting services</div>
      <div>- Created Flutter / React Native mobile applications and publishe to the Google Play Store and Apple App Store</div>
    </Section>
    <Subtitle>Tyson Foods, Inc.</Subtitle>
    <Section>
      <Name>Lead Developer</Name>
      <Description>April 2008 - May 2020</Description>
      <div>- Developed and maintained custom applications in the SAP environment using ABAP programming</div>
      <div>
        - Key development role in designing, coding, and implementing a custom enterprise-wide
        inventory management system encompassing shipping, receiving, inventory counting, and material production
      </div>
      <div>- Developed a user-friendly, fisher-price simple approach to UI</div>
      <div>- Implemented and deployed various interfaces to communicate with external warehousing systems</div>
      <div>- Created and enforced coding standards used by team of dozens of developers</div>
    </Section>
  </Wrapper>
)

export default WorkHistory
