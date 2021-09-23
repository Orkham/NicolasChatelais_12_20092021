import styled from 'styled-components'
import Example from '../Dashboards/Activity'

const TableWrapper = styled.div`
  height: 320px;
  width: 835px;
  background: #fbfbfb;
  border-radius: 5px;
`

export default function Activity() {
  return (
    <TableWrapper>
      <Example />
    </TableWrapper>
  )
}
