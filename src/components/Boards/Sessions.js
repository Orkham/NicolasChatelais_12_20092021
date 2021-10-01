import styled from 'styled-components'
import SessionsChart from '../Dashboards/Sessions'
import PropTypes from 'prop-types'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

export default function Sessions(props) {
  return (
    <StyledTable>
      <SessionsChart data={props.data} />
    </StyledTable>
  )
}

Sessions.propTypes = {
  data: PropTypes.array,
}