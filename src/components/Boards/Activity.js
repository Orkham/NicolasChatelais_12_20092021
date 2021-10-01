import styled from 'styled-components'
import ActivityGraph from '../Dashboards/Activity'


const TableWrapper = styled.div`
  height: 320px;
  width: 835px;
  background: #fbfbfb;
  border-radius: 5px;
`

export default function Activity(props) {
  //console.log(props.data)
  return (
    <TableWrapper>
      <ActivityGraph userActivity={props.data} />
    </TableWrapper>
  )
}
