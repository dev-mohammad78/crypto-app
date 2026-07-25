function Layout({ children }) {
  return (
    <div className="px-3">
      <header className="flex items-center justify-between bg-[var(--primary)] p-4 mt-4 mb-6 sm:mb-10 rounded-md ">
        <h1 className="text-xl font-bold">Crypto app</h1>
        <p className="hidden sm:inline text-md">React.js Course</p>
      </header>
      {children}
      <footer className="bg-[var(--primary)] p-4 mt-5 sm:mt-10 rounded-md text-center text-md">
        Developed by dev-mohammad78 with ❤️
      </footer>
    </div>
  );
}

export default Layout;
