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
    >
      <Flex mb="20">
        <Heading>Upload</Heading>
      </Flex>

      <FormControl w={'xl'} mr='72'>
        <FormLabel>Heading</FormLabel>
        <Input placeholder="Add Your File Heading" variant={'filled'} size='sm' />
      </FormControl>

      <FormControl mt='8'>
        <FormLabel>Heading</FormLabel>
        <Input placeholder="Add Your File Heading" size='lg' />
      </FormControl>
    </Flex>
  );
}
