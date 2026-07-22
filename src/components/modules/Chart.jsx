import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { convertData } from "../../helper/convertData";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  console.log(convertData(chart, type));
  return (
    <div className="w-full h-full fixed top-4 left-4 backdrop-blur-xs">
      <span
        className="inline-block font-bold bg-[var(--danger)] text-[var(--text-primary)] w-8 h-8 leading-8 text-center mt-2 ml-2 rounded-sm cursor-pointer"
        onClick={() => setChart(false)}
      >
        X
      </span>
      <div className="w-[800px] m-auto p-5 mt-20 bg-[var(--bg-primary)] border-2 border-[var(--bg-secondary)] shadow-xl/20 rounded-lg">
        <div className="w-[740px] h-[300px] p-2">
          <LineChart
            style={{
              width: "100%",
              height: "100%",
            }}
            responsive
            data={convertData(chart, type)}
          >
            <CartesianGrid stroke="var(--color-tertiary)" />
            <XAxis dataKey="date" hide />
            <YAxis
              stroke="var(--text-secondary)"
              dataKey={type}
              domain={["auto", "auto"]}
            />

            <Line
              type="monotone"
              dataKey={type}
              stroke="var(--primary)"
              strokeWidth="2px"
            />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default Chart;
