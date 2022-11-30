import {
  Box,
  Flex,
  HStack,
  VStack,
  Icon,
  Text,
  chakra,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";

export default function Funds() {
  return (
    <VStack w="full" pt="10">
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
      </HStack>
      <Flex></Flex>
    </VStack>
  );
}
