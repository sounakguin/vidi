import Footer from "@/Components/Global/Footer";
import Choosevidi from "@/Components/Pages/Home/Choosevidi";
import Joinhandes from "@/Components/Pages/Home/Joinhandes";
import Latestblog from "@/Components/Pages/Home/Latestblog";
import Latestproducts from "@/Components/Pages/Home/Latestproducts";
import Socialmedia from "@/Components/Pages/Home/Socialmedia";
import Testimonial from "@/Components/Pages/Home/Testimonial";
import Vidibuyer from "@/Components/Pages/Home/Vidibuyer";
import Vidirewards from "@/Components/Pages/Home/Vidirewards";
import Header from "@/Components/Pages/Support/Header";

import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Latestproducts />
      <Choosevidi />
      <Testimonial />
      <Vidibuyer/>
      <Joinhandes/>
      <Vidirewards/>
      <Socialmedia/>
      <Latestblog/>
      <Footer/>
    </div>
  );
}
