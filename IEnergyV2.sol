// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

interface IEnergyV2 {
   function transfer(address to, uint256 amount) external returns (bool); 
}