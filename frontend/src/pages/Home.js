import React from "react";
// import Header from "../components/Header";
import Banner from "../components/home/Banner";
import Filter from "../components/home/Filter";

import PhoneItems from "./PhoneItems";

export default function Home() {
  return (
    <div>
      <Banner />
      <Filter />
      <PhoneItems />
    </div>
  );
}
