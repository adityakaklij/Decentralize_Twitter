// export const contractAddress = "0x0560DFDBf1D66bCCFe985ae41473d5A7B87779c2"
//Contract for the IPFS string //
export const contractAddress = "0xd9a5D032323A2168A7a4C6F88a8fe89b25fE69D8" // IPFS
// Finale Address- 0x2452d890C82DCD63ff97De35AA1a4792d496F77c
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_str",
				"type": "string"
			}
		],
		"name": "createTweet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "counter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tweetMapping",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userArr",
		"outputs": [
			{
				"internalType": "address",
				"name": "userAddres",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "str",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
