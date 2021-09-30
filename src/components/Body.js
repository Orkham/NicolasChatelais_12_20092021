import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'
import Dashboard from './Dashboard'

const StyledBody = styled.section`
  display: flex;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Main(props) {
  console.log(props)
  if (props.isLoading) {
    return <h1>Patientez</h1>
  }
  return (
    <StyledBody>
      <SideNav />
      <Content>
        <BodyHeader name={props.userData.userInfos.firstName} />
        <Dashboard /*keyData={props.keyData}*/ />
      </Content>
    </StyledBody>
  )
}
