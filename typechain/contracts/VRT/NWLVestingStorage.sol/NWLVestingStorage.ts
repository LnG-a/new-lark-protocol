/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface NWLVestingStorageInterface extends utils.Interface {
  functions: {
    "_notEntered()": FunctionFragment;
    "admin()": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialized()": FunctionFragment;
    "nwl()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingImplementation()": FunctionFragment;
    "vestings(address,uint256)": FunctionFragment;
    "vrtConversionAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_notEntered"
      | "admin"
      | "implementation"
      | "initialized"
      | "nwl"
      | "pendingAdmin"
      | "pendingImplementation"
      | "vestings"
      | "vrtConversionAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_notEntered",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nwl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestings",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vrtConversionAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_notEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nwl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vestings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vrtConversionAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NWLVestingStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NWLVestingStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _notEntered(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    nwl(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingImplementation(overrides?: CallOverrides): Promise<[string]>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        recipient: string;
        startTime: BigNumber;
        amount: BigNumber;
        withdrawnAmount: BigNumber;
      }
    >;

    vrtConversionAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  _notEntered(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  nwl(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingImplementation(overrides?: CallOverrides): Promise<string>;

  vestings(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      recipient: string;
      startTime: BigNumber;
      amount: BigNumber;
      withdrawnAmount: BigNumber;
    }
  >;

  vrtConversionAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _notEntered(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    nwl(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingImplementation(overrides?: CallOverrides): Promise<string>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        recipient: string;
        startTime: BigNumber;
        amount: BigNumber;
        withdrawnAmount: BigNumber;
      }
    >;

    vrtConversionAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _notEntered(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    nwl(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vrtConversionAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _notEntered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nwl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vrtConversionAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}