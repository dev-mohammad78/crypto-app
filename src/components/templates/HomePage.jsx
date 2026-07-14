import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import TableCoinsMobile from "../modules/TableCoinsMobile";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const response = await fetch(getCoinList(page));
      const data = await response.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, [page]);

  return (
    <div>
      <div className="hidden sm:block">
        <TableCoins coins={coins} isLoading={isLoading} />
      </div>
      <div className="block sm:hidden">
        <TableCoinsMobile coins={coins} isLoading={isLoading} />
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
