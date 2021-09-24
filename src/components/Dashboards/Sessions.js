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

const data = [
  {
    name: 'L',
    errroY: 2,
    pv: 30,
  },
  {
    name: 'M',
    errroY: 2,
    pv: 25,
  },
  {
    name: 'M',
    errroY: 2,
    pv: 30,
  },
  {
    name: 'J',
    errroY: 2,
    pv: 25,
  },
  {
    name: 'V',
    errroY: 2,
    pv: 30,
  },
  {
    name: 'S',
    errroY: 2,
    pv: 25,
  },
  {
    name: 'D',
    errroY: 2,
    pv: 30,
  },
]

const renderTooltip = (value, label) => {
  label = 'min'
  return [label, value]
}

export default function SessionsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%" back>
      <LineChart
        data={data}
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
          dataKey="name"
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
        <YAxis dataKey="pv" domain={['auto', 'auto']} hide></YAxis>

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
          dataKey="pv"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
