import React from 'react'
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import{AiFillPlusSquare} from "react-icons/ai"

export default function Account() {
  return (
    <Flex w={'full'} justifyContent={"center"}  p='36' height={'100'} position='relative'  >
      <Box borderWidth={'2px'} borderRadius={'lg'} shadow='2xl' backgroundColor='ash' p={'12'} mt='14' mr='58' rounded={'20'} >
        <Box mt='-12' fontSize={'2xl'}   >
         <Text >Upload </Text>
         <Flex>
         <Box cursor={'pointer'} >
           <AiFillPlusSquare></AiFillPlusSquare>
         </Box>
         </Flex>
         
        
       
        

        </Box>        
     </Box>

     <Flex>
     <Box borderWidth={'2px'} borderRadius={'lg'} shadow='2xl' backgroundColor='ash' p={'12'} mt='14' mr='96%' rounded={'20'} >
        <Box mt='-12' fontSize={'2xl'}   >
         <Text >Upload </Text>
         <Flex>
         <Box cursor={'pointer'} >
           <AiFillPlusSquare></AiFillPlusSquare>
         </Box>
         </Flex>
         
        
       
        

        </Box>        
     </Box>

    
     </Flex>

     
       


    </Flex>







    
  )
}



{/* <Box position={'absolute'} left={"3"} bottom={"2"} cursor={"pointer"} >
          <AiFillPlusSquare></AiFillPlusSquare>
         </Box */}