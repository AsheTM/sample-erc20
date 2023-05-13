pragma solidity ^0.8.4;

import "./ERC20.abstract.sol";

contract Token is AERC20 {

    uint public launchPadBalance;
    address founder;
    
    event LaunchPad(address indexed to, uint tokens);

    constructor(
        string memory _name, 
        string memory _symbol, 
        uint _totalSupply, 
        uint _ownerBalance, 
        uint8 _decimals
    ) AERC20(_name, _symbol, _totalSupply, _decimals) {
        uint restSupply = _totalSupply - _ownerBalance;

        require(restSupply > 0);

        founder = msg.sender;
        balances[founder] = _ownerBalance;
        launchPadBalance = restSupply;
    }

    function getSomeTokens(uint tokens) external returns(bool) {
        require(launchPadBalance > 0);

        launchPadBalance -= tokens;
        balances[msg.sender] += tokens;
        emit LaunchPad(msg.sender, tokens);

        return true;
    }

}