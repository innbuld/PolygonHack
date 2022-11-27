import { React } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Flex>
        <Sidebar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
