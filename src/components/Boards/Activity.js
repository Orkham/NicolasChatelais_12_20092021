import styled from 'styled-components'
//import img from '../../assets/poids.png'
import Example from '../Dashboards/Activity'

const TableWrapper = styled.div`
    height: 320px;
    width: 835px;
    background:#FBFBFB;
    border-radius: 5px;
`

export default function Activity() {
  return (
    <TableWrapper>
       <Example  />
    </TableWrapper>
  )
}
