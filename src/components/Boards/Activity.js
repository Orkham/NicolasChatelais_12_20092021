import styled from 'styled-components'
import ActivityGraph from '../Dashboards/Activity'
import PropTypes from 'prop-types'

const TableWrapper = styled.div`
  height: 320px;
  width: 835px;
  background: #fbfbfb;
  border-radius: 5px;
`

/**
 * Gestion des dimensions du tableau
 * @param {props} props du graphique
 * @returns render contenant le tableau à afficher
 */

export default function Activity(props) {
  return (
    <TableWrapper>
      <ActivityGraph userActivity={props.data} />
    </TableWrapper>
  )
}

Activity.propTypes = {
  userActivity: PropTypes.array,
}