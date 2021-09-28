import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import { getPerformance } from '../../service/api'

export default class HealthyRadar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '', id: this.props.id }
  }
  async componentDidMount() {
    this.setState({ data: await getPerformance(this.state.id) })
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="70%"
          data={this.state.data}
          fill="#FFF"
          style={{
            background: 'black',
            borderRadius: '5px',
            fontFamily: 'Roboto',
            fontWeigth: '500',
            fontSize: '12px',
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />

          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
