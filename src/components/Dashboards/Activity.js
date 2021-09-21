import React, { PureComponent } from 'react'
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

const data = [
  {
    name: '1',
    poids: 69,
    calories: 2400,
  },
  {
    name: '2',
    poids: 70,
    calories: 2398,
    amt: 2210,
  },
  {
    name: '3',
    poids: 71,
    calories: 1800,
    amt: 2290,
  },
  {
    name: '4',
    poids: 70,
    calories: 1908,
    amt: 2000,
  },
  {
    name: '5',
    poids: 69,
    calories: 2800,
    amt: 2181,
  },
  {
    name: '6',
    poids: 70,
    calories: 2800,
    amt: 2500,
  },
  {
    name: '7',
    poids: 71,
    calories: 2300,
    amt: 2100,
  },
  {
    name: '8',
    poids: 70,
    calories: 2300,
    amt: 2100,
  },
  {
    name: '9',
    poids: 69,
    calories: 1300,
    amt: 2100,
  },
  {
    name: '10',
    poids: 70,
    calories: 2300,
    amt: 2100,
  },
]

const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#74798C', paddingLeft: '10px' }}>{value}</span>
}

const renderTooltip = (value, label) => {
  label = value > 150 ? 'kCal' : 'kg'
  return [label, value]
}

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <BarChart
          data={data}
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
            dataKey="name"
            tickLine={false}
            fontFamily="Roboto"
            fontWeight="500"
            fontSize="14px"
          />
          <YAxis dataKey="poids" domain={[68, 72]} orientation="right" />
          <YAxis
            dataKey="calories"
            domain={[1000, 4000]}
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
            dataKey="poids"
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
}
