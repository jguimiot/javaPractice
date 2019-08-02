// import SHA256 algorithm from crypto-js to create secure hashes for the blockchain
const SHA256 = require('crypto-js/sha256');
// Class Block includes methods and functions for an individual block
class Block{
    // Block constructor, requires an index, timestamp, data, and a previousHash
    // requires a new hash, calculated in calculateHash() method
    constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = '';
  } // end constructor
  // method to calculate the has for the current block using SHA256 from crypto-js
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  } // end method calculateHash
} // end class Block
// class Blockchain includes methods and functions for a blockchain
class Blockchain{
    // no arguments constructor
    constructor(){
        this.chain = [];
    } // end constructor
    // method to create the genesis (first) block
    createGenesisBlock(){
        return new Block(0, "01/01/2019", "Genesis block", "0");
    } // end method createGenesisBlock
    // method to return the most recently added block
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    } // end method getLatestBlock
    // simplified method to add a block to the chain
    addBlock(newBlock){
        newBlock.perviousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    } // end method addBlock
    // method to test the integrity of the chain to prevent tampering
    isChainValid(){
      for(let i = 1; i < this.chain.length; i++) {
        const currentBlock = this.chain[i];
        const previousBlock = this.chain[i - 1];

        if(currentBlock.hash !== currentBlock.calculateHash()){
          return false;
        }
        if (currentBlock.hash !== previousBlock.hash){
          return false;
        }
      }
      return true;
    }// end method isChainValid
} // end class Blockchain

// demonstrate functionality of blockchain
let savjeeCoin = new Blockchain();
savjeeCoin.addBlock(new Block(1, "8/2/2019", {amount: 4}));
savjeeCoin.addBlock(new Block(2, "8/4/2019", {amount: 14}));
// display the blockchain as JSON
console.log(JSON.stringify(savjeeCoin, null, 4));

console.log('Is blockchain valid?' + savjeeCoin.isChainValid());

// tamper with the data to test the functionality of the isChainValid
// method and display the results in the console
savjeeCoin.chain[1].data = {amount: 100};
console.log('Is blockchain valid?' + savjeeCoin.isChainValid());
