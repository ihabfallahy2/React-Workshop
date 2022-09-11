import { Routes, Route } from "react-router-dom";
import { Wrap, WrapItem, Center, Heading } from "@chakra-ui/react";
import { SiSpacex } from "react-icons/si";

import Menu from "./Components/Menu"
import { LaunchDetails } from "./Components/Details"
import { Footer } from "./Components/Footer"

import Header from "./Components/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="LaunchDetails/:id" element={<LaunchDetails />} />
      </Routes>
    </>
  );
}

export default App;
