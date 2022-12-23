export const contractAddress = "0x15c403E8C5f37DF3A5B837CFcc241D6D9571F5ad" // Polygon
// export const contractAddress = "0xd9a5D032323A2168A7a4C6F88a8fe89b25fE69D8" // OLD
// export const contractAddress = "0x2452d890C82DCD63ff97De35AA1a4792d496F77c" // Rinkeby
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
