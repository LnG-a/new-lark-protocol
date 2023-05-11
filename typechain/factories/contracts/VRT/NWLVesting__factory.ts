/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  NWLVesting,
  NWLVestingInterface,
} from "../../../contracts/VRT/NWLVesting";
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
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
    ],
    name: "NWLVested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NWLWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vrtConversionAddress",
        type: "address",
      },
    ],
    name: "VRTConversionSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountClaimed",
        type: "uint256",
      },
    ],
    name: "VestedTokensClaimed",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "TOTAL_VESTING_TIME",
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
        internalType: "contract NWLVestingProxy",
        name: "nwlVestingProxy",
        type: "address",
      },
    ],
    name: "_become",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_notEntered",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getCurrentTime",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "getWithdrawableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "totalWithdrawableAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVestedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWithdrawnAmount",
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
    name: "implementation",
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
        name: "_nwlAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialized",
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
    constant: true,
    inputs: [],
    name: "nwl",
    outputs: [
      {
        internalType: "contract IBEP20",
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
    name: "nwlDecimalsMultiplier",
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
    inputs: [],
    name: "pendingImplementation",
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
        name: "_vrtConversionAddress",
        type: "address",
      },
    ],
    name: "setVRTConverter",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vestings",
    outputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "withdrawnAmount",
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
    name: "vrtConversionAddress",
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
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611489806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063bb443b6c116100a2578063ec1afd7e11610071578063ec1afd7e1461027b578063f30f7c0514610283578063f67771751461028b578063f851a440146102cf578063f94af54e146102d757610116565b8063bb443b6c146101e9578063bd84477d146101f1578063c4d66de81461024d578063d8438ae81461027357610116565b8063396f7b23116100e9578063396f7b231461019d5780633ccfd60b146101a557806347e7ef24146101ad5780635c60da1b146101d95780636c81637c146101e157610116565b8063158ef93e1461011b5780631d504dc614610137578063267822471461015f57806329cb924d14610183575b600080fd5b6101236102fd565b604080519115158252519081900360200190f35b61015d6004803603602081101561014d57600080fd5b50356001600160a01b031661030d565b005b61016761040e565b604080516001600160a01b039092168252519081900360200190f35b61018b61041d565b60408051918252519081900360200190f35b610167610421565b61015d610430565b61015d600480360360408110156101c357600080fd5b506001600160a01b0381351690602001356106bc565b610167610904565b61018b610913565b61016761091f565b61021d6004803603604081101561020757600080fd5b506001600160a01b03813516906020013561092e565b604080516001600160a01b0390951685526020850193909352838301919091526060830152519081900360800190f35b61015d6004803603602081101561026357600080fd5b50356001600160a01b031661097b565b610123610aad565b61018b610abd565b610167610ac5565b6102b1600480360360208110156102a157600080fd5b50356001600160a01b0316610ad4565b60408051938452602084019290925282820152519081900360600190f35b610167610ca6565b61015d600480360360208110156102ed57600080fd5b50356001600160a01b0316610cb5565b600354600160a81b900460ff1681565b806001600160a01b031663f851a4406040518163ffffffff1660e01b815260040160206040518083038186803b15801561034657600080fd5b505afa15801561035a573d6000803e3d6000fd5b505050506040513d602081101561037057600080fd5b50516001600160a01b031633146103b85760405162461bcd60e51b81526004018080602001828103825260228152602001806114336022913960400191505060405180910390fd5b806001600160a01b031663c1e803346040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103f357600080fd5b505af1158015610407573d6000803e3d6000fd5b5050505050565b6001546001600160a01b031681565b4290565b6003546001600160a01b031681565b600354600160a81b900460ff161515600114610493576040805162461bcd60e51b815260206004820152601d60248201527f4e574c56657374696e67206973206e6f7420696e697469616c697a6564000000604482015290519081900360640190fd5b336000818152600660205260409020546104de5760405162461bcd60e51b815260040180806020018281038252602881526020018061139f6028913960400191505060405180910390fd5b33600081815260066020526040812080549091805b8281101561057a57600084828154811061050957fe5b90600052602060002090600402019050600080610533836002015484600101548560030154610d97565b9092509050801561056c5761054e858263ffffffff610dd016565b6003840154909550610566908263ffffffff610dd016565b60038401555b5050508060010190506104f3565b5080156104075760048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b1580156105d057600080fd5b505afa1580156105e4573d6000803e3d6000fd5b505050506040513d60208110156105fa57600080fd5b5051905081811015610653576040805162461bcd60e51b815260206004820152601f60248201527f496e73756666696369656e74204e574c20666f72207769746864726177616c00604482015290519081900360640190fd5b604080516001600160a01b03871681526020810184905281517f10c835247bbc00357c7ea2cc1c938250bfd8ef10ec571696203456a2023bae8f929181900390910190a16004546106b4906001600160a01b0316868463ffffffff610e3316565b505050505050565b600354600160a81b900460ff16151560011461071f576040805162461bcd60e51b815260206004820152601d60248201527f4e574c56657374696e67206973206e6f7420696e697469616c697a6564000000604482015290519081900360640190fd5b6005546001600160a01b031633146107685760405162461bcd60e51b815260040180806020018281038252603081526020018061136f6030913960400191505060405180910390fd5b816001600160a01b0381166107bd576040805162461bcd60e51b8152602060048201526016602482015275416464726573732063616e6e6f74206265205a65726f60501b604482015290519081900360640190fd5b60008211610812576040805162461bcd60e51b815260206004820152601f60248201527f4465706f73697420616d6f756e74206d757374206265206e6f6e2d7a65726f00604482015290519081900360640190fd5b6001600160a01b03831660009081526006602052604090206108326112cf565b6040518060800160405280866001600160a01b0316815260200161085461041d565b815260208082018790526000604092830181905285546001808201885587835291839020855160049092020180546001600160a01b0319166001600160a01b039283161781558584015192810183905585850151600282018190556060808801516003909301839055865194855294840152828501529251939450918816927f8a17d40766eab5661dcb42ca88a5ff3751044ce5adcb4832604ea849b9cb7fcc9281900390910190a25050505050565b6002546001600160a01b031681565b670de0b6b3a764000081565b6005546001600160a01b031681565b6006602052816000526040600020818154811061094757fe5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169450925084565b6000546001600160a01b031633146109c45760405162461bcd60e51b815260040180806020018281038252602881526020018061140b6028913960400191505060405180910390fd5b600354600160a81b900460ff1615610a0d5760405162461bcd60e51b815260040180806020018281038252602181526020018061134e6021913960400191505060405180910390fd5b6001600160a01b038116610a68576040805162461bcd60e51b815260206004820152601a60248201527f5f6e776c416464726573732063616e6e6f74206265205a65726f000000000000604482015290519081900360640190fd5b600480546001600160a01b039092166001600160a01b03199092169190911790556003805460ff60a81b1960ff60a01b19909116600160a01b1716600160a81b179055565b600354600160a01b900460ff1681565b6301e1338081565b6004546001600160a01b031681565b6000806000600360159054906101000a900460ff1615156001151514610b41576040805162461bcd60e51b815260206004820152601d60248201527f4e574c56657374696e67206973206e6f7420696e697469616c697a6564000000604482015290519081900360640190fd5b836001600160a01b038116610b96576040805162461bcd60e51b8152602060048201526016602482015275416464726573732063616e6e6f74206265205a65726f60501b604482015290519081900360640190fd5b6001600160a01b0385166000908152600660205260409020548590610bec5760405162461bcd60e51b815260040180806020018281038252602881526020018061139f6028913960400191505060405180910390fd5b6001600160a01b0386166000908152600660205260408120805490915b81811015610c9a576000838281548110610c1f57fe5b90600052602060002090600402019050600080610c49836002015484600101548560030154610d97565b9092509050610c5e8a8363ffffffff610dd016565b9950610c708b8263ffffffff610dd016565b9a50610c8983600301548a610dd090919063ffffffff16565b98505060019092019150610c099050565b50505050509193909250565b6000546001600160a01b031681565b6000546001600160a01b03163314610cfe5760405162461bcd60e51b81526004018080602001828103825260238152602001806113c76023913960400191505060405180910390fd5b6001600160a01b038116610d435760405162461bcd60e51b81526004018080602001828103825260238152602001806113016023913960400191505060405180910390fd5b600580546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f5673fdce1f5315db6943d18b4249ea0cfb54555a5703cbbcb02d8e3c25e90f369181900360200190a150565b6000806000610dae8686610da961041d565b610e8a565b90506000610dc2828663ffffffff610efc16565b919791965090945050505050565b600082820183811015610e2a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e85908490610f3e565b505050565b600082821015610e9c57506000610ef5565b610eb0836301e1338063ffffffff610dd016565b821115610ebe575082610ef5565b610ef26301e13380610ee6610ed9858763ffffffff610efc16565b879063ffffffff6110fc16565b9063ffffffff61115516565b90505b9392505050565b6000610e2a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611197565b610f50826001600160a01b031661122e565b610fa1576040805162461bcd60e51b815260206004820152601f60248201527f5361666542455032303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b60208310610fdf5780518252601f199092019160209182019101610fc0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611041576040519150601f19603f3d011682016040523d82523d6000602084013e611046565b606091505b50915091508161109d576040805162461bcd60e51b815260206004820181905260248201527f5361666542455032303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156110f6578080602001905160208110156110b957600080fd5b50516110f65760405162461bcd60e51b815260040180806020018281038252602a815260200180611324602a913960400191505060405180910390fd5b50505050565b60008261110b57506000610e2d565b8282028284828161111857fe5b0414610e2a5760405162461bcd60e51b81526004018080602001828103825260218152602001806113ea6021913960400191505060405180910390fd5b6000610e2a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061126a565b600081848411156112265760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156111eb5781810151838201526020016111d3565b50505050905090810190601f1680156112185780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061126257508115155b949350505050565b600081836112b95760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156111eb5781810151838201526020016111d3565b5060008385816112c557fe5b0495945050505050565b604051806080016040528060006001600160a01b03168152602001600081526020016000815260200160008152509056fe767274436f6e76657273696f6e416464726573732063616e6e6f74206265205a65726f5361666542455032303a204245503230206f7065726174696f6e20646964206e6f7420737563636565644e574c56657374696e6720697320616c726561647920696e697469616c697a65646f6e6c7920565254436f6e76657273696f6e20416464726573732063616e2063616c6c207468652066756e6374696f6e726563697069656e7420646f65736e6f74206861766520616e792076657374696e675265636f72646f6e6c792061646d696e206d617920696e697469616c697a6520746865205661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f776f6e6c792061646d696e206d617920696e697469616c697a6520746865204e574c56657374696e676f6e6c792070726f78792061646d696e2063616e206368616e676520627261696e73a265627a7a7231582054fc017cd21285f160c798b67d01f5da00f5f22f93ded1542ea5eaf2ef40753464736f6c63430005100032";

type NWLVestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NWLVestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NWLVesting__factory extends ContractFactory {
  constructor(...args: NWLVestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NWLVesting> {
    return super.deploy(overrides || {}) as Promise<NWLVesting>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NWLVesting {
    return super.attach(address) as NWLVesting;
  }
  override connect(signer: Signer): NWLVesting__factory {
    return super.connect(signer) as NWLVesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NWLVestingInterface {
    return new utils.Interface(_abi) as NWLVestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NWLVesting {
    return new Contract(address, _abi, signerOrProvider) as NWLVesting;
  }
}
