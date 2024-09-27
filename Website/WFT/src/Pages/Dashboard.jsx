import { Box, Button, Container, filter, ButtonGroup, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Dashboard() {

    const [count, setCount] = useState()

    const containerStyles = {
        as: 'section',
        border: '1px',
        borderColor: 'black',
        marginTop: "3rem",
        maxWidth: "40rem",
    }
    const boxStyles = {
        p: "10px",
        bg: "orange",
        color: "white",
        m: "10px",
        mb: "10px",
        textAlign: "center",
        margin: 'auto',
        width: '80%',
        padding: '10px',
    }
    const altBoxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        m: "10px",
        textAlign: "center",
        margin: 'auto',
        width: '18%',
        border: '1px solid purple',
        padding: '10px',
    }
    const strangeStyles = {
        p: "10px",
        bg: "black",
        color: "white",
        m: "10px",
        width: "5rem",
        textAlign: "center",
        filter: 'blur(3px)',
        ':hover': {
            bg: 'white.900',
            color: 'white',
            filter: 'blur(0px)',
        },
          
    }
    const buttonBoxStyles = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        pt: '5px',
        bgPosition:'center',
        bgRepeat: 'no-repeat',
        mb:'2px',
    }
    const buttonStyles = {
        bg: "green.500",
        color: "white",
        m: "3rem",
        textAlign: "center",
        height: '2rem',
        width: '50%',
        border: '1px solid purple',
        justifyContent: 'center',
        ':hover': {
            bg: 'green.400',
            filter: 'brightness(0.1px)',
        },
    }  

    return (
        <>
        <Container sx={containerStyles}>
            <Heading my="30px" p="10px">Greetings</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti officia quo.</Text>
            
            <Box sx={boxStyles}>
                10/100 days of 100 push-ups
            </Box>

            <Image/>

            <Box sx={altBoxStyles}>
                Keep going
            </Box>

            <Box sx={buttonBoxStyles}>
                <Button sx={buttonStyles} onClick={setCount + 1}>
                    Done
                </Button>
            </Box>

            <Box sx={strangeStyles}>
                I'm blurred!
            </Box>

        </Container>
        <Stack direction='row' spacing={5} mt='20rem' mb='1rem'>
        <Button colorScheme='teal' variant='solid'>
          My Email
        </Button>
        <Button colorScheme='teal' variant='outline'>
          My phone number
        </Button>
      </Stack>
      </>
    )
}