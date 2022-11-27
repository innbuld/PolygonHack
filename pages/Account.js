import React from 'react'
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import{AiFillPlusSquare} from "react-icons/ai"
import{RiRefund2Fill} from "react-icons/ri"

export default function Account() {
  return (
    <Flex w={'full'} justifyContent={"center"}  p='36' height={'100'} position='relative'  >
      <Box borderWidth={'2px'} borderRadius={'lg'} shadow='2xl' backgroundColor='ash' p={'12'} mt='14' mr='24' rounded={'20'} >
        <Box mt='-12' fontSize={'2xl'}   >
         <Text >Uploads </Text>
         <Flex>
         <Box cursor={'pointer'} ml='2' mt='8' bottom={'3'} >
           <AiFillPlusSquare></AiFillPlusSquare>
         </Box>
         </Flex>
         

        </Box>        
     </Box>

     <Flex w={'full'} >
     <Box borderWidth={'2px'} borderRadius={'lg'} shadow='2xl' backgroundColor='ash' p={'12'} mt='14' mr={'28%'} rounded={'20'} >
        <Box mt='-12' fontSize={'2xl'}  >
         <Text >Funds </Text>
         <Flex>
         <Box cursor={'pointer'} mr='20' mt={'6'} >
           <RiRefund2Fill></RiRefund2Fill>
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