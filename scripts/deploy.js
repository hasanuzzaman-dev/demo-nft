const hre = require('hardhat');
const main = async () => {

  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();

  await myNFT.deployed();

  console.log(
    `MyNFT deployed to ${myNFT.address}`
  );
}

const runMain = async () => {
  try {
    await main();
    process.exit(0); // process successful
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();