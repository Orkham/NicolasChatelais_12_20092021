import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from 'recharts'
import { getAverageSessions } from '../../service/api'

const renderTooltip = (value, label) => {
  label = 'min'
  return [label, value]
}

export default class SessionsChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: '', id: this.props.id }
  }
  async componentDidMount() {
    this.setState({ data: await getAverageSessions(this.state.id) })
  }
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" back>
        <LineChart
          data={this.state.data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          style={{
            background: 'red',
            borderRadius: '5px',
          }}
        >
          <text
            x={34}
            y={39}
            fontFamily={'Roboto'}
            fontWeight={500}
            fontSize={'15px'}
            fill={'white'}
            opacity={0.5}
          >
            Durée moyenne des
          </text>
          <text
            x={34}
            y={59}
            fontFamily={'Roboto'}
            fontWeight={500}
            fontSize={'15px'}
            fill={'white'}
            opacity={0.5}
          >
            sessions
          </text>
          <XAxis
            fontFamily={'Roboto'}
            tick={{ fill: 'white', opacity: 0.5 }}
            dataKey="day"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 25,
            }}
            padding={{ left: 12, right: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            dataKey="sessionLength"
            domain={['dataMin -5', 'dataMax +5']}
            hide
          ></YAxis>

          <Tooltip
            separator=" "
            itemStyle={{
              margin: 0,
              padding: 10,
              background: '#FFF',
              color: '#000',
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '24px',
            }}
            wrapperStyle={{
              margin: 0,
              padding: 0,
            }}
            contentStyle={{
              margin: 0,
              padding: 10,
              border: 'none',
            }}
            labelStyle={{
              display: 'none',
            }}
            formatter={renderTooltip}
          />
          <Legend
            wrapperStyle={{
              display: 'none',
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
