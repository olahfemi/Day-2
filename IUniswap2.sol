// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IUniswap2 {
    function swapExactETHForTokens(
        uint amountOutMin, 
        address[] calldata path, 
        address to, 
        uint deadline
        ) external payable returns (uint[] memory amounts);
}