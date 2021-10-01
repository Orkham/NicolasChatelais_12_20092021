import styled from 'styled-components'
import Activity from './Boards/Activity'
import Sessions from './Boards/Sessions'
import Radar from './Boards/Radar'
import KPI from './Boards/KPI'
import NutritionCard from './NutritionCard'
import img1 from '../assets/nutritionIcons/calories-icon.png'
import img2 from '../assets/nutritionIcons/protein-icon.png'
import img3 from '../assets/nutritionIcons/carbs-icon.png'
import img4 from '../assets/nutritionIcons/fat-icon.png'
import React from 'react'
import PropTypes from 'prop-types'

const StyledContent = styled.div`
  display: flex;
  margin-top: 77px;
  justify-content: space-between;
`

const StyledDashboard = styled.section`
  margin-left: 107px;
  width: 835px;
`
const StyledLittleBoard = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledNutritionBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 258px;

  margin-right: 90px;
  justify-content: space-between;
`

export default function Dashboard(props) {
  return (
    <StyledContent>
      <StyledDashboard>
        <Activity data={props.userActivity} />
        <StyledLittleBoard>
          <Sessions data={props.averageSessions} />
          <Radar data={props.performance} />
          <KPI data={props.todayScore} />
        </StyledLittleBoard>
      </StyledDashboard>
      <StyledNutritionBoard>
        <NutritionCard
          icon={img1}
          data={props.keyData.calorieCount}
          unit="kCal"
          category="Calories"
        />
        <NutritionCard
          icon={img2}
          data={props.keyData.proteinCount}
          unit="g"
          category="Proteines"
        />
        <NutritionCard
          icon={img3}
          data={props.keyData.carbohydrateCount}
          unit="g"
          category="Glucides"
        />
        <NutritionCard
          icon={img4}
          data={props.keyData.lipidCount}
          unit="g"
          category="Lipides"
        />
      </StyledNutritionBoard>
    </StyledContent>
  )
}

Dashboard.propTypes = {
  userData: PropTypes.object,
  keyData: PropTypes.object,
  userActivity: PropTypes.array,
  averageSessions: PropTypes.array,
  performance: PropTypes.array,
  todayScore: PropTypes.array,
}