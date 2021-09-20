import styled from 'styled-components'
import img from '../../assets/KPI.png'

const StyledTable = styled.div`
  img {
    width: 258px;
    margin-top: 77px;
    height: 263px;
  }
`

export default function KPI() {
  return (
    <StyledTable>
      <img src={img} alt="" />
    </StyledTable>
  )
}
