# Sample ERC20 

## Setup

Install dependencies:

```bash
#!/bin/bash
npm install
```

And provide the following keys in ```.env``` file:

* MNEMONIC - MNEMONIC of your wallet
* PROJECT_ID - Infura API Key
* TOKEN_DECIMALS - Number of decimals (Range: [0, 18])
* TOKEN_NAME - Name of the token
* TOKEN_SYMBOL - Symbol of the token
* TOKEN_TOTAL_SUPPLY - Max Total Supply of the token
* ADDRESS_INDEX (Optional) Index of the address wallet with the same MNEMONIC

## Projects

### &nbsp;&nbsp;&nbsp; __Smart Contract__

Sample of how to create a ERC20 token.

#### Deployment

```bash
#!/bin/bash
npm run migrate:goerli
```

#### Tests

To run tests, execute the following:

```bash
#!/bin/bash
npm run test
```

### &nbsp;&nbsp;&nbsp; __Front End__

Sample UI to interact with smart contract concerning erc20 custom token.

#### Start

Before serving the front end, provide the following keys in ```.env``` file:

* NG_APP_CONTRACT_ADDRESS - Address of the deployed contract (You can get it from logs of the deployed smart contract in [Deployment Smart Contract setion](https://github.com/AsheTM/finder-front#deployment))

And then launch the front end part with:

```bash
#!/bin/bash
npm run start
```
