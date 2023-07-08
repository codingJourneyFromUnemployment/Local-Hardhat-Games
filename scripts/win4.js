const hre = require("hardhat");
const { ethers } = require("ethers");
// add the game address here and update the contract name if necessary
const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game4";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    let eventHandler = false
    const eventListener = await game.addListener("Winner", (winner) => {
        console.log(`winner is ${winner}`);
        eventHandler = true;
    });

    // do whatever you need to do to win the game here:
    const tx = await game.win(56);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
     
    // console.log(receipt);
    console.log(`winner: ${receipt.from}`);
    while(!eventHandler) {
        console.log(eventHandler)
        await new Promise(r => setTimeout(r, 1000));
    }

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
