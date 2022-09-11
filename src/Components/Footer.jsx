import { useDisclosure, Box } from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    InputGroup,
    Input,
    Stack,
    InputRightAddon,
    Spacer,
    Button


} from '@chakra-ui/react'

import { Avatar } from '@chakra-ui/react'
import { Wrap, WrapItem, Center, Text } from "@chakra-ui/react";


import { Icon } from '@chakra-ui/react'
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube, TiSocialGithub } from "react-icons/ti";

import { HamburgerIcon } from '@chakra-ui/icons'

export function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box onClick={onOpen}>

                <Icon as={HamburgerIcon} w={14} h={14} m={6} />
            </Box>

            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'><Center><Text as='em' colorScheme="gray.100">©2022 Spacex Ihab, Inc. All rights reserved.</Text></Center></DrawerHeader>
                    <DrawerBody>
                        <Center>
                            <Stack spacing={4} >

                                <InputGroup size='sm'>
                                    <Input placeholder='Send me your email' />
                                    <InputRightAddon children='@google.com' />
                                    <Button size='sm' ml={2} >Send</Button>
                                </InputGroup>
                            </Stack>

                            <Spacer />

                            <Wrap spacing="10px">
                                <WrapItem bg="teal.100" borderRadius="full">
                                    <Icon as={TiSocialGithub} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="blue.100" borderRadius="full">
                                    <Icon as={TiSocialFacebook} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="red.100" borderRadius="full">
                                    <Icon as={TiSocialGooglePlus} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="blue.100" borderRadius="full">
                                    <Icon as={TiSocialLinkedin} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="orange.100" borderRadius="full">
                                    <Icon as={TiSocialInstagram} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="red.100" borderRadius="full">
                                    <Icon as={TiSocialYoutube} w={10} h={14} p={1} />
                                </WrapItem>
                                <WrapItem bg="blue.100" borderRadius="full">
                                    <Icon as={TiSocialTwitter} w={10} h={14} p={1} />
                                </WrapItem>

                            </Wrap>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}