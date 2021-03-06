import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
  margin-left: 107px;
  margin-top: 68px;
  #name {
    color: red;
  }
`

export default function Welcome(props) {
  return (
    <Title>
      Bonjour <span id="name"> {props.name} </span>
    </Title>
  )
}

Welcome.propTypes = {
  name: PropTypes.string,
}

