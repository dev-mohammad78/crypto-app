import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import TableCoinsMobile from "../modules/TableCoinsMobile";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const response = await fetch(getCoinList(page, currency));
        const data = await response.json();
        setCoins(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <div className="hidden sm:block">
        <TableCoins coins={coins} isLoading={isLoading} currency={currency} />
      </div>
      <div className="block sm:hidden">
        <TableCoinsMobile
          coins={coins}
          isLoading={isLoading}
          currency={currency}
        />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
