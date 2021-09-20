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

export default function Welcome() {
  return (
    <Title>
      Bonjour <span id="name">Thomas</span>
    </Title>
  )
}
