import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.div`
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  width: 258px;
  height: 124px;
  display: flex;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    margin-left: 32px;
  }
  div {
    margin-left: 24px;
  }
  #data {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
  }
  #category {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }
`

function NutritionCard({ icon, data, category, unit }) {
  return (
    <Card>
      <img src={icon} alt="" />
      <div>
        <p id="data">
          {data}
          {unit}
        </p>
        <p id="category">{category}</p>
      </div>
    </Card>
  )
}

NutritionCard.propTypes = {
  icon: PropTypes.string,
  data: PropTypes.number,
  category: PropTypes.string,
  unit: PropTypes.string,
}

export default NutritionCard
