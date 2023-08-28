const hre = require('hardhat');

async function main() {

  const KFC = await hre.ethers.getContractFactory(
    'KFC',
  );

  const name = "KFC"
  const symbol = "KFC"

  const kfc = await KFC.deploy(
    name,
    symbol
  );

  await kfc.waitForDeployment();

  console.log(`kfc deployed to ${await kfc.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});