import React from 'react'
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts'

const renderColorfulLegendText = () => {
  return <span style={{ color: '#20253A' }}>Score</span>
}

export default function ScorePieChart(props) {
  //console.log(props)
  const data = [props.data[0]]
  console.log(data)

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
          data={data}
          isAnimationActive={false}
          legendType="none"
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={70}
          fill="#fff"
        />
        <Pie
          data={data}
          isAnimationActive={false}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={80}
          fill="#FF0000"
          startAngle={90}
          endAngle={90 + (data[0].value / 100) * 360}
          cornerRadius={5}
        />
        <text
          x={110}
          y={120}
          fontFamily={'Roboto'}
          fontWeight={700}
          fontSize={'26px'}
        >
          {data[0].value}%
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

