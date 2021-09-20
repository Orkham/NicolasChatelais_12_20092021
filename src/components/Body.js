import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'

const StyledBody = styled.body`
  display: flex;
`

export default function Body() {
  return (
    <StyledBody>
      <SideNav />
      <BodyHeader />
    </StyledBody>
  )
}
