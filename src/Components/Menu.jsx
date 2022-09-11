import { useState, useEffect } from "react";
import * as API from "../Services/spaceApi";

import { GiRocketFlight, GiMissileLauncher } from "react-icons/gi";
import { TbSatellite } from "react-icons/tb";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Wrap } from "@chakra-ui/react";

import "../Assets/style.css"
import { LaunchItems, RocketItems } from "./Items"

function Menu() {
  // Launches
  const [launches, setLaunches] = useState([]);

  useEffect(() => { API.GetAllLaunches().then((data) => setLaunches(data)) }, []);

  // Rockets
  const [crews, setCrews] = useState([]);

  useEffect(() => { API.GetAllCrews().then((data) => setCrews(data)) }, []);
  
  //crew image
  const [crewImage, setCrewImages] = useState([]);

  useEffect(() => { API.GetAllCrews().then((data) => setCrewImages(data.image)) }, []);

  return (
    <>
      <Tabs isFitted variant="enclosed" colorScheme="teal">
        <TabList mb="1em" m={[2, 3]}>
          <Tab><GiRocketFlight style={{ marginRight: 5 }} />Launches</Tab>
          <Tab><GiMissileLauncher style={{ marginRight: 5 }} />Crew</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {launches.map((GetLaunch) => (<LaunchItems key={GetLaunch.id} {...GetLaunch} />))}
          </TabPanel>
          <TabPanel>
            <Wrap spacing='80px' display="flex" alignItems="center" justify="center">
              {crews.map((GetCrew) => (<RocketItems key={GetCrew.id} {...GetCrew} />))}
            </Wrap>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Menu;