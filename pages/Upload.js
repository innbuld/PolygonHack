import React from 'react'
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import{AiFillPlusSquare} from "react-icons/ai"


export default function Upload() {
  return (
   <Flex justifyContent={'center'} width='full' height={'100'}>
     <Box  height='32' shadow='dark-lg' mt='52'  p={'12'}  mr='24' rounded={'20'}>
        <Box mt='-8' fontSize={'3xl'} >
          <Text as={'b'} >Upload </Text>
          <Box cursor={'pointer'} ml='8' mt='2'  >
           <AiFillPlusSquare></AiFillPlusSquare>
          </Box>
        </Box>
      </Box>








   </Flex>
  )
}
