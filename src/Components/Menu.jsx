import { useState, useEffect } from "react";
import * as API from "../Services/spaceApi";

import { GiRocketFlight , GiMissileLauncher } from "react-icons/gi";
import { TbSatellite } from "react-icons/tb";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import "../Assets/style.css"
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