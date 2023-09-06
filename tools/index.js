const { ethers } = require('ethers');

const providerUrl = 'TODO';

const provider = new ethers.providers.JsonRpcProvider(providerUrl);

const contractAddress = '0x6e38A457C722C6011B2dfa06d49240e797844d66';

const abi = [{ "constant": false, "inputs": [], "name": "number_of_claims", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "claims", "outputs": [{ "name": "claimant", "type": "address" }, { "name": "message", "type": "string" }, { "name": "block_number", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "message", "type": "string" }], "name": "claim", "outputs": [], "type": "function" }];

const contract = new ethers.Contract(contractAddress, abi, provider);

async function fetchClaims() {
    for (let i = 0; i <= 4624; i++) {
        try {
            const claim = await contract.claims(i);
            console.log(`Index: ${i}, Claimant: ${claim.claimant}, Message: ${claim.message}, BlockNumber: ${claim.block_number}`);
        } catch (error) {
            console.error(`Error fetching claim at index ${i}:`, error);
        }
    }
}

fetchClaims();
