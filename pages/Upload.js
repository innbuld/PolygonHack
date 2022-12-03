import React from "react";
import {
  Button,
  Flex,
  Stack,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
} from "@chakra-ui/react";
import { AiFillPlusSquare } from "react-icons/ai";
import Head from "next/head";

export default function Upload() {
  return (
    <Flex
      py="4"
      px="10"
      mt="12"
      w="full"
      direction="column"
      alignItems={"center"}
      bg="#1a202c"
    >
      <Flex mb="20">
        <Heading>Upload</Heading>
      </Flex>

      <Flex mt={"-12"} mr="32">
        <FormControl isRequired w={"xl"} mr="96">
          <FormLabel>File Heading</FormLabel>
          <Input
            placeholder="Add Your File Heading"
            variant={"filled"}
            size="sm"
          />
        </FormControl>
      </Flex>

      <Flex mr="32">
        <FormControl isRequired mt="8" w={"xl"} mr="96">
          <FormLabel>Description</FormLabel>
          <Input
            placeholder="Input Your description here"
            variant={"filled"}
            size="lg"
          />
        </FormControl>
      </Flex>
    </Flex>
  );
}
