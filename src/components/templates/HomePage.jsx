import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import TableCoinsMobile from "../modules/TableCoinsMobile";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(getCoinList());
      const data = await response.json();
      setCoins(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="hidden sm:block">
        <TableCoins coins={coins} isLoading={isLoading} />
      </div>
      <div className="block sm:hidden">
        <TableCoinsMobile coins={coins} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default HomePage;
