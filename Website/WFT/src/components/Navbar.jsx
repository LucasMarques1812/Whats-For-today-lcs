import { Avatar, Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex bg="gray.300" justifyContent="space-between" alignItems="center">
        <Flex>
            <Box bg="green.500">
                <Heading  p="5px" color="white">What's for today?</Heading>
            </Box>
            <Box m="5px" mt="0.4rem">
                <Button ml="10px" mr="10px">Dashboard</Button>
                <Button >Create</Button>
            </Box>
        </Flex>
        <Box mr="5px">

            {/* <Image 
            boxSize='50px'
            borderRadius="40px"
            objectFit='cover'
            src='https://fastly.picsum.photos/id/1010/200/300.jpg?hmac=OCwsVZA1224psjwFUcMnXdXvV1pT7KnfC-F5gxK-rg8' 
            alt='Dan Abramov' 
            /> */}

            <Button mr="0.6rem" mt="0.2rem">Profille</Button>
            <Avatar 
            size='md' name='User' src='https://fastly.picsum.photos/id/1010/200/300.jpg?hmac=OCwsVZA1224psjwFUcMnXdXvV1pT7KnfC-F5gxK-rg8'
            />
        </Box>
    </Flex>
  )
}