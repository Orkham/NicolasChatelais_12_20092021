import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts'

const data01 = [
  {
    name: 'Score',
    value: 24,
  },
]

const renderColorfulLegendText = (value) => {
  return <span style={{ color: '#20253A' }}>{value}</span>
}

export default function ScorePieChart() {
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
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          fill="#FF0000"
          startAngle={90}
          endAngle={90 + (data01[0].value / 100) * 360}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
