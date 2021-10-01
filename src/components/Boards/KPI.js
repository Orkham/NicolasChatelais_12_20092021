import styled from 'styled-components'
import ScorePieChart from '../Dashboards/KPI'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function KPI(props) {
  return (
    <StyledTable>
      <ScorePieChart data={props.data} />
    </StyledTable>
  )
}
