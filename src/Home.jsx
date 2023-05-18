import Main from "./components/Main";
import NavBar from "./components/NavBar";

import React from 'react'
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";
import Section_main from "./components/Section_main";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
        <NavBar />
        <Main />
        <Sidebar />
        <Section_main />
        <Footer />

        {/* <Cards /> */}


    </div>
  )
}

export default Home