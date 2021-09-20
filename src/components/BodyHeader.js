import Welcome from './Welcome'
import Recap from './Recap'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export default function BodyHeader() {
  return (
    <Header>
      <Welcome />
      <Recap />
    </Header>
  )
}
