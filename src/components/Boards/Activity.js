import styled from 'styled-components'
import img from '../../assets/poids.png'

const StyledTable = styled.div`
  img {
    width: 835px;
  }
`

export default function Activity() {
  return (
    <StyledTable>
      <img src={img} alt="" />
    </StyledTable>
  )
}
