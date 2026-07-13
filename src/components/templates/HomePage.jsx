import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";

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
      <TableCoins coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
