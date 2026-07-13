import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import Loader from "../../styles/Loader";

function TableCoins({ coins, isLoading }) {
  console.log(coins);
  return (
    <div className="flex justify-center mt-[50px] mb-[100px]">
      {isLoading ? (
        <Loader />
      ) : (
        <table className="w-full border-collapse">
          <thead className="border-b-2 border-b-[var(--bg-secondary)] bg-[var(--bg-secondary)] mb-5 text-lg font-semibold">
            <tr className="p-3">
              <th className="font-lg text-left p-3">Coin</th>
              <th className="font-lg text-left p-3">Price</th>
              <th className="font-lg text-left p-3">24h</th>
              <th className="font-lg text-left p-3">Total Volume</th>
              <th className="font-lg text-left p-3">Chart</th>
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
    <tr className="h-18 border-b-1 border-b-[var(--color-tertiary)] font-md font-semibold">
      <td className="p-3">
        <div className="flex items-center cursor-pointer ">
          <img src={image} alt={name} className="w-[25px] h-[25px] mr-3" />
          <span>{name}</span>
          <span className="ml-2 text-sm font-normal text-[var(--text-secondary)]">
            {symbol.toUpperCase()}
          </span>
        </div>
      </td>
      <td>${current_price.toLocaleString()}</td>
      <td
        className={`${
          price_change > 0 ? "text-[var(--success)]" : "text-[var(--danger)]"
        }`}
      >
        {price_change.toFixed(2)}%
      </td>
      <td>${total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={price_change} />
      </td>
    </tr>
  );
};
