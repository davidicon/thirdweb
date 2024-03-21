'use client'
import * as React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
    ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    localWallet, 
    safeWallet, 
    rainbowWallet,
    zerionWallet,
    okxWallet,
} from "@thirdweb-dev/react";
import {Polygon, Sepolia,Ethereum,Goerli,BaseSepoliaTestnet,BaseGoerli,Avalanche,Optimism,Binance} from '@thirdweb-dev/chains' 
import { UserProvider } from "./UserContext";


export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
          <ThirdwebProvider
            supportedChains={[Polygon, Sepolia,Ethereum,Goerli,BaseSepoliaTestnet,BaseGoerli,Avalanche,Optimism,Binance]}
              queryClient={queryClient}
              activeChain="polygon"
              clientId="c9c2895805e25a96f88d809299768283"
              supportedWallets={[
                  metamaskWallet(),
                  coinbaseWallet({ recommended: true }),
                  walletConnect(),
                  safeWallet(),
                  rainbowWallet(),
                  zerionWallet(),
                  okxWallet(),

                  localWallet(), 
              ]}
              authConfig={{
                  authUrl: "/api/auth",
                  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "http://localhost:3000/",
              }}
          >
              {/* <UserProvider> */}
                  {children}
              {/* </UserProvider> */}
          </ThirdwebProvider>
      </QueryClientProvider>
      </>
  );
} 