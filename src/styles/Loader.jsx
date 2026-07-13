import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex min-h-[100vh] items-center justify-center">
      <div className="relative flex flex-col items-center gap-5 rounded-2xl border border-[var(--text-secondary)] bg-[var(--bg-secondary)] px-10 py-8 shadow-xl backdrop-blur-md">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-[var(--bg-primary)] blur-2xl"></div>

        <RotatingLines
          visible={true}
          height="70"
          width="70"
          strokeWidth="4"
          strokeColor="#3b82f6"
          animationDuration="0.75"
          ariaLabel="loading"
        />

        <p className="animate-pulse text-sm font-medium tracking-widest text[var(--text-secondary)]">
          Loading Crypto Prices...
        </p>
      </div>
    </div>
  );
}

export default Loader;
