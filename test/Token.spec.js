const Token = artifacts.require('Token');

const {
    TOKEN_DECIMALS, 
    TOKEN_NAME, 
    TOKEN_SYMBOL, 
    TOKEN_TOTAL_SUPPLY
} = process.env;

contract(Token, async ([account0, account1]) => {
    let tokenInstance;
    let founderAccount;

    before(async () => {
        tokenInstance = await Token.deployed();
        founderAccount = account0;
    });

    it('should have the decimals with value \'' + TOKEN_DECIMALS + '\'', async () => {
        const name = (await tokenInstance.decimals.call()).toString();
        
        assert.equal(name, TOKEN_DECIMALS);
    });

    it('should have the name \'' + TOKEN_NAME + '\'', async () => {
        const name = (await tokenInstance.name.call()).toString();
        
        assert.equal(name, TOKEN_NAME);
    });

    it('should have the symbol \'' + TOKEN_SYMBOL + '\'', async () => {
        const name = (await tokenInstance.symbol.call()).toString();
        
        assert.equal(name, TOKEN_SYMBOL);
    });

    it('should have the totalSupply \'' + TOKEN_TOTAL_SUPPLY + '\'', async () => {
        const name = (await tokenInstance.totalSupply.call()).toString();
        
        assert.equal(name, TOKEN_TOTAL_SUPPLY);
    });

    it('should call balanceOf and returns ' + TOKEN_TOTAL_SUPPLY + ' for founder wallet account address', async () => {
        const balance = (await tokenInstance.balanceOf.call(founderAccount)).toNumber();

        assert.equal(balance.valueOf(), TOKEN_TOTAL_SUPPLY);
    });

    it('should call balanceOf and returns 0 for other wallet account address', async () => {
        const balance = (await tokenInstance.balanceOf.call(account1)).toNumber();

        assert.equal(balance.valueOf(), 0);
    });
});
