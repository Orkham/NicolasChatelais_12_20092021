import React from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'
import Dashboard from './Dashboard'
import PropTypes from 'prop-types'
import ErrorPage from '../pages/ErrorPage'

const StyledBody = styled.section`
  display: flex;
`

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default function Main(props) {
  if (props.isLoading) {
    return <h1>Patientez</h1>
  }
  try {
    return (
      <StyledBody>
        <SideNav />
        <Content>
          <BodyHeader name={props.userData.userInfos.firstName} />
          <Dashboard
            keyData={props.keyData}
            userActivity={props.userActivity}
            averageSessions={props.averageSessions}
            performance={props.performance}
            todayScore={props.todayScore}
          />
        </Content>
      </StyledBody>
    )
  } catch {
    return <ErrorPage />
  }
}

Main.propTypes = {
  name: PropTypes.object,
  keyData: PropTypes.object,
  userActivity: PropTypes.array,
  averageSessions: PropTypes.array,
  performance: PropTypes.array,
  todayScore: PropTypes.array,
} 
