const hre = require('hardhat');

async function main() {

  const TacoBell = await hre.ethers.getContractFactory(
    'TacoBell',
  );

  const name = "TacoBell"
  const symbol = "TB"

  const tacoBell = await TacoBell.deploy(
    name,
    symbol
  );

  await tacoBell.waitForDeployment();

  console.log(`tacoBell deployed to ${await tacoBell.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});