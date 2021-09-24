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
          isAnimationActive={false}
          legendType="none"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={70}
          fill="#fff"
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
          cornerRadius={5}
        />
        <text
          x={110}
          y={120}
          fontFamily={'Roboto'}
          fontWeight={700}
          fontSize={'26px'}
        >
          {data01[0].value}%
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
