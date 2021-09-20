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
  height: 100vh;
  margin-right: 90px;
  justify-content: space-between;
`

export default function Dashboard() {
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
          data="1,930"
          unit="kCal"
          category="Calories"
        />
        <NutritionCard icon={img2} data="155" unit="g" category="Proteines" />
        <NutritionCard icon={img3} data="290" unit="g" category="Glucides" />
        <NutritionCard icon={img4} data="50" unit="g" category="Lipides" />
      </StyledNutritionBoard>
    </StyledContent>
  )
}
