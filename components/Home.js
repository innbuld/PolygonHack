import React from 'react'
import {  Flex, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex justifyContent={'center'} w='full' mt={'48'}  >
      <Flex color={'teal'} fontSize='4xl' as={'b'}>
         <Heading>The Launchpad Protocol for Everyone!</Heading>
      </Flex>  
    </Flex>
    
    
  )
}
