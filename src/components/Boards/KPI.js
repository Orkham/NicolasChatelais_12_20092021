import styled from 'styled-components'
import ScorePieChart from '../Dashboards/KPI'
import { GetId } from '../../service/api'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function KPI() {
  return (
    <StyledTable>
      <ScorePieChart id={GetId()} />
    </StyledTable>
  )
}
