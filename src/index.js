import * as dotenv from "dotenv";
dotenv.config();

import * as ethers from "ethers";
const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC_URL);

function readTransactionHash() {
  const args = process.argv.slice(2);

  if (args.length !== 1) throw Error(`usage: npm start [transaction hash]`);

  return args[0];
}

async function testTask5() {
  try {
    const tsHash = readTransactionHash();
    const transaction = await provider.getTransaction(tsHash);
    const transactionReceipt = await provider.getTransactionReceipt(tsHash);

    if (transaction == null || transactionReceipt == null) {
      console.error(`Transaction: ${tsHash} was not found!`);
      return;
    }

    const transactionInfo = {
      from: transaction.from,
      to: transaction.to,
      value: transaction.value,
      blockNumber: transaction.blockNumber,
      gasLimit: transaction.gasLimit,
      gasPrice: transaction.gasPrice,
      maxFeePerGas: transaction.maxFeePerGas,
      status: transactionReceipt.status,
    };

    console.log(transactionInfo);
  } catch (e) {
    console.error(e.message);
  }
}

testTask5();
