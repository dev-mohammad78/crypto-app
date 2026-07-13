import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoins({ coins, isLoading }) {
  console.log(coins);
  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>Chart</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => (
              <TableRow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

const TableRow = ({
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) => {
  return (
    <tr>
      <td>
        <div>
          <img src={image} alt={name} />
          <span>{name}</span>
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>${current_price.toLocaleString()}</td>
      <td>{price_change.toFixed(2)}%</td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={price_change} />
      </td>
    </tr>
  );
};
