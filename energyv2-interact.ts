require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {

//   @ts-ignore
  let wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const _value = 1;

  const CONTRACTADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const EnergyV2 = await ethers.getContractAt("IEnergyV2", CONTRACTADDRESS);

    const balance = await EnergyV2.transfer("0x7Ca74c1abfe9e15b47760a3c5ebe5B90346f9ABC", _value);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Transaction Hash: 0x4065401f0005389fd248314294761991c7ac3c7b9f86685264972d9ee620cfe4
// Network: Goerli