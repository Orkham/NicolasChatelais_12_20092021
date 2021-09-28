import Welcome from './Welcome'
import Recap from './Recap'
import styled from 'styled-components'
import React from 'react'
import { GetId } from '../service/api'

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export default function BodyHeader() {
  return (
    <Header>
      <Welcome id={GetId()} />
      <Recap />
    </Header>
  )
}

