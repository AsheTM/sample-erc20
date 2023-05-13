pragma solidity ^0.8.4;

interface IERC20 {
    
    function allowance(address tokenOwner, address spender) external view virtual returns(uint remaining);
    function approve(address spender, uint tokens) external virtual returns(bool success);
    function balanceOf(address tokenOwner) external view virtual returns(uint);
    function decimals() external view virtual returns(uint8);
    function name() external view virtual returns(string memory);
    function symbol() external view virtual returns(string memory);
    function totalSupply() external view virtual returns(uint);
    function transfer(address to, uint tokens) external virtual returns(bool success);
    function transferFrom(address from, address to, uint tokens) external virtual returns(bool success);

    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Transfer(address indexed from, address indexed to, uint tokens);

}