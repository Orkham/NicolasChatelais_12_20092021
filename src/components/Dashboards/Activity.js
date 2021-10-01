import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'


const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#74798C', paddingLeft: '10px' }}>{value}</span>
}

const renderTooltip = (value, label) => {
  label = value > 150 ? 'kCal' : 'kg'
  return [label, value]
}

export default function ActivityGraph(props) {
  /* constructor(props) {
    super(props)
    this.state = { data: '', id: this.props.id }
  }
  async componentDidMount() {
    this.setState({ data: await getUserActivity(this.state.id) })
  } */
  console.log(props.userActivity)
  return (
    <ResponsiveContainer>
      <BarChart
        data={props.userActivity}
        margin={{
          top: 112.5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <text x={32} y={44} fontFamily={'Roboto'} fontWeight={500}>
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          fontFamily="Roboto"
          fontWeight="500"
          fontSize="14px"
        />
        <YAxis
          dataKey="kilogram"
          domain={['dataMin-1', 'dataMax+1']}
          orientation="right"
          axisLine={false}
          tickSize={0}
        />
        <YAxis
          dataKey="calories"
          domain={['dataMin-50', 'dataMax+50']}
          hide={true}
          yAxisId="calories"
        />
        <Tooltip
          offset={50}
          separator=" "
          itemStyle={{
            background: '#E60000',
            margin: 0,
            padding: 0,
            color: '#FFF',
            fontFamily: 'Roboto',
            fontWeight: 500,
            fontSize: '12px',
            lineHeight: '24px',
          }}
          wrapperStyle={{
            background: '#E60000',
            margin: 0,
            padding: 0,
          }}
          contentStyle={{
            background: '#E60000',
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
          verticalAlign="top"
          align="right"
          wrapperStyle={{
            top: '30px',
            right: '24px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '14px',
          }}
          iconSize="8"
          formatter={renderColorfulLegendText}
        />
        <Bar
          name="Poids (kg)"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}
          legendType="circle"
        />
        <Bar
          name="Calories brûlées (kCal)"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}
          legendType="circle"
          yAxisId="calories"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

