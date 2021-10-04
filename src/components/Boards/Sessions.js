import styled from 'styled-components'
import SessionsChart from '../Dashboards/Sessions'
import PropTypes from 'prop-types'

const StyledTable = styled.div`
  width: 258px;
  margin-top: 77px;
  height: 263px;
`

/**
 * Gestion des dimensions du tableau
 * @param {props} props du graphique
 * @returns render contenant le tableau à afficher
 */

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