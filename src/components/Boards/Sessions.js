import styled from 'styled-components'
import img from '../../assets/sessions.png'

const StyledTable = styled.div`
  img {
    width: 258px;
    margin-top: 77px;
  }
`

export default function Sessions() {
  return (
    <StyledTable>
      <img src={img} alt="" />
    </StyledTable>
  )
}
