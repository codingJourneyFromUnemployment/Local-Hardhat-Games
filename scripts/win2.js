const hre = require("hardhat");
const { ethers } = require("ethers");
// add the game address here and update the contract name if necessary
const gameAddr = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const contractName = "Game2";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    let eventHandler = false
    const eventListener = await game.addListener("Winner", (winner) => {
        console.log(`winner is ${winner}`);
        eventHandler = true;
    });

    // do whatever you need to do to win the game here:
    await game.setX(30);
    await game.setY(20);
    const tx = await game.win();

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
