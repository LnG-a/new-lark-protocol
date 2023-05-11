/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../common";
import type {
  SXP,
  SXPInterface,
} from "../../../../contracts/Governance/SXP.sol/SXP";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Freezed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "LockUser",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "UnFreezed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "UnlockUser",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "approveAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "freeze",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "lockUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unfreeze",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "unlockUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff60a01b191690553480156200001e57600080fd5b506040516200298238038062002982833981810160405260208110156200004457600080fd5b505160006200005b6001600160e01b036200017816565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35060408051808201909152600580825264537769706560d81b6020909201918252620000d3916007916200017d565b506040805180820190915260038082526205358560ec1b602090920191825262000100916006916200017d565b506005805460ff191660121790556aefa5859bc8dff926f8000060048190556001600160a01b0382166000818152600260209081526040808320859055805194855251929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3506200021f565b335b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001c057805160ff1916838001178555620001f0565b82800160010185558215620001f0579182015b82811115620001f0578251825591602001919060010190620001d3565b50620001fe92915062000202565b5090565b6200017a91905b80821115620001fe576000815560010162000209565b612753806200022f6000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063782d6fe11161010f578063bd1870a3116100a2578063dd62ed3e11610071578063dd62ed3e146106a4578063e7a324dc146106d2578063f1127ed8146106da578063f2fde38b1461072c576101e5565b8063bd1870a314610556578063c3cda5201461057c578063cae9ca51146105c3578063d79725801461067e576101e5565b806395d89b41116100de57806395d89b41146104d0578063a457c2d7146104d8578063a9059cbb14610504578063b4b5ea5714610530576101e5565b8063782d6fe11461044d5780637ecebe001461049a578063893d20e8146104c05780638da5cb5b146104c8576101e5565b806342966c68116101875780636a28f000116101565780636a28f000146103d85780636fcfff45146103e057806370a082311461041f578063715018a614610445576101e5565b806342966c6814610349578063587cde1e146103665780635c19a95c146103a857806362a5af3b146103d0576101e5565b806320606b70116101c357806320606b70146102c157806323b872dd146102c9578063313ce567146102ff578063395093511461031d576101e5565b806306fdde03146101ea578063095ea7b31461026757806318160ddd146102a7575b600080fd5b6101f2610752565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022c578181015183820152602001610214565b50505050905090810190601f1680156102595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102936004803603604081101561027d57600080fd5b506001600160a01b0381351690602001356107e8565b604080519115158252519081900360200190f35b6102af6108aa565b60408051918252519081900360200190f35b6102af6108b0565b610293600480360360608110156102df57600080fd5b506001600160a01b038135811691602081013590911690604001356108cb565b6103076109f9565b6040805160ff9092168252519081900360200190f35b6102936004803603604081101561033357600080fd5b506001600160a01b038135169060200135610a02565b6102936004803603602081101561035f57600080fd5b5035610b14565b61038c6004803603602081101561037c57600080fd5b50356001600160a01b0316610bd4565b604080516001600160a01b039092168252519081900360200190f35b6103ce600480360360208110156103be57600080fd5b50356001600160a01b0316610bef565b005b6103ce610ca8565b6103ce610d3c565b610406600480360360208110156103f657600080fd5b50356001600160a01b0316610dca565b6040805163ffffffff9092168252519081900360200190f35b6102af6004803603602081101561043557600080fd5b50356001600160a01b0316610de2565b6103ce610dfd565b6104796004803603604081101561046357600080fd5b506001600160a01b038135169060200135610e9f565b604080516bffffffffffffffffffffffff9092168252519081900360200190f35b6102af600480360360208110156104b057600080fd5b50356001600160a01b03166110cd565b61038c6110df565b61038c6110ee565b6101f26110fd565b610293600480360360408110156104ee57600080fd5b506001600160a01b03813516906020013561115e565b6102936004803603604081101561051a57600080fd5b506001600160a01b038135169060200135611270565b6104796004803603602081101561054657600080fd5b50356001600160a01b0316611328565b6103ce6004803603602081101561056c57600080fd5b50356001600160a01b0316611394565b6103ce600480360360c081101561059257600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135611435565b610293600480360360608110156105d957600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561060957600080fd5b82018360208201111561061b57600080fd5b8035906020019184600183028401116401000000008311171561063d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506117c9945050505050565b6103ce6004803603602081101561069457600080fd5b50356001600160a01b031661198e565b6102af600480360360408110156106ba57600080fd5b506001600160a01b0381358116916020013516611a35565b6102af611a60565b61070c600480360360408110156106f057600080fd5b5080356001600160a01b0316906020013563ffffffff16611a7b565b6040805163ffffffff909316835260208301919091528051918290030190f35b6103ce6004803603602081101561074257600080fd5b50356001600160a01b0316611aa8565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107de5780601f106107b3576101008083540402835291602001916107de565b820191906000526020600020905b8154815290600101906020018083116107c157829003601f168201915b5050505050905090565b60008054600160a01b900460ff161561083a576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff161561088e576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b6108a0610899611b09565b8484611b0d565b5060015b92915050565b60045490565b60405180604361261982396043019050604051809103902081565b60008054600160a01b900460ff161561091d576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615610971576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b61097c848484611bf9565b6000610986611b09565b6001600160a01b0380871660009081526003602090815260408083209385168352929052205490915060001981146109ed576109ed86836109e8876040518060600160405280602581526020016125f46025913986919063ffffffff611db816565b611b0d565b50600195945050505050565b60055460ff1690565b60008054600160a01b900460ff1615610a54576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615610aa8576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b6108a0610ab3611b09565b846109e8856040518060600160405280602181526020016125446021913960036000610add611b09565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff611e4f16565b60008054600160a01b900460ff1615610b66576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615610bba576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b610bcb610bc5611b09565b83611ead565b5060015b919050565b6008602052600090815260409020546001600160a01b031681565b600054600160a01b900460ff1615610c40576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615610c94576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b610ca5610c9f611b09565b82611fed565b50565b610cb0611b09565b6000546001600160a01b03908116911614610d00576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b6000805460ff60a01b1916600160a01b1781556040517f962a6139ca22015759d0878e2cf5d770dcb8152e1d5ba08e46a969dd9b154a9c9190a1565b610d44611b09565b6000546001600160a01b03908116911614610d94576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b6000805460ff60a01b191681556040517ff0daac2271a735ea786b9adf80dfcbd6a3cbd52f3cab0a78337114692d5faf5d9190a1565b600a6020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526002602052604090205490565b610e05611b09565b6000546001600160a01b03908116911614610e55576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000438210610eea576040805162461bcd60e51b8152602060048201526012602482015271139bdd0819195d195c9b5a5b9959081e595d60721b604482015290519081900360640190fd5b6001600160a01b0383166000908152600a602052604090205463ffffffff1680610f185760009150506108a4565b6001600160a01b038416600090815260096020908152604080832063ffffffff600019860181168552925290912054168310610f90576001600160a01b038416600090815260096020908152604080832063ffffffff6000198601168452909152902060010154610f889061206d565b9150506108a4565b6001600160a01b038416600090815260096020908152604080832083805290915290205463ffffffff16831015610fcb5760009150506108a4565b600060001982015b8163ffffffff168163ffffffff16111561108d57600282820363ffffffff16048103610ffd61250a565b506001600160a01b038716600090815260096020908152604080832063ffffffff8086168552908352928190208151808301909252805490931680825260019093015491810191909152908714156110685761105c816020015161206d565b955050505050506108a4565b805163ffffffff1687111561107f57819350611086565b6001820392505b5050610fd3565b6001600160a01b038616600090815260096020908152604080832063ffffffff861684529091529020600101546110c39061206d565b9695505050505050565b600b6020526000908152604090205481565b60006110e96110ee565b905090565b6000546001600160a01b031690565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107de5780601f106107b3576101008083540402835291602001916107de565b60008054600160a01b900460ff16156111b0576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615611204576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b6108a061120f611b09565b846109e8856040518060600160405280602281526020016125d26022913960036000611239611b09565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff611db816565b60008054600160a01b900460ff16156112c2576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff1615611316576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b6108a0611321611b09565b8484611bf9565b6001600160a01b0381166000908152600a602052604081205463ffffffff168061135357600061138d565b6001600160a01b038316600090815260096020908152604080832063ffffffff600019860116845290915290206001015461138d9061206d565b9392505050565b61139c611b09565b6000546001600160a01b039081169116146113ec576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b6001600160a01b038116600081815260016020526040808220805460ff19169055517f687691c08a3e67a160ba20a32cb1c56791955f12c5ff5d5fcf62bc456ad79ea19190a250565b600054600160a01b900460ff1615611486576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff16156114da576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b600060405180806126196043913960430190506040518091039020600760405180828054600181600116156101000203166002900480156115525780601f10611530576101008083540402835291820191611552565b820191906000526020600020905b81548152906001019060200180831161153e575b50509150506040518091039020611567612087565b3060405160200180858152602001848152602001838152602001826001600160a01b03166001600160a01b03168152602001945050505050604051602081830303815290604052805190602001209050600060405180806126c4603a91396040805191829003603a0182206020808401919091526001600160a01b038c1683830152606083018b905260808084018b90528251808503909101815260a08401835280519082012061190160f01b60c085015260c2840187905260e2808501829052835180860390910181526101028501808552815191840191909120600091829052610122860180865281905260ff8c1661014287015261016286018b905261018286018a9052935191965092945091926001926101a28083019392601f198301929081900390910190855afa1580156116a5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611701576040805162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b604482015290519081900360640190fd5b6001600160a01b0381166000908152600b602052604090208054600181019091558914611765576040805162461bcd60e51b815260206004820152600d60248201526c496e76616c6964206e6f6e636560981b604482015290519081900360640190fd5b874211156117b2576040805162461bcd60e51b8152602060048201526015602482015274151a19481cda59db985d1d5c9948195e1c1a5c9959605a1b604482015290519081900360640190fd5b6117bc818b611fed565b505050505b505050505050565b60008054600160a01b900460ff161561181b576040805162461bcd60e51b815260206004820152600f60248201526e151bdad95b881a5cc81b1bd8dad959608a1b604482015290519081900360640190fd5b3360009081526001602052604090205460ff161561186f576040805162461bcd60e51b815260206004820152600c60248201526b213637b1b5b2b2103ab9b2b960a11b604482015290519081900360640190fd5b61188161187a611b09565b8585611b0d565b836001600160a01b0316638f4ffcb1611898611b09565b8530866040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561191d578181015183820152602001611905565b50505050905090810190601f16801561194a5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561196c57600080fd5b505af1158015611980573d6000803e3d6000fd5b506001979650505050505050565b611996611b09565b6000546001600160a01b039081169116146119e6576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b6001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517f169aadf55dc2098830ccf9f334e3ce3933b6e895b9114fc9f49242f2be61fe8e9190a250565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b60405180603a6126c48239603a019050604051809103902081565b60096020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b611ab0611b09565b6000546001600160a01b03908116911614611b00576040805162461bcd60e51b8152602060048201819052602482015260008051602061265c833981519152604482015290519081900360640190fd5b610ca58161208b565b3390565b6001600160a01b038316611b525760405162461bcd60e51b815260040180806020018281038252602481526020018061258b6024913960400191505060405180910390fd5b6001600160a01b038216611b975760405162461bcd60e51b81526004018080602001828103825260228152602001806125226022913960400191505060405180910390fd5b6001600160a01b03808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316611c3e5760405162461bcd60e51b815260040180806020018281038252602581526020018061267c6025913960400191505060405180910390fd5b6001600160a01b038216611c835760405162461bcd60e51b81526004018080602001828103825260238152602001806126a16023913960400191505060405180910390fd5b611cc6816040518060600160405280602381526020016125af602391396001600160a01b038616600090815260026020526040902054919063ffffffff611db816565b6001600160a01b038085166000908152600260208181526040808420959095558451808601865260158152745468652062616c616e6365206f766572666c6f777360581b818301529387168352529190912054611d2a91839063ffffffff611e4f16565b6001600160a01b0380841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a36001600160a01b03808416600090815260086020526040808220548584168352912054611db39291821691168361212b565b505050565b60008184841115611e475760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611e0c578181015183820152602001611df4565b50505050905090810190601f168015611e395780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008383018285821015611ea45760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611e0c578181015183820152602001611df4565b50949350505050565b6001600160a01b038216611ef25760405162461bcd60e51b81526004018080602001828103825260218152602001806126fe6021913960400191505060405180910390fd5b604080518082018252601f81527f546865206275726e20616d6f756e7420657863656564732062616c616e6365006020808301919091526001600160a01b038516600090815260029091529190912054611f5391839063ffffffff611db816565b6001600160a01b038316600090815260026020526040902055600454611f7f908263ffffffff6122e816565b6004556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a36001600160a01b03808316600090815260086020526040812054611fe99216908361212b565b5050565b6001600160a01b03808316600081815260086020818152604080842080546002845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461206782848361212b565b50505050565b6000600160601b82106120835750600019610bcf565b5090565b4690565b6001600160a01b0381166120d05760405162461bcd60e51b81526004018080602001828103825260268152602001806125656026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b816001600160a01b0316836001600160a01b03161415801561214d5750600081115b15611db3576001600160a01b0383161561221f576001600160a01b0383166000908152600a602052604081205463ffffffff16908161218d5760006121bf565b6001600160a01b038516600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b9050600061220d846040518060400160405280601a81526020017f54686520766f746520616d6f756e7420756e646572666c6f777300000000000081525084611db89092919063ffffffff16565b905061221b8684848461232a565b5050505b6001600160a01b03821615611db3576001600160a01b0382166000908152600a602052604081205463ffffffff16908161225a57600061228c565b6001600160a01b038416600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b905060006122da846040518060400160405280601981526020017f54686520766f746520616d6f756e74206f766572666c6f77730000000000000081525084611e4f9092919063ffffffff16565b90506117c18584848461232a565b600061138d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611db8565b600061236b436040518060400160405280602081526020017f54686520626c6f636b206e756d626572206578636565647320333220626974738152506124ac565b905060008463ffffffff161180156123b457506001600160a01b038516600090815260096020908152604080832063ffffffff6000198901811685529252909120548282169116145b156123f1576001600160a01b038516600090815260096020908152604080832063ffffffff60001989011684529091529020600101829055612462565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600984528681208b8616825284528681209551865490861663ffffffff199182161787559251600196870155908152600a9092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b60008164010000000084106125025760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611e0c578181015183820152602001611df4565b509192915050565b60408051808201909152600080825260208201529056fe43616e6e6f7420617070726f766520746f20746865207a65726f206164647265737354686520696e6372656173656420616c6c6f77616e6365206f766572666c6f77734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737343616e6e6f7420617070726f76652066726f6d20746865207a65726f2061646472657373546865207472616e7366657220616d6f756e7420657863656564732062616c616e63655468652064656372656173656420616c6c6f77616e63652062656c6f77207a65726f546865207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365454950373132446f6d61696e28737472696e67206e616d652c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e7472616374294f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657243616e6e6f74207472616e736665722066726f6d20746865207a65726f206164647265737343616e6e6f74207472616e7366657220746f20746865207a65726f206164647265737344656c65676174696f6e28616464726573732064656c6567617465652c75696e74323536206e6f6e63652c75696e74323536206578706972792943616e6e6f74206275726e2066726f6d20746865207a65726f2061646472657373a265627a7a72315820524d0018d57494189c74fb04b128f2bb5912c66ecd026897ca32c6b1ca51012564736f6c63430005100032";

type SXPConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SXPConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SXP__factory extends ContractFactory {
  constructor(...args: SXPConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SXP> {
    return super.deploy(account, overrides || {}) as Promise<SXP>;
  }
  override getDeployTransaction(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(account, overrides || {});
  }
  override attach(address: string): SXP {
    return super.attach(address) as SXP;
  }
  override connect(signer: Signer): SXP__factory {
    return super.connect(signer) as SXP__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SXPInterface {
    return new utils.Interface(_abi) as SXPInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SXP {
    return new Contract(address, _abi, signerOrProvider) as SXP;
  }
}