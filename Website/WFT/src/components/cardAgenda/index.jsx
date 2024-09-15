import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Stack, StackDivider } from '@chakra-ui/react'
// import strings from './i18n/strings'

export function CardAgenda() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">GAY</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}
