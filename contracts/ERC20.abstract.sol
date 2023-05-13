pragma solidity ^0.8.4;

import "./ERC20.interface.sol";

abstract contract AERC20 is IERC20 {

    mapping(address => mapping(address => uint)) internal allowed;
    mapping(address => uint) internal balances;
    uint8 public override decimals;
    string public override name;
    string public override symbol;
    uint public override totalSupply;

    constructor(
        string memory _name, 
        string memory _symbol, 
        uint _totalSupply, 
        uint8 _decimals
    ) {
        require(_totalSupply > 0);

        decimals = _decimals;
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
    }

    modifier enoughBalance(address addr, uint balance) {
        require(balances[addr] >= balance);
        _;
    }

    function allowance(address tokenOwner, address spender) external override view returns(uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function approve(address spender, uint tokens) external override enoughBalance(msg.sender, tokens) returns(bool success) {
        require(tokens > 0);

        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        success = true;
    }

    function balanceOf(address tokenOwner) public view override returns(uint) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public override enoughBalance(msg.sender, tokens) returns(bool success) {
        balances[to] += tokens;
        balances[msg.sender] -= tokens;
        emit Transfer(msg.sender, to, tokens);

        return true;
    }

    function transferFrom(address from, address to, uint tokens) external override enoughBalance(from, tokens) returns(bool success) {
        require(allowed[from][msg.sender] >= tokens);

        balances[from] -= tokens;
        allowed [from][msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(from, to, tokens);
        success = true;
    }

}