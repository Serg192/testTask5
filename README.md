## Installation

1. Clone the repository:

```bash
git clone https://github.com/Serg192/testTask5.git
cd testTask5
```

2. Install dependencies:

```bash
npm install
```

3. Set up the environment
   Create a **.env** file and set **ETH_RPC_URL**. For example:

```bash
ETH_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
```

## Usage

```bash
npm start <transaction hash>
```

The transaction hash can be obtained from a block explorer such as https://sepolia.etherscan.io

## EVM Transaction Lifecycle

1. ##### Creation
   A user creates a transaction by specifying the required parameters (for example: sender, receiver, value, gas limit, etc.).
2. ##### Signing
   The transaction is signed with the sender’s private key, proving ownership of the account.
3. ##### Propagation
   The signed transaction is broadcast to the network and enters the mempool. Transactions are prioritized based on the gas fee the sender is willing to pay.
4. ##### Verification
   Validators check the transaction signature and verify that the sender has enough balance to cover the value and gas costs.
5. ##### Inclusion
   The transaction is included in a block, which is then added to the blockchain.
6. ##### Execution
   The transaction is executed by the EVM. The EVM runs the smart contract code and updates the blockchain state.
7. ##### Confirmation
   The transaction is considered confirmed once it is included in a block that is deep enough in the blockchain. The required number of confirmations depends on the desired level of security.
8. ##### Completion
   After completion, the transaction can be queried by external users or applications to retrieve its execution status and results.

## Meaning of the Extracted Fields

```json
"from"  - the address that sent and signed the transaction
"to"    - the recipient address
"value" - the amount of ETH transferred
"blockNumber" - the block in which the transaction was included
"gasLimit" - the maximum amount of gas the sender was willing to spend
"gasPrice" - the fee paid per unit of gas (legacy transactions). For EIP-1559 transactions, maxFeePerGas may be used instead of gasPrice
"status" - transaction success (1) or failure (0)
```
