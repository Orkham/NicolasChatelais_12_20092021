import styled from 'styled-components'
import { GetId } from '../../service/api'
import SessionsChart from '../Dashboards/Sessions'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function Sessions() {
  return (
    <StyledTable>
      <SessionsChart id={GetId()} />
    </StyledTable>
  )
}
