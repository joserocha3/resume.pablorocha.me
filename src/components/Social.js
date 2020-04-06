import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Github from '../images/github.svg'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'

const StyledGithub = styled(Github)`
  padding: .5rem;
  color: #BBB;

  &:hover {
    color: #000;
  }
`

const StyledFacebook = styled(Facebook)`
padding: .5rem;
  color: #bbb;

  &:hover {
    color: #3b5998;
  }
`

const StyledLinkedIn = styled(LinkedIn)`
  padding: .5rem;
  color: #bbb;

  &:hover {
    color: #0077b5;
  }
`

const Social = () => (
  <div>
    <Link href="https://github.com/joserocha3" target="_blank" rel="noreferrer" aria-label="github profile"><StyledGithub alt="github profile" size={50} /></Link>
    <Link href="https://www.facebook.com/jprocha101" target="_blank" rel="noreferrer" aria-label="facebook profile"><StyledFacebook alt="facebook profile" /></Link>
    <Link href="https://www.linkedin.com/in/jprocha101" target="_blank" rel="noreferrer" aria-label="linkedin profile"><StyledLinkedIn alt="linkedin profile" /></Link>
  </div>
)

export default Social
