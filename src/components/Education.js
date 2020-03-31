import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-weight: 800;
  margin: 0;  

  @media (min-width: 800px) {
    font-size: 2.75rem;
  }

  @media (min-width: 500px) {
    font-size: 2.25rem;
  }
`

const Subtitle = styled.h3`
  font-weight: 400;
  color: #696969;
  margin-bottom: 1rem;

  @media (min-width: 800px) {
    font-size: 2.25rem;
  }

  @media (min-width: 500px) {
    font-size: 1.75rem;
  }
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

const Name = styled.div`
  text-decoration: underline;
`

const Description = styled.div`
  margin-bottom: 1rem;
`

const Education = () => (
  <Wrapper>
    <Title>Education</Title>
    <Subtitle>University of Texas - Pan American</Subtitle>
    <Section>
      <Name>Bachelor of Business Administration in Computer Information Systems (CIS)</Name>
      <Description>Graduated Fall 2007 - Cumulative GPA: 3.147 / Major in CIS: 3.556</Description>
      <div>- Dean’s List First – Fall 2005, Fall 2007</div>
      <div>- Dean’s List Second – Fall 2002, Fall 2006</div>
    </Section>

    <Section>
      <Name>Association of Information Technology Professionals (AITP)</Name>
      <Description>Administrative Liaison (Fall 2006 – Spring 2007)</Description>
      <div>- Used Microsoft Access to create and maintain a database to record member participation</div>
      <div>- Directed events with over 40 participants</div>
      <div>- Hosted career fair activities for Tyson Foods, Inc.</div>
    </Section>

    <Section>
      <Name>Relevant Coursework</Name>
      <div>- Systems Analysis and Design</div>
      <div>- Management Information Systems</div>
      <div>- Database Development</div>
      <div>- Web Programming</div>
      <div>- Networking</div>
      <div>- Managerial Finance</div>
      <div>- COBOL I, II</div>
      <div>- Visual Basic I, II</div>
    </Section>
  </Wrapper>
)

export default Education
