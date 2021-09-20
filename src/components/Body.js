import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'
import Dashboard from './Dashboard'

const StyledBody = styled.div`
  display: flex;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Body() {
  return (
    <StyledBody>
      <SideNav />
      <Content>
        <BodyHeader />
        <Dashboard />
      </Content>
    </StyledBody>
  )
}
