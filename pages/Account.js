import React from "react";
import {
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Icon,
  VStack,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Circle,
} from "@chakra-ui/react";
import { AiFillPlusSquare } from "react-icons/ai";
import { RiRefund2Fill } from "react-icons/ri";

export default function Account() {
  return (
    <Flex flexDir="column" w="full" px="5" gap="10">
      <HStack gap="10" w="full" alignItems="center" py="4" px="10">
        <Circle size="100px" bg="tomato" color="white"></Circle>
        <VStack>
          <Text fontSize="3xl" fontWeight="bold">
            AbdulMuizz
          </Text>
          <Text> 0xt4jh4h5g5j3bh5j5j4h4k4h3k5h4j539394b</Text>
        </VStack>
      </HStack>

      <Flex
        w="full"
        alignItems="center"
        justifyContent="space-between"
        py="4"
        px="10"
      >
        <VStack py="5" px="3" borderRadius="25px" gap="3" borderWidth="1px">
          <Text fontSize="3xl" fontWeight="bold">
            Number Of Uploads
          </Text>
          <HStack w="full" justifyContent="center">
            <Text fontSize="md">208</Text>
            <Icon cursor="pointer" as={AiFillPlusSquare} />
          </HStack>
        </VStack>
        <VStack py="5" px="3" borderRadius="25px" gap="3" borderWidth="1px">
          <Text fontSize="3xl" fontWeight="bold">
            Number Of Uploads
          </Text>
          <HStack w="full" justifyContent="center">
            <Text fontSize="md">208</Text>
            <Icon cursor="pointer" as={AiFillPlusSquare} />
          </HStack>
        </VStack>
        <VStack py="5" px="3" borderRadius="25px" gap="3" borderWidth="1px">
          <Text fontSize="3xl" fontWeight="bold">
            Number Of Uploads
          </Text>
          <HStack w="full" justifyContent="center">
            <Text fontSize="md">208</Text>
            <Icon cursor="pointer" as={AiFillPlusSquare} />
          </HStack>
        </VStack>
      </Flex>
      <Tabs
        mx="10"
        px="3"
        py="2"
        borderColor="1px"
        borderWidth="1px"
        borderRadius="10px"
      >
         <Flex mb={'4'}>
            <Text>La</Text>
          </Flex>
        <TabList>
         
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
