import Welcome from './Welcome'
import Recap from './Recap'
import styled from 'styled-components'
import React from 'react'

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export default function BodyHeader(props) {
  //console.log(props)
  return (
    <Header>
      <Welcome name={props.name} />
      <Recap />
    </Header>
  )
}

