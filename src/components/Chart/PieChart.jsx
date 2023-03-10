import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";


const data = [
  { name: "Group A", value: 250 },
  { name: "Group D", value: 150 },
  { name: "Group B", value: 400 }
//   { name: "Group C", value: 300 },
  
];
const COLORS = ["#5f00d2", "#e4e4e4", "#3e95ff"];

export default function Piechart() {
  const lotteryStyle={
    width:'10em',
    marginTop:'-5em',
    position: 'relative',
    left:'12%',
  }

  return (
    <div style={lotteryStyle}>
    <PieChart className="circle" width={600} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={50}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <div className="hey">hey</div>
    </PieChart>
    </div>
  );
}