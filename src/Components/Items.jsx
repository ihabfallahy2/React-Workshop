import { useState, useEffect } from "react";

import { FaCalendarCheck } from "react-icons/fa";
import { BsFillNodePlusFill } from "react-icons/bs";
import { Icon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

import { Box, Flex, Text, Highlight, Spacer, Tag, Button, WrapItem, Image, Badge } from "@chakra-ui/react";
import { Show, Hide } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

import { format } from 'date-fns'
import { es } from "date-fns/locale";

export function LaunchItems(GetLaunch) {

  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex >
        <Text fontSize="2xl" mb={5}><Highlight query='Mission' styles={{ p: '2', ml: '-1.5', rounded: 'lg', bg: 'teal.100' }}>Mission </Highlight><strong>{GetLaunch.name}</strong></Text>

        <Spacer />

        <Show breakpoint='(min-width: 500px)'>
          <Tag p={2} bg={GetLaunch.success ? "green.100" : "red.100"} >{GetLaunch.success ? "Exitoso" : "Fracaso"}</Tag>
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

export function RocketItems(GetCrew) {

  const handleImgError = e => {
    e.target.src = "https://bit.ly/2Z4KKcF"
  }
  return (
    <WrapItem>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Link to={"LaunchDetails/" + GetCrew.launches}>
        <Image src={GetCrew.image} onError={handleImgError} referrerPolicy="no-referrer" boxSize='300px'/>
        </Link>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              status
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {GetCrew.status}
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {GetCrew.name}
          </Box>

          <Box>
            Agency &bull; {GetCrew.agency}
          </Box>
        </Box>
      </Box>
    </WrapItem>
  )
}