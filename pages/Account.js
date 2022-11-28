import React from 'react'
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import{AiFillPlusSquare} from "react-icons/ai"
import{RiRefund2Fill} from "react-icons/ri"

export default function Account() {
  return (
    <Flex  width={'256'} justifyContent={'space-between'} alignItems="center" p='32' >
      
      <Box borderWidth={'2px'} borderRadius={'lg'} height='32' shadow='dark-lg' backgroundColor='ash' p={'12'} mb='72' mr='24' rounded={'20'}>
        <Box mt='-12' fontSize={'3xl'} >
          <Text as={'b'} >Uploads </Text>
          <Box cursor={'pointer'} ml='8' mt='8'  >
            <AiFillPlusSquare></AiFillPlusSquare>
          </Box>
        </Box>
      </Box>

      <Box borderWidth={'2px'} borderRadius={'lg'} height='32' shadow='dark-lg' backgroundColor='ash' p={'12'} mb='72' mr='24' rounded={'20'}>
        <Box mt='-12' fontSize={'3xl'} >
          <Text as={'b'} >Funds </Text>
          <Box cursor={'pointer'}  mt='8'  >
             <RiRefund2Fill></RiRefund2Fill>
          </Box>
        </Box>
      </Box>

     <Flex ml={'-52'}  >
       <Box mt={'56'} borderWidth={'2px'} ml='-96'   borderRadius={'lg'} height='60' shadow={'dark-lg'} backgroundColor='ash' p={'12'}  width='sm' rounded={'20'} >
        <Box mt={'-12'} borderBottomWidth='2px'>
          <Heading>Latest Activity</Heading>
          <Flex>
            <Text>ff</Text>
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











