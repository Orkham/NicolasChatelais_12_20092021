import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'M',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'V',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'S',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'D',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function SessionsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%" back>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
        style={{ background: 'red', borderRadius: '5px' }}
      >
        <text
          x={34}
          y={39}
          fontFamily={'Roboto'}
          fontWeight={500}
          fontSize={'15px'}
          width={'147px'}
          fill={'white'}
          opacity={0.5}
        >
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="name"
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 25,
          }}
        />

        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
