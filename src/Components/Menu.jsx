import { useState, useEffect } from "react";
import * as API from "../Services/spaceApi";

import { SiSpacex } from "react-icons/si";
import { GiRocketFlight , GiMissileLauncher } from "react-icons/gi";
import { TbSatellite } from "react-icons/tb";

import { Heading } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel , Wrap , WrapItem , Center , Box , Flex , Text , Highlight , Spacer , Tag} from "@chakra-ui/react";


import {LaunchItems , RocketItems , StarlinkItems} from "./Items"

function Menu(){
    // Launches
  const [launches, setLaunches] = useState([]);

  useEffect(() => {API.GetAllLaunches().then((data) => setLaunches(data))}, []);

  // Rockets
  const [rockets, setRockets] = useState([]);

  useEffect(() => {API.GetAllRockets().then((data) => setRockets(data))}, []);

  // Starlink
  const [starlink, setStarlink] = useState([]);

  useEffect(() => {API.GetAllStarlinks().then((data) => setStarlink(data))}, []);

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

      <Tabs isFitted variant="enclosed" colorScheme="teal">
        <TabList mb="1em" m={[2,3]}>
          <Tab><GiRocketFlight style={{ marginRight: 5 }}/>Launches</Tab>
          <Tab><GiMissileLauncher style={{ marginRight: 5  }}/>Rockets</Tab>
          <Tab><TbSatellite style={{ marginRight: 5  }}/>Starlink</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          {launches.map((GetLaunch) => (<LaunchItems key={GetLaunch.id} {...GetLaunch}/>))}
          </TabPanel>
          <TabPanel>
          {rockets.map((GetRocket) => (<RocketItems key={GetRocket.id} {...GetRocket}/>))}
          </TabPanel>
          <TabPanel>
          {starlink.map((GetStarlink) => (<StarlinkItems key={GetStarlink.id} {...GetStarlink}/>))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Menu;