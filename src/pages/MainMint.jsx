import React, { useState } from "react";
import { ethers, BigNumber } from "ethers";
//import OusiaNFT from "ReExoBits.json";
/* 
const OusiaAddress = "";
const MainMint = ({ accounts, setAccounts}) => {
    const { mintAccount, setMintAccount} = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                OusiaAddress,
                OusiaNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAccount));
                console.log("response:", response);
            } catch(err) {
                console.log("err:", err);
            }
        }
    }
    const handleDecrement = () => {
        if (mintAccount <= 1) return;
        setMintAccount(mintAccount - 1);

    };
    const handleIncrement = () => {
        if (mintAccount >= 1) return;
        setMintAccount(mintAccount + 1);
    };
    return (
        <div>

        </div>
    )
}
*/