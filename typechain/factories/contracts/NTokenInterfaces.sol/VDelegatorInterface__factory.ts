/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  VDelegatorInterface,
  VDelegatorInterfaceInterface,
} from "../../../contracts/NTokenInterfaces.sol/VDelegatorInterface";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowResign",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "becomeImplementationData",
        type: "bytes",
      },
    ],
    name: "_setImplementation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
];

export class VDelegatorInterface__factory {
  static readonly abi = _abi;
  static createInterface(): VDelegatorInterfaceInterface {
    return new utils.Interface(_abi) as VDelegatorInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VDelegatorInterface {
    return new Contract(address, _abi, signerOrProvider) as VDelegatorInterface;
  }
}