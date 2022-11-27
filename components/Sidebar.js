import React, { useState } from "react";
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
import { RiHome2Line, RiUploadCloudLine } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const icons = [
    RiHome2Line,
    RiUploadCloudLine,
    FcMoneyTransfer,
    MdAccountCircle,
  ];
  return (
    <chakra.div w="7%" h="86vh">
      {isOpen ? (
        <Flex
          gap={10}
          alignItems="center"
          direction="column"
          py={3}
          h="inherit"
          justifyContent="center"
          borderWidth="1px"
          borderTopColor="none"
          borderRightColor="teal"
        >
          {icons.map((item) => (
            <chakra.div
              cursor="pointer"
              w="full"
              py="3"
              _hover={{
                borderRightWidth: "3px",
                borderRightColor: "teal",
                bg: "#0dccd2",
              }}
              textAlign="center"
              transition=".1s ease-in-out"
            >
              <Icon as={item} />
            </chakra.div>
          ))}
        </Flex>
      ) : (
        <></>
      )}
    </chakra.div>
  );
}
