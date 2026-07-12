import { useEffect, useState } from "react";

import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(getCoinList());
      const data = await response.json();
      setCoins(data);
    };
    getData();
  }, []);

  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  );
}

export default HomePage;
