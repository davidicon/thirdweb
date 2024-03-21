'use client' 
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from "@thirdweb-dev/react";

const UserContext = createContext({
  address: '',
  setAddress: (address: string) => {},
});

export const UserProvider = ({ children }:{children:any}) => {
  const { user } = useUser();
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (user) {
      // Assuming user object has an `address` field
      setAddress(user.address);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ address, setAddress }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserAddress = () => useContext(UserContext);