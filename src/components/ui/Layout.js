import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container rounded-md h-screen flex flex-col m-auto">
      <Header />

      <div className="flex flex-1 justify-center ">
        <main className="flex-1 p-4  w-full">{children}</main>
      </div>
    </div>
  );
};
export default Layout;
