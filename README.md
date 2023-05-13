# Erc20SampleFrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# ERC20 Sample Smart Contract

Sample of how to create a ERC20 token.

## Installation

```bash
#!/bin/bash
npm install
```

## Deployment

Create ```.env``` file, and provide the following keys: 

* MNEMONIC - MNEMONIC of your wallet
* PROJECT_ID - Infura API Key
* TOKEN_DECIMALS - Number of decimals (Range: [0, 18])
* TOKEN_NAME - Name of the token
* TOKEN_SYMBOL - Symbol of the token
* TOKEN_TOTAL_SUPPLY - Max Total Supply of the token
* ADDRESS_INDEX (Optional) Index of the address wallet with the same MNEMONIC

Then execute: 

```bash
#!/bin/bash
npm run migrate:goerli
```

## Tests

To run tests, execute the following: 

```bash
#!/bin/bash
npm run test
```
