import React, { createContext, useEFfect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';
import { useEffect } from 'react';

export const TransactionContext = createContext();
const { ethereum } = window; // get ethereum object from browser window(possible only if metamask is installed)

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    // fetch contract
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
}

export const TransactionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        if (!ethereum) return alert("Please install metamask");

        const accounts = await ethereum.request({ method: 'eth_accounts' });
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet }}>
            {children}
        </TransactionContext.Provider>
    )
}