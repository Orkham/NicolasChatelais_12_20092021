import styled from 'styled-components'
import ActivityGraph from '../Dashboards/Activity'
import { GetId } from '../../service/api'

const TableWrapper = styled.div`
  height: 320px;
  width: 835px;
  background: #fbfbfb;
  border-radius: 5px;
`

export default function Activity() {
  return (
    <TableWrapper>
      <ActivityGraph id={GetId()} />
    </TableWrapper>
  )
}
