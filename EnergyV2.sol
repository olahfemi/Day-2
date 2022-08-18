// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EnergyV2 is ERC20 ("EnergyV2", "ERG") {
    constructor() {
        _mint(address(this), 10000e18);
    }

    // function withdraw(address _addr, uint256 amount) public {
    //     uint256 bal = balanceOf(address(this));
    //     require(bal >= amount, "Insufficeint Funds");
    //     _transfer(address(this), _addr, amount);
    // }
}