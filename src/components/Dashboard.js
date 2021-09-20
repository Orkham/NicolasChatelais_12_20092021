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
        <NutritionCard icon={img1} />
        <NutritionCard icon={img2} />
        <NutritionCard icon={img3} />
        <NutritionCard icon={img4} />
      </StyledNutritionBoard>
    </StyledContent>
  )
}
