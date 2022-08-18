import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {

    const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const USDCAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const UNIRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    // const amountIn = ethers.utils.parseUnits("2000", "18");
    const _value = ethers.utils.parseEther("0.01");
    const amountOutMin = ethers.utils.parseUnits("2000", "18");
    const deadline = Math.floor(Date.now() / 1000) + (60 + 10);

    const USDCHolder = "0xf584f8728b874a6a5c7a8d4d387c9aae9172d621";
    await helpers.impersonateAccount(USDCHolder);
    const impersonatedSigner = await ethers.getSigner(USDCHolder);
    await impersonatedSigner.sendTransaction({to: UNIRouter, value: _value});

    const WETH = await ethers.getContractAt(
        "IERC20",
        WETHAddress,
        impersonatedSigner
    );
    const USDC = await ethers.getContractAt(
        "IERC20",
        USDCAddress,
        impersonatedSigner
    );
    const ROUTER = await ethers.getContractAt(
        "IUniswap2",
        UNIRouter,
        impersonatedSigner
    );

    // await USDC.approve(UNIRouter, amountIn);

    const usdcBal = await USDC.balanceOf(USDCHolder);
    // const daiBal = await DAI.balanceOf(USDCHolder);

    console.log("USDC balance before swap", usdcBal);
    // console.log("DAI balance before swap", daiBal);

    await ROUTER.swapExactETHForTokens(
        amountOutMin,
        [WETHAddress, USDCAddress],
        USDCHolder,
        deadline,
        {gasLimit: ethers.utils.hexlify(1000000)}
      );

      const usdcBalAfter = await USDC.balanceOf(USDCHolder);
    // const daiBalAfter = await DAI.balanceOf(USDCHolder);
  
      console.log("USDC balance after swap", usdcBalAfter);
    //   console.log("DAI balance after swap", daiBalAfter);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});