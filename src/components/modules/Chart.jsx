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
  console.log(chart);

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className="w-full h-full fixed top-4 left-1 sm:left-4 backdrop-blur-xs">
      <span
        className="inline-block font-bold bg-[var(--danger)] text-[var(--text-primary)] w-8 h-8 leading-8 text-center mt-2 ml-2 rounded-sm cursor-pointer"
        onClick={() => setChart(false)}
      >
        X
      </span>

      <div className="w-[380px] sm:w-[800px] sm:m-auto p-5 mt-6 sm:mt-10 bg-[var(--bg-primary)] border-2 border-[var(--bg-secondary)] shadow-xl/20 rounded-lg">
        {/* header */}
        <div className="flex items-center ml-3 mb-4">
          <img
            src={chart.coin.image}
            alt={chart.coin.name}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <p className="ml-2 font-bold">{chart.coin.name}</p>
        </div>

        {/* chart */}
        <div className="w-[360px] sm:w-[740px] h-[300px] sm:mt-2 sm:p-2">
          <LineChart
            style={{
              width: "95%",
              height: "85%",
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

        {/* details */}
        <div className="flex items-center gap-x-8 mt-0" onClick={typeHandler}>
          <button
            className={`${
              type === "prices"
                ? "bg-[var(--primary)] text-[var(--text-primary)] py-[6px] px-[4px] rounded-md"
                : "market__btn"
            }`}
          >
            Prices
          </button>
          <button
            className={`${
              type === "market_caps"
                ? "bg-[var(--primary)] text-[var(--text-primary)] py-[6px] px-[4px] rounded-md"
                : "market__btn"
            }`}
          >
            Market Caps
          </button>
          <button
            className={`${
              type === "total_volumes"
                ? "bg-[var(--primary)] text-[var(--text-primary)] py-[6px] px-[4px] rounded-md"
                : "market__btn"
            }`}
          >
            Total Volumes
          </button>
        </div>

        {/* footer */}
        <div className="flex flex-col sm:flex-row  sm:items-center justify-between mt-8">
          <div className="flex">
            <p className="text-[var(--primary)] text-sm font-bold mr-2">
              Prices:
            </p>
            <span className="text-[var(--text-primary)] text-sm ">
              ${chart.coin.current_price}
            </span>
          </div>
          <div className="flex">
            <p className="text-[var(--primary)] text-sm font-bold mr-2">ATH:</p>
            <span className="text-[var(--text-primary)] text-sm ">
              ${chart.coin.ath}
            </span>
          </div>
          <div className="flex">
            <p className="text-[var(--primary)] text-sm font-bold mr-2">
              Market Cap:
            </p>
            <span className="text-[var(--text-primary)] text-sm ">
              {chart.coin.market_cap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
