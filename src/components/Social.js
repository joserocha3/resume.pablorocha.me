import React from 'react'
import styled from 'styled-components'

import Link from './Link'
import Github from '../images/github.svg'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'

const StyledGithub = styled(Github)`
  margin-right: 1rem;
  color: #BBB;

  &:hover {
    color: #000;
  }
`

const StyledFacebook = styled(Facebook)`
  margin-right: 1rem;
  color: #bbb;

  &:hover {
    color: #3b5998;
  }
`

const StyledLinkedIn = styled(LinkedIn)`
  margin-right: 1rem;
  color: #bbb;

  &:hover {
    color: #0077b5;
  }
`

const Social = () => (
  <div>
    <Link href="https://github.com/joserocha3" target="_blank"><StyledGithub alt="Github link" /></Link>
    <Link href="https://www.facebook.com/jprocha101" target="_blank"><StyledFacebook alt="Facebook link" /></Link>
    <Link href="https://www.linkedin.com/in/jprocha101" target="_blank"><StyledLinkedIn alt="LinkedIn link" /></Link>
  </div>
)

export default Social
