/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  NWLStore,
  NWLStoreInterface,
} from "../../../contracts/NWLVault/NWLStore";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
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
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerTransferred",
    type: "event",
  },
  {
    constant: false,
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
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
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "emergencyRewardWithdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: true,
    inputs: [],
    name: "pendingAdmin",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewardTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "safeRewardTransfer",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "setNewOwner",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
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
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setRewardToken",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610a1b806100326000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639ad99e68116100665780639ad99e681461012b578063f5a1f5b414610161578063f5ab16cc14610187578063f851a440146101c1578063fb66fb4d146101c95761009e565b80630e18b681146100a357806326782247146100ad5780634dd18bf5146100d1578063804e523e146100f75780638da5cb5b14610123575b600080fd5b6100ab6101f7565b005b6100b56102f3565b604080516001600160a01b039092168252519081900360200190f35b6100ab600480360360208110156100e757600080fd5b50356001600160a01b0316610302565b6100ab6004803603604081101561010d57600080fd5b506001600160a01b0381351690602001356103b5565b6100b5610423565b6100ab6004803603606081101561014157600080fd5b506001600160a01b03813581169160208101359091169060400135610432565b6100ab6004803603602081101561017757600080fd5b50356001600160a01b03166105bb565b6101ad6004803603602081101561019d57600080fd5b50356001600160a01b03166106b8565b604080519115158252519081900360200190f35b6100b56106cd565b6100ab600480360360408110156101df57600080fd5b506001600160a01b03813516906020013515156106dc565b6001546001600160a01b0316331461024b576040805162461bcd60e51b815260206004820152601260248201527137b7363c903832b73234b7339030b236b4b760711b604482015290519081900360640190fd5b60008054600180546001600160a01b038082166001600160a01b0319808616821787559092169092556040805182815260208101959095528051929093169390927fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a992918290030190a1600080546040516001600160a01b0391821692918516917ff8ccb027dfcd135e000e9d45e6cc2d662578a8825d4c45b5e32e0adf67e79ec691a35050565b6001546001600160a01b031681565b6000546001600160a01b03163314610352576040805162461bcd60e51b815260206004820152600e60248201526d37b7363c9030b236b4b71031b0b760911b604482015290519081900360640190fd5b600180546001600160a01b038381166001600160a01b0319831681179093556040805191909216808252602082019390935281517fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9929181900390910190a15050565b6002546001600160a01b03163314610405576040805162461bcd60e51b815260206004820152600e60248201526d37b7363c9037bbb732b91031b0b760911b604482015290519081900360640190fd5b61041f6001600160a01b038316338363ffffffff61077b16565b5050565b6002546001600160a01b031681565b6002546001600160a01b03163314610482576040805162461bcd60e51b815260206004820152600e60248201526d37b7363c9037bbb732b91031b0b760911b604482015290519081900360640190fd5b6001600160a01b03831660009081526003602052604090205460ff1615156001146104ec576040805162461bcd60e51b815260206004820152601560248201527437b7363c903932bbb0b932103a37b5b2b71031b0b760591b604482015290519081900360640190fd5b6001600160a01b038316156105b657604080516370a0823160e01b815230600482015290516000916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561054557600080fd5b505afa158015610559573d6000803e3d6000fd5b505050506040513d602081101561056f57600080fd5b505190508082111561059a576105956001600160a01b038516848363ffffffff61077b16565b6105b4565b6105b46001600160a01b038516848463ffffffff61077b16565b505b505050565b6000546001600160a01b0316331461060b576040805162461bcd60e51b815260206004820152600e60248201526d37b7363c9030b236b4b71031b0b760911b604482015290519081900360640190fd5b6001600160a01b038116610666576040805162461bcd60e51b815260206004820152601d60248201527f6e6577206f776e657220697320746865207a65726f2061646472657373000000604482015290519081900360640190fd5b600280546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8934ce4adea8d9ce0d714d2c22b86790e41b7731c84b926fbbdc1d40ff6533c990600090a35050565b60036020526000908152604090205460ff1681565b6000546001600160a01b031681565b6000546001600160a01b03163314806106ff57506002546001600160a01b031633145b610750576040805162461bcd60e51b815260206004820152601760248201527f6f6e6c792061646d696e206f72206f776e65722063616e000000000000000000604482015290519081900360640190fd5b6001600160a01b03919091166000908152600360205260409020805460ff1916911515919091179055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526105b69084906107da826001600160a01b0316610980565b61082b576040805162461bcd60e51b815260206004820152601f60248201527f5361666542455032303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106108695780518252601f19909201916020918201910161084a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146108cb576040519150601f19603f3d011682016040523d82523d6000602084013e6108d0565b606091505b509150915081610927576040805162461bcd60e51b815260206004820181905260248201527f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156105b45780806020019051602081101561094357600080fd5b50516105b45760405162461bcd60e51b815260040180806020018281038252602a8152602001806109bd602a913960400191505060405180910390fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906109b457508115155b94935050505056fe5361666542455032303a204245503230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a72315820f367aec28fc677823c57d998cd9f257d466d4cec7965e750552e1f817bf7286564736f6c63430005100032";

type NWLStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NWLStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NWLStore__factory extends ContractFactory {
  constructor(...args: NWLStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NWLStore> {
    return super.deploy(overrides || {}) as Promise<NWLStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NWLStore {
    return super.attach(address) as NWLStore;
  }
  override connect(signer: Signer): NWLStore__factory {
    return super.connect(signer) as NWLStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NWLStoreInterface {
    return new utils.Interface(_abi) as NWLStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NWLStore {
    return new Contract(address, _abi, signerOrProvider) as NWLStore;
  }
}
