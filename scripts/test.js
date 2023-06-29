const hre = require('hardhat');

async function main() {
  const networkName = hre.network.name;
  const greeter = await hre.ethers.deployContract('Greeter', [
    'Hello' + networkName + '!',
  ]);

  await greeter.waitForDeployment();
  console.log('Greeter deployed to: ', await greeter.getAddress()); // Logs the address to which our contract is deployed
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
