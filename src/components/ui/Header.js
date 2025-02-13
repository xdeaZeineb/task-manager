const Header = () => {
  return (
    <header>
      <div className="m-4 flex items-center justify-left gap-6 p-6">
        <div className="w-24 h-24 rounded-full shadow-[inset_-2px_0px_4px_0px_#ccd6dd] p-4 bg-white">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-text">Task Manager</h1>
      </div>
    </header>
  );
};
export default Header;
