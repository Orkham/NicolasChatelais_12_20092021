import React from 'react'
import styled from 'styled-components'
import { getFirstName } from '../service/api'

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

export default class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }
  async componentDidMount() {
    this.setState({ name: await getFirstName(12) })
  }
  render() {
    return (
      <Title>
        Bonjour <span id="name">{this.state.name}</span>
      </Title>
    )
  }
}
