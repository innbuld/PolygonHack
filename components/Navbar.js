import React from "react";
import {
  Button,
  chakra,
  Flex,
  Text,
  Heading,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineMenuFold } from "react-icons/ai";

export default function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      borderWidth="1px"
      borderBottomColor="teal"
      px="4"
      py="6"
      alignItems="center"
    >
      <Flex gap="8" justifyContent="space-between" alignItems="center">
        <Icon as={AiOutlineMenuFold} w="16" h="6" alignSelf="center" />
        <Box>
          <Heading>PolyFlex</Heading>
        </Box>
      </Flex>
      <Flex gap="4" alignItems="center" justifyContent="space-between">
        <Popover>
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Copy Address</PopoverBody>
          </PopoverContent>
        </Popover>
        <Button colorScheme="teal">
          <Text color="white"> Connect Wallet</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
