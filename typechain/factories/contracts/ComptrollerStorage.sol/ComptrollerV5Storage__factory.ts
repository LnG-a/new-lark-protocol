/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../common";
import type {
  ComptrollerV5Storage,
  ComptrollerV5StorageInterface,
} from "../../../contracts/ComptrollerStorage.sol/ComptrollerV5Storage";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
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
    name: "accountAssets",
    outputs: [
      {
        internalType: "contract NToken",
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
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMarkets",
    outputs: [
      {
        internalType: "contract NToken",
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
    name: "borrowCapGuardian",
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
    name: "borrowCaps",
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
    name: "closeFactorMantissa",
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
    name: "comptrollerImplementation",
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
    name: "liquidationIncentiveMantissa",
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
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "collateralFactorMantissa",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isNarwhal",
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
    name: "maxAssets",
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
    name: "minReleaseAmount",
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
    name: "mintNAIGuardianPaused",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "mintedNAIs",
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
    name: "naiController",
    outputs: [
      {
        internalType: "contract NAIControllerInterface",
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
    name: "naiMintRate",
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
    name: "naiVaultAddress",
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
    name: "narwhalAccrued",
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
    name: "narwhalBorrowState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "narwhalBorrowerIndex",
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
    name: "narwhalNAIVaultRate",
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
    name: "narwhalRate",
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
    name: "narwhalSpeeds",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "narwhalSupplierIndex",
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
    name: "narwhalSupplyState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
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
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
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
    name: "pauseGuardian",
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
    inputs: [],
    name: "pendingComptrollerImplementation",
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
    name: "protocolPaused",
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
    name: "releaseStartBlock",
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
    name: "repayNAIGuardianPaused",
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
    name: "treasuryAddress",
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
    name: "treasuryGuardian",
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
    name: "treasuryPercent",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061078c806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80637dc0d1d01161011a578063bcf4262f116100ad578063dcfbc0c71161007c578063dcfbc0c714610492578063e87554461461049a578063f0315b22146104a2578063f04a60c2146104d0578063f851a440146104f657610206565b8063bcf4262f14610430578063c5f956af14610438578063c89c35ec14610440578063dce154491461046657610206565b80639745cd01116100e95780639745cd0114610410578063a4848e8f14610418578063b2eafc3914610420578063bb82aa5e1461042857610206565b80637dc0d1d0146103b05780638e8f294b146103b857806394b2294b14610400578063957e38721461040857610206565b806329ee1bd11161019d5780634ada90af1161016c5780634ada90af1461037357806352d84d1e1461037b5780635ec7a913146103985780636194275f146103a0578063719f701b146103a857610206565b806329ee1bd1146102bd5780632e70baa3146102e3578063425fad58146103315780634a5844321461034d57610206565b80631aba8f09116101d95780631aba8f091461028157806321af4569146102a557806324a3d622146102ad57806326782247146102b557610206565b806304ef9d581461020b5780630db4b4e514610225578063166108221461022d57806318520f4314610253575b600080fd5b6102136104fe565b60408051918252519081900360200190f35b610213610504565b6102136004803603602081101561024357600080fd5b50356001600160a01b031661050a565b6102136004803603604081101561026957600080fd5b506001600160a01b038135811691602001351661051c565b610289610539565b604080516001600160a01b039092168252519081900360200190f35b610289610548565b610289610557565b610289610566565b610213600480360360208110156102d357600080fd5b50356001600160a01b0316610575565b610309600480360360208110156102f957600080fd5b50356001600160a01b0316610587565b604080516001600160e01b03909316835263ffffffff90911660208301528051918290030190f35b6103396105b1565b604080519115158252519081900360200190f35b6102136004803603602081101561036357600080fd5b50356001600160a01b03166105c0565b6102136105d2565b6102896004803603602081101561039157600080fd5b50356105d8565b6102136105ff565b610339610605565b61021361060e565b610289610614565b6103de600480360360208110156103ce57600080fd5b50356001600160a01b0316610623565b6040805193151584526020840192909252151582820152519081900360600190f35b610213610649565b61021361064f565b610289610655565b610339610664565b610289610672565b610289610681565b610213610690565b610289610696565b6103096004803603602081101561045657600080fd5b50356001600160a01b03166106a5565b6102896004803603604081101561047c57600080fd5b506001600160a01b0381351690602001356106cf565b610289610704565b610213610713565b610213600480360360408110156104b857600080fd5b506001600160a01b0381358116916020013516610719565b610213600480360360208110156104e657600080fd5b50356001600160a01b0316610736565b610289610748565b60225481565b601d5481565b60146020526000908152604090205481565b601360209081526000928352604080842090915290825290205481565b6015546001600160a01b031681565b601e546001600160a01b031681565b600a546001600160a01b031681565b6001546001600160a01b031681565b600f6020526000908152604090205481565b6011602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b60185462010000900460ff1681565b601f6020526000908152604090205481565b60065481565b600d81815481106105e557fe5b6000918252602090912001546001600160a01b0316905081565b60175481565b60185460ff1681565b601c5481565b6004546001600160a01b031681565b60096020526000908152604090208054600182015460039092015460ff91821692911683565b60075481565b600e5481565b601b546001600160a01b031681565b601854610100900460ff1681565b6020546001600160a01b031681565b6002546001600160a01b031681565b601a5481565b6021546001600160a01b031681565b6010602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b600860205281600052604060002081815481106106e857fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b60055481565b601260209081526000928352604080842090915290825290205481565b60166020526000908152604090205481565b6000546001600160a01b03168156fea265627a7a7231582057e63c5f74e79dd0e95aee01142e04db4b809b5f4f9ef3d93fac4c51dabf711d64736f6c63430005100032";

type ComptrollerV5StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV5StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV5Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV5StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ComptrollerV5Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV5Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ComptrollerV5Storage {
    return super.attach(address) as ComptrollerV5Storage;
  }
  override connect(signer: Signer): ComptrollerV5Storage__factory {
    return super.connect(signer) as ComptrollerV5Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV5StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV5StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV5Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV5Storage;
  }
}
