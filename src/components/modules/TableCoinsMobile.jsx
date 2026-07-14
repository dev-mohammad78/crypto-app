import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

import Loader from "../../styles/Loader";

function MobileCoins({ coins, isLoading }) {
  if (isLoading) return <Loader />;

  return (
    <div className="mt-[50px] mb-[50px] space-y-4 md:hidden px-2">
      {coins.map((coin) => (
        <MobileCoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default MobileCoins;

function MobileCoinCard({
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) {

  return (
    <div className="rounded-xl bg-[var(--bg-secondary)] p-4 shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={image} alt={name} className="h-10 w-10" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <span className="text-sm text-[var(--text-secondary)]">
              {symbol.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 grid grid-cols-3 gap-1 text-center">
        <div>
          <p className="text-xs text-[var(--text-secondary)]">Price</p>

          <span className="font-semibold">
            ${current_price.toLocaleString()}
          </span>
        </div>

        <div>
          <p className="text-xs text-[var(--text-secondary)]">24h</p>

          <span
            className={`${
              price_change > 0
                ? "text-[var(--success)]"
                : "text-[var(--danger)]"
            }`}
          >
            {price_change.toFixed(2)}%
          </span>
        </div>

        <div>
          <p className="text-xs text-[var(--text-secondary)]">Total Volume</p>

          <span className="font-semibold">
            ${total_volume.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
