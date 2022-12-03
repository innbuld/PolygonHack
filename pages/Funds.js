import {
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  chakra,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

export default function Funds() {
  return (
    <VStack w="full" pt="10" bg="#1a202c">
      <Heading>Wallet</Heading>
      <HStack gap="5" w="full" px="10" py="3" justifyContent="space-evenly">
        <Box borderRadius="20px" px="12" py="10" borderWidth="1px">
          <chakra.div
            w="full"
            alignItems="center"
            textAlign="right"
            fontSize="20"
          >
            <Icon cursor="pointer" as={AiFillPlusSquare} />
          </chakra.div>
          <Text fontSize="4xl" fontWeight="bold">
            Fund Wallet
          </Text>
          <HStack w="full" justifyContent="center">
            <Text fontSize="sm" fontWeight="thin">
              fund your arweave wallet
            </Text>
          </HStack>
        </Box>
        <Box borderRadius="20px" px="12" py="10" borderWidth="1px">
          <chakra.div
            w="full"
            alignItems="center"
            textAlign="right"
            fontSize="20"
          >
            <Icon cursor="pointer" as={BiMinus} />
          </chakra.div>
          <Text fontSize="4xl" fontWeight="bold">
            Withdraw Funds
          </Text>
          <HStack w="full" justifyContent="center">
            <Text fontSize="sm" fontWeight="thin">
              fund your arweave wallet
            </Text>
          </HStack>
        </Box>
      </HStack>
      <Flex>
        <Box borderRadius="20px" px="12" py="10" borderWidth="1px">
          <chakra.div
            w="full"
            alignItems="center"
            textAlign="right"
            fontSize="20"
          ></chakra.div>
          <Flex mr={"12"}>
            <FormControl
              isRequired
              mt="-8"
              w={"full"}
              justifyContent={"center"}
            >
              <FormLabel>Add Funds</FormLabel>
              <Input placeholder="0.00$" variant={"filled"} size="lg" />

              <FormLabel>Withdraw Funds</FormLabel>
              <Input placeholder="0.00$" variant={"filled"} size="lg" />
            </FormControl>
          </Flex>
          <Flex justifyContent={"center"} mt="4">
            <Button colorScheme={"teal"}>Add Funds</Button>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}
