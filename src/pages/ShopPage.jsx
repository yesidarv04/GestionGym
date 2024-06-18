import React, { useEffect, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import Breadcrumb from "../components/Breadcrumb";
import ShopArea from "../components/ShopArea";
import Preloader from "../helper/Preloader";
import FooterAreaTwo from "../components/FooterAreaTwo";

const ShopPage = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Header Two */}
      <HeaderTwo />

      {/* Breadcrumb */}
      <Breadcrumb title={"Tienda"} />

      {/* Shop Area */}
      <ShopArea />

      {/* Footer Area One */}
      <FooterAreaTwo />
    </>
  );
};

export default ShopPage;
