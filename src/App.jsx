import { Routes, Route } from "react-router-dom";
import {  Wrap , WrapItem , Center , Heading} from "@chakra-ui/react";
import { SiSpacex } from "react-icons/si";

import Menu from "./Components/Menu"
import {LaunchDetails} from "./Components/Details"

function App() {
  return (
    <>
    <Wrap spacing='-60px' justify='center'>
        <WrapItem>
        <Center w='180px' h='90px'>
        <Heading as='h1' size="2xl" align="center" noOfLines={1}> Space </Heading>
        </Center>
        </WrapItem>
        <WrapItem>
        <Center w='180px' h='92px'>
        <SiSpacex size={95}/>
        </Center>
        </WrapItem>
      </Wrap>

    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="LaunchDetails/:id" element={<LaunchDetails />} />
    </Routes>
    </>
  );
}

export default App;
