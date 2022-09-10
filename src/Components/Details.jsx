import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as API from "../Services/spaceApi";
import { Image, Box, Heading, Link, Text, Tag, HStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { Show, Hide , Spacer} from '@chakra-ui/react'


export function LaunchDetails() {


    let { id } = useParams();
    const [launch, setLaunch] = useState([]);
    const [links, setLinks] = useState([]);
    const [image, setImages] = useState([]);

    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setLaunch(data)) }, []);
    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setLinks(data.links)) }, []);
    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setImages(data.links.patch)) }, []);

    console.log(launch)

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
      
    return (
        <>
            <Box bg="gray.100" p={4} m={4} borderRadius="lg" display="flex" direction={{ sm: 'column', md: 'row' }}>
                <Image width={{ sm:'100%', md: '25%', lg: '25%', xl: '15%'}} src={image.small} borderRadius='md' bg="teal.100" m={6} align="center"/>
                <Spacer />
                <Hide below='md'>
                    <Box m={8}  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Heading size="4xl">{launch.name}</Heading>
                        <HStack spacing={4} mt={8}>
                            <Tag size='lg' colorScheme='teal'>
                                {launch.details}
                            </Tag>
                        </HStack>
                    </Box>
                </Hide>
            </Box>
            <Show below='md'>

                <Box bg="gray.100" p={4} m={4} borderRadius="lg" align="center">
                    <Heading size="4xl">{launch.name}</Heading>
                    <HStack spacing={4} mt={8}>
                        <Tag size='lg' colorScheme='teal'>
                            {launch.details}
                        </Tag>
                    </HStack>
                </Box>
            </Show>
            <Accordion bg="gray.100" p={4} m={4} borderRadius="lg" defaultIndex={[1]} allowMultiple>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Links
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>
                            <Link color='teal.500' href={links.wikipedia}>
                                {links.wikipedia}<ExternalLinkIcon m={2} mb={3} />
                            </Link>
                        </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <Link color='teal.500' href={links.webcast}>
                            {links.webcast}<ExternalLinkIcon m={2} mb={3} />
                        </Link>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                        <Link color='teal.500' href={links.article}>
                            {links.article}<ExternalLinkIcon m={2} mb={3} />
                        </Link>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}