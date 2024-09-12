import Events from "@/Components/Pages/Companyprogram/Events";
import Header from "@/Components/Pages/Companyprogram/Header";
import Rewards from "@/Components/Pages/Companyprogram/Rewards";
import Vidirewards from "@/Components/Pages/Companyprogram/Vidirewards";
import Footer from "@/Components/Global/Footer";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Rewards />
      <Events />
      <Vidirewards />
      <Footer />
    </div>
  );
}
