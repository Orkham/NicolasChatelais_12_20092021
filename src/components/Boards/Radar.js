import styled from 'styled-components'
import HealthyRadar from '../Dashboards/Radar'
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

export default function Radar(props) {
  return (
    <StyledTable>
      <HealthyRadar data={props.data} />
    </StyledTable>
  )
}
Radar.propTypes = {
  data: PropTypes.array,
}