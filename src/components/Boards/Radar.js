import styled from 'styled-components'
import HealthyRadar from '../Dashboards/Radar'
import { GetId } from '../../service/api'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function Radar() {
  return (
    <StyledTable>
      <HealthyRadar id={GetId()} />
    </StyledTable>
  )
}
