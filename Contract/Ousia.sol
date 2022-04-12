// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity >=0.7.3;

contract Ousia {
    address private owner;
    string public constant name = "Ousia";
    uint256 private totalSupply;
    mapping(address => uint256) private balances;

    constructor(uint256 _totalSupply) {
        owner = msg.sender;
        totalSupply = _totalSupply;
        balances[owner] += totalSupply;
    }

    function transfer(uint256 _amount, address _to) external {
        require(balances[msg.sender] >= _amount, "not enough funds");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function balaneOf(address _address)
        external
        view 
        returns (uint256 result)
    {
        result = balances[_address];
    }

    function getTotalSupply() external view returns (uint256 _totalSupply) {
        _totalSupply = totalSupply;
    }
}