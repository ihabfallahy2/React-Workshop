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
import { Show, Hide, Spacer } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'


export function LaunchDetails() {


    let { id } = useParams();
    const [launch, setLaunch] = useState([]);
    const [links, setLinks] = useState([]);
    const [image, setImages] = useState([]);

    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setLaunch(data)) }, []);
    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setLinks(data.links)) }, []);
    useEffect(() => { API.GetLauncheByFlightNumber(id).then((data) => setImages(data.links.patch)) }, []);

    console.log(launch)

    return (
        <>
            <Box bg="gray.100" p={4} m={4} borderRadius="lg" display="flex" align="center" justify="center">

                <Hide above="sm">

                <Center>
                    <Box maxW='lg' borderRadius='lg' >
                        <Image boxSize='100px' src={image.small} borderRadius='md' bg="teal.100" m={6} align="center" />

                        <Heading size="4xl">{launch.name}</Heading>

                        <HStack spacing={4} mt={8}>
                            <Tag size='lg' colorScheme='teal'>
                                {launch.details}
                            </Tag>
                        </HStack>
                    </Box>
                </Center>
                </Hide>
                <Show above='sm'>
                    
                    <Image boxSize='200px' src={image.small} borderRadius='md' bg="teal.100" m={6} align="center" />

                    <Box mt={10}>

                    <Heading size="4xl">{launch.name}</Heading>
                    <HStack spacing={4} mt={8}>
                        <Tag size='lg' colorScheme='teal'>
                            {launch.details}
                        </Tag>
                    </HStack>
                    </Box>
                </Show>
            </Box>
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