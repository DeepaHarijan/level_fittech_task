import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name:'1 Mar',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    
    uv: 1890,
    pv: 4800,
    amt: 8181
  },
  {
    
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    
    uv: 3490,
    pv: 4300,
    amt: 7100
  },

  {
    
    uv: 2000,
    pv: 9800,
    amt: 6290
  },
  {
    
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    
    uv: 3490,
    pv: 4300,
    amt: 5100
  },
  {
    
    uv: 2390,
    pv: 3800,
    amt: 4500
  },
  {
    name:'14 Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290
  }
];

export default function Chart() {
  return (
    <BarChart
      width={800}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" style={{fontSize:12}}/>
      
      
      <Bar dataKey="pv" stackId="a" fill="#5f00d2" style={{borderRadius:20}}/>
      <Bar dataKey="amt" stackId="a" fill="#3e95ff" />
      <Bar dataKey="uv" fill="#ffffff" />
    </BarChart>
  );
}
