const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-dMRdPo7NaLFEFxnE9S5954qv";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x-cg-demo-api-key=${API_KEY}`;
};

const searchCoin = (query) => {
  return `${BASE_URL}/search?query=${query}&x-cg-demo-api-key=${API_KEY}`;
};

const marketChart = (coin) => {
  return `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};
export { getCoinList, searchCoin, marketChart };
