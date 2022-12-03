import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import SimpleSidebar from "../components/Sidebar";
import Nav from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SimpleSidebar>
        <Nav>
          <Component {...pageProps} />
        </Nav>
      </SimpleSidebar>
    </ChakraProvider>
  );
}

export default MyApp;
