import {  Box , Spacer } from '@chakra-ui/react';
import { Wrap, WrapItem, Center, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";


import { SiSpacex } from "react-icons/si";

import { Footer } from "./Footer"


function Header() {
  return (
    <Box display="flex" direction="column" align="center" justify="center">
      <Link to={"/"}>
      <Wrap spacing='-60px' justify='center'>
        <WrapItem>
          <Center w='180px' h='90px'>
            <Heading as='h1' size="2xl" align="center" noOfLines={1}> Space </Heading>
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w='180px' h='92px'>
            <SiSpacex size={95} />
          </Center>
        </WrapItem>
      </Wrap>
        </Link>
      <Spacer />
      <Footer />
    </Box>
  )
}

export default Header;