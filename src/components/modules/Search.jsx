import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchCoin } from "../../services/cryptoApi";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setCoins([]); // Clear previous search results when text changes
    if (!text) {
      setIsLoading(false);
      return;
    }

    const search = async () => {
      try {
        const response = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const data = await response.json();
        if (data.coins) setCoins(data.coins);
        setIsLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className="mt-13 relative p-2 flex items-center justify-center flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Search coins..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[350px] sm:w-[450px] h-[50px] p-3 text-[var(--text-primary)] bg-[var(--bg-secondary)] border-none rounded-md focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="w-[350px] sm:w-[100px] bg-[var(--bg-secondary)] h-[50px] border-none rounded-md md:ml-5 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      >
        <option value="usd" className="m-2">USD</option>
        <option value="eur" className="m-2">EUR</option>
        <option value="jpy" className="m-2">JPY</option>
      </select>

      {(!!coins.length || isLoading) && (
        <div className="absolute text-center top-[80px] left-[210px] w-[350px] sm:w-[450px] h-100 rounded-md overflow-y-scroll bg-[var(--bg-primary)] border-2 border-[var(--bg-secondary)] p-5">

          {isLoading && (
            <RotatingLines
              visible={true}
              height="50"
              width="50"
              strokeWidth="4"
              strokeColor="#3b82f6"
              animationDuration="0.75"
              ariaLabel="loading"
              className="text-center"
            />
          )}

          <ul>
            {coins.map((coin) => (
              <li
                key={coin.id}
                className="flex mb-4 pb-4 border-b border-[var(--bg-secondary)]"
              >
                <img
                  src={coin.thumb}
                  alt={coin.name}
                  classname="w-[25px] h-[25px]"
                />
                <span className="ml-3">{coin.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
