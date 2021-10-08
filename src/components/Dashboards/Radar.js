import React from 'react'
import PropTypes from 'prop-types'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

export default function HealthyRadar(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={props.data}
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
          dataKey="value"
          stroke="#FF0101B2"
          fill="#FF0101B2"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

HealthyRadar.propTypes = {
  data: PropTypes.array,
}