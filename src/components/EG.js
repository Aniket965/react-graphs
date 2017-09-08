import React, { Component } from 'react'
import { XAxis, YAxis, Area, AreaChart, CartesianGrid, Tooltip } from 'recharts'

export default class EG extends Component {
  render() {
    return (
      <div>
          <h1 className="lol" style={{ marginLeft: '20vw', fontFamily: 'Encode Sans Condensed', fontSize: '5rem' }}>Course performance Level Graph</h1>
        <AreaChart width={1650} height={650} data={this.props.data}
          margin={{ top: 0, right: 30, left: 80 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="engagement" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="disgust" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </div>
    )
  }
}
