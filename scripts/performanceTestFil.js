const fs = require('fs');
const { ethers } = require('hardhat');

async function main() {
  const iterations = 10; // Number of iterations
  const network = await hre.network.name;
  const fileName = 'performance-results-' + network + '.json';

  const owner = new ethers.Wallet(
    process.env.WALLET_PRIVATE_KEY,
    ethers.provider
  );

  const results = [];
  const executionTimes = [];
  const gasUsages = [];

  // Deploy the contract and measure deployment gas used
  const startDeployTimestamp = Date.now();
  const contract = await ethers.deployContract('Greeter', {
    signer: owner,
    gasLimit: 5000000,
    gasPrice: 1000000000,
  });
  await contract.waitForDeployment();
  // const { gasUsed: deployGasUsed } = await contract.deployTransaction.wait(); // Wait for deployment confirmation and get gas used
  const endDeployTimestamp = Date.now();
  const deploymentTime = endDeployTimestamp - startDeployTimestamp;
  console.log(`Contract deployed in ${deploymentTime} ms`);
  console.log(`Contract deployed at address: ${await contract.getAddress()}`); // Print the deployed contract address
  console.log(contract.target); //same as above
  const address = contract.target;
  // console.log(`Deployment gas used: ${deployGasUsed.toString()}`);
  // Perform the function call and measure transaction finalization time

  for (let i = 0; i < iterations; i++) {
    const startTimestamp = Date.now();
    // const txRes = await contract.performComputations(10); // Replace with your function call
    console.log(network);
    const txRes = await contract.setGreeting(network, {
      gasLimit: 5000000,
      gasPrice: 1000000000,
    });
    console.log(`Transaction result: ${txRes}`);
    // await txRes.wait(); // Wait for transaction confirmation
    const txReceipt = await txRes.wait(); // Wait for transaction confirmation and get gas used
    console.log(txReceipt);
    const gasUsed = txReceipt.gasUsed;
    try {
      const greet = await contract.greet();
      console.log(greet.toString());
    } catch (error) {
      console.error('Error calling greet:', error);
    }
    const endTimestamp = Date.now();
    const executionTime = endTimestamp - startTimestamp;
    console.log(`Execution time for run ${i + 1}: ${executionTime} ms`);
    console.log(`Gas used for run ${i + 1}: ${gasUsed.toString()}`);
    executionTimes.push(executionTime);
    gasUsages.push(gasUsed.toString());

    results.push({
      run: i + 1,
      executionTime,
      gasUsed: gasUsed.toString(),
    });
  }

  // Calculate average time and average gas usage over number of iterations
  const averageTime =
    executionTimes.reduce((acc, time) => acc + time, 0) / iterations;
  const averageGas = gasUsages.reduce((acc, gas) => acc + gas, 0) / iterations;
  console.log(`Average execution time: ${averageTime} ms`);
  console.log(`Average gas used: ${averageGas}`);

  // Write results to a file
  const fileData = {
    network,
    address,
    iterations,
    averageTime,
    averageGas,
    results,
  };

  fs.writeFileSync(fileName, JSON.stringify(fileData, null, 2));
  console.log(`Performance results written to ${fileName}`);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
