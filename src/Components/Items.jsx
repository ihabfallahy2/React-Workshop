import { FaCalendarCheck } from "react-icons/fa";
import { BsFillNodePlusFill } from "react-icons/bs";
import { Icon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import { Box, Flex, Text, Highlight, Spacer, Tag, Button } from "@chakra-ui/react";
import { Show, Hide } from '@chakra-ui/react'

import { format } from 'date-fns'
import { es } from "date-fns/locale";

export function LaunchItems(GetLaunch) {

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex >
        <Text fontSize="2xl" mb={5}><Highlight query='Mission' styles={{ p: '2', ml: '-1.5', rounded: 'lg', bg: 'teal.100' }}>Mission </Highlight><strong>{GetLaunch.name}</strong></Text>

        <Spacer />

        <Show breakpoint='(min-width: 500px)'>
        <Tag p={2} bg={GetLaunch.success ? "red.100" : "green.100"} >{GetLaunch.success ? "Exitoso" : "Fracaso"}</Tag>
        </Show>
      </Flex>

      <Box display="flex" alignItems="center">
        <Icon as={FaCalendarCheck} mr={2} mt={0.5} w={4} h={4} />
        <Text>{format(new Date(GetLaunch.date_local), 'PPP', { locale: es })}</Text>
      </Box>

      <Link to={"LaunchDetails/" + GetLaunch.id}>
        <Button mt={4} ml={-0.5} colorScheme='teal' variant='outline' w={100}>
          Button <Icon as={BsFillNodePlusFill} ml={2} mt={0.5} w={6} h={6} />
        </Button>
      </Link>

    </Box>
  )
}

export function RocketItems(GetRocket) {
  return (
    <Box key={GetRocket.id} bg="gray.100" p={4} m={4} borderRadius="lg">
      {GetRocket.name}
    </Box>
  )
}

export function StarlinkItems(GetStarlink) {
  return (
    <Box key={GetStarlink.id} bg="gray.100" p={4} m={4} borderRadius="lg">
      id : {GetStarlink.id} - Starlink Version - {GetStarlink.version}
    </Box>
  );
}