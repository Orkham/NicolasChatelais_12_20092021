import styled from 'styled-components'
import HealthyRadar from '../Dashboards/Radar'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function Radar(props) {
  return (
    <StyledTable>
      <HealthyRadar data={props.data} />
    </StyledTable>
  )
}
