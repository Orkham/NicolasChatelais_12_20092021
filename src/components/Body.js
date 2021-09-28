import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'
import Dashboard from './Dashboard'
import { GetId } from '../service/api'

const StyledBody = styled.section`
  display: flex;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Body(props) {
  //console.log(props)
  return (
    <StyledBody>
      <SideNav />
      <Content>
        <BodyHeader id={GetId()} name={props.name} />
        <Dashboard id={GetId()} />
      </Content>
    </StyledBody>
  )
}
