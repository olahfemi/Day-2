import { ethers } from "hardhat";

async function main() {
  const EnergyV2 = await ethers.getContractFactory("EnergyV2");
  const energyv2 = await EnergyV2.deploy();

  await energyv2.deployed();

  console.log("Energy deployed to:", energyv2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Energy deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
