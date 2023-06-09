/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  INAIVault,
  INAIVaultInterface,
} from "../../../contracts/ComptrollerInterface.sol/INAIVault";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "updatePendingRewards",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class INAIVault__factory {
  static readonly abi = _abi;
  static createInterface(): INAIVaultInterface {
    return new utils.Interface(_abi) as INAIVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INAIVault {
    return new Contract(address, _abi, signerOrProvider) as INAIVault;
  }
}
