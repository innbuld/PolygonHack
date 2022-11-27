import React, { useState } from "react";
import { chakra, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { RiHome2Line, RiUploadCloudLine } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAccountCircle } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const icons = [
    { icon: RiHome2Line, name: "Home" },
    { icon: RiUploadCloudLine, name: "Upload" },
    { icon: FcMoneyTransfer, name: "Funds" },
    { icon: MdAccountCircle, name: "Account" },
  ];

  return (
    <chakra.div
      w="7%"
      h="86vh"
      borderRightWidth="1px"
      borderRightColor="teal"
      bg="#1a202c"
      mt="0"
    >
      {isOpen ? (
        <Flex
          gap={10}
          alignItems="center"
          direction="column"
          py={3}
          h="inherit"
          justifyContent="center"
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
                onClick={() => router.push("/")}
                as="a"
              >
                <Icon as={item.icon} color="white" />
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
