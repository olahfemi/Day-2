const helpers = require("@nomicfoundation/hardhat-network-helpers");
require("dotenv").config({ path: ".env" });
import { ethers } from "hardhat";

async function main() {

    const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    // const amountIn = ethers.utils.parseUnits("2000", "18");
    // const amountOutMin = ethers.utils.parseUnits("2000", "18");
    const deadline = Math.floor(Date.now() / 1000) + (60 + 10);

    const USDCHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
    await helpers.impersonateAccount(USDCHolder);
    const impersonatedSigner = await ethers.getSigner(USDCHolder);

    const USDC = await ethers.getContractAt(
        "IERC20",
        USDCAddress,
        impersonatedSigner
    );
    const DAI = await ethers.getContractAt("IERC20", DAIAddress);
    const ROUTER = await ethers.getContractAt(
        "IUniswap1",
        UNIRouter,
        impersonatedSigner
    );

    await USDC.approve(UNIRouter, ethers.utils.parseUnits("2000", "18"), );

    // const usdcBal = await USDC.balanceOf(USDCHolder);
    // const daiBal = await DAI.balanceOf(USDCHolder);

    // console.log("USDC balance before swap", usdcBal);
    // console.log("DAI balance before swap", daiBal);

    const rec = await ROUTER.swapExactTokensForTokens(
        2000,
        2000,
        [USDCAddress, DAIAddress],
        USDCHolder,
        deadline
      );

    // const usdcBalAfter = await USDC.balanceOf(USDCHolder);
    // const daiBalAfter = await DAI.balanceOf(USDCHolder);
  
    //   console.log("USDC balance after swap", usdcBalAfter);
    //   console.log("DAI balance after swap", daiBalAfter);
    console.log(rec);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});