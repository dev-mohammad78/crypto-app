import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x-cg-demo-api-key= CG-dMRdPo7NaLFEFxnE9S5954qv",
    ).then((response) => response.json().then((data) => setCoins(data)));
  }, []);

  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  );
}

export default HomePage;
