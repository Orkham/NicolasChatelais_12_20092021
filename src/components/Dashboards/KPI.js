import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts'
import { getTodayScore } from '../../service/api'

const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#20253A' }}>{value}</span>
}

export default class ScorePieChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [], number: 0, angle: 0, id: this.props.id }
  }
  
  async componentDidMount() {
    this.setState({ data: await getTodayScore(this.state.id) })
    this.setState({ number: this.state.data[0].number })
    this.setState({ angle: 90 + (this.state.number / 100) * 360 })
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart
          style={{
            background: '#FBFBFB',
            borderRadius: '5px',
          }}
        >
          <Legend
            align={'left'}
            verticalAlign={'top'}
            wrapperStyle={{
              top: '24px',
              left: '30px',
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '15px',
            }}
            formatter={renderColorfulLegendText}
            iconSize={0}
          />
          <Pie
            data={this.state.data}
            isAnimationActive={false}
            legendType="none"
            dataKey="number"
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={70}
            fill="#fff"
          />
          <Pie
            data={this.state.data}
            isAnimationActive={false}
            dataKey="number"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            fill="#FF0000"
            startAngle={90}
            endAngle={this.state.angle}
            cornerRadius={5}
          />
          <text
            x={110}
            y={120}
            fontFamily={'Roboto'}
            fontWeight={700}
            fontSize={'26px'}
          >
            {this.state.number}%
          </text>
          <text
            x={100}
            y={150}
            fontFamily={'Roboto'}
            fontWeight={500}
            fontSize={'16px'}
            opacity="0.6"
          >
            de votre
          </text>
          <text
            x={100}
            y={180}
            fontFamily={'Roboto'}
            fontWeight={500}
            fontSize={'16px'}
            opacity="0.6"
          >
            objectif
          </text>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
