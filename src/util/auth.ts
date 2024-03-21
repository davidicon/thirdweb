import {
  ThirdwebAuthAppRouter,
  type ThirdwebNextContext,
} from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import type { NextRequest } from "next/server";

export const { ThirdwebAuthHandler } = ThirdwebAuthAppRouter({
  domain: "example.com",
  wallet: new PrivateKeyWallet(process.env.THIRDWEB_AUTH_PRIVATE_KEY || ""),
});


// import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
// import { ThirdwebAuthAppRouter } from "@thirdweb-dev/auth/next";

//   export const { ThirdwebAuthHandler, getUser } = ThirdwebAuthAppRouter({
//   domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "localhost:3000",
//   wallet: new PrivateKeyWallet(process.env.WALLET_KEY || ""),
  
//   callbacks: {
    
//     onLogin: async (userAddress) => {
//       return userAddress
//     },
//     onUser: async (userAddress) => {
//       return userAddress
//     },

//   }
// });

