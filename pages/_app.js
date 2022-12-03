import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import SimpleSidebar from "../components/Sidebar";
import Nav from "../components/Navbar";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <ChakraProvider>
          <SimpleSidebar>
            <Nav />
            <Component {...pageProps} />
          </SimpleSidebar>
        </ChakraProvider>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;
