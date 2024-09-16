import { Box, Button, Container, filter, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Dashboard() {

    const [count, setCount] = useState()

    const containerStyles = {
        as: 'section',
        border: '1px',
        borderColor: 'black',
        marginTop: "130px",
        maxWidth: "1100px",
        py: "20px",
    }
    const boxStyles = {
        p: "10px",
        bg: "orange",
        color: "white",
        m: "10px",
        textAlign: "center"
    }
    const altBoxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        m: "10px",
        textAlign: "center",
        margin: 'auto',
        width: '50%',
        border: '3px solid green',
        padding: '10px',
    }
    const strangeStyles = {
        p: "10px",
        bg: "black",
        color: "white",
        m: "10px",
        textAlign: "center",
        filter: 'blur(3px)',
        ':hover': {
            bg: 'blue.900',
            filter: 'blur(0px)',
        }
    }

    return (
        <Container sx={containerStyles}>
            <Heading my="30px" p="10px">Greetings</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti officia quo.</Text>
            
            <Box sx={boxStyles}>
                10/100 days of 100 push-ups
            </Box>
            <Image/>
            <Box sx={altBoxStyles}>
                Done
            </Box>

            <Box sx={strangeStyles}>
                I'm blurred!
            </Box>

            <Button marginLeft="45%" onClick={setCount + 1}>
                Done
            </Button>

        </Container>
    )
}