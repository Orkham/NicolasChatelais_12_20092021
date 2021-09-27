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
import { getKeyDatas } from '../service/api'

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

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
  }
  async componentDidMount() {
    this.setState({ data: await getKeyDatas(12) })
  }

  render() {
    return (
      <StyledContent>
        <StyledDashboard>
          <Activity />
          <StyledLittleBoard>
            <Sessions />
            <Radar />
            <KPI />
          </StyledLittleBoard>
        </StyledDashboard>
        <StyledNutritionBoard>
          <NutritionCard
            icon={img1}
            data={this.state.data.calorieCount}
            unit="kCal"
            category="Calories"
          />
          <NutritionCard
            icon={img2}
            data={this.state.data.proteinCount}
            unit="g"
            category="Proteines"
          />
          <NutritionCard
            icon={img3}
            data={this.state.data.carbohydrateCount}
            unit="g"
            category="Glucides"
          />
          <NutritionCard
            icon={img4}
            data={this.state.data.lipidCount}
            unit="g"
            category="Lipides"
          />
        </StyledNutritionBoard>
      </StyledContent>
    )
  }
}
