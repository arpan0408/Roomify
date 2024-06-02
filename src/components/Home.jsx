import React from "react";

import Album from "./Album";
import Cardlist from "./Cardlist";
import Guest from "./Guest";
import Heros from "./Heros";
// import Footers from "./Footers";

const Home = () => {
  return (
    <>
      <Album />
      <Cardlist />
      {/* <Heros /> */}
      <Guest />
      {/* <Footers /> */}
    </>
  );
};
export default Home;
