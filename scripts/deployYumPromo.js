const hre = require('hardhat');

async function main() {

  const YumPromo = await hre.ethers.getContractFactory(
    'YumPromo',
  );

  const restaurants = ["0xa4AFA1fE497506cBcc20e06F2B88B539468329f5", "0x813E558c456461A289da36642bD2c2e8a5aE65d9"];

  const yumPromo = await YumPromo.deploy(
    restaurants
  );

  await yumPromo.waitForDeployment();

  console.log(`yumPromo deployed to ${await yumPromo.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});