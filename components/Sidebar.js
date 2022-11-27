import React, { useState } from "react";
import {
  Button,
  chakra,
  Flex,
  Text,
  Tooltip,
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
    { icon: RiHome2Line, name: "Home" },
    { icon: RiUploadCloudLine, name: "Upload" },
    { icon: FcMoneyTransfer, name: "Funds" },
    { icon: MdAccountCircle, name: "Account" },
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
          {icons.map((item, i) => (
            <Tooltip
              label={item.name}
              hasArrow
              bg="#0a6265"
              placement="right"
              key={i}
              color="white"
            >
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
                <Icon as={item.icon} />
              </chakra.div>
            </Tooltip>
          ))}
        </Flex>
      ) : (
        <></>
      )}
    </chakra.div>
  );
}
