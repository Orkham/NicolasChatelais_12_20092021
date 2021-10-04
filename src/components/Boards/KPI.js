import styled from 'styled-components'
import ScorePieChart from '../Dashboards/KPI'
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

export default function KPI(props) {
  return (
    <StyledTable>
      <ScorePieChart data={props.data} />
    </StyledTable>
  )
}

KPI.propTypes = {
  data: PropTypes.array,
}