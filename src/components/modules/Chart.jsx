function Chart({ chart, setChart }) {
  return (
    <div className="w-full h-full fixed top-4 left-4 backdrop-blur-xs">
      <span
        className="inline-block font-bold bg-[var(--danger)] text-[var(--text-primary)] w-8 h-8 leading-8 text-center mt-2 ml-2 rounded-sm cursor-pointer"
        onClick={() => setChart(false)}
      >
        X
      </span>
      <div className="w-[800px] m-auto p-5 mt-12 bg-[var(--bg-primary)] border-2 border-[var(--bg-secondary)] rounded-lg"></div>
    </div>
  );
}

export default Chart;
