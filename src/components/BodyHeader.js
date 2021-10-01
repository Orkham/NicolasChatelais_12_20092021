import Welcome from './Welcome'
import Recap from './Recap'
import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export default function BodyHeader(props) {
  return (
    <Header>
      <Welcome name={props.name} />
      <Recap />
    </Header>
  )
}

BodyHeader.propTypes = {
  name: PropTypes.string,
}
