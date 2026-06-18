import { Outlet } from "react-router";

import Header from "../common/Header";
import Footer from "../common/Footer";
import Movies from "../Movies/Movies";

function Rootlayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default Rootlayout;
