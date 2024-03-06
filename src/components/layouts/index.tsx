import { Outlet } from "react-router-dom";
import LayoutHeader from "./header/LayoutHeader";

const Layout = () => {
  return (
    <>
      <LayoutHeader />
      <main
        style={{
          minWidth: "800px",
          maxWidth: "1200px",
          margin: "0 auto",
          border: "1px solid black",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
