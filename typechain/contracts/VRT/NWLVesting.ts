/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface NWLVestingInterface extends utils.Interface {
  functions: {
    "TOTAL_VESTING_TIME()": FunctionFragment;
    "_become(address)": FunctionFragment;
    "_notEntered()": FunctionFragment;
    "admin()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getCurrentTime()": FunctionFragment;
    "getWithdrawableAmount(address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "initialized()": FunctionFragment;
    "nwl()": FunctionFragment;
    "nwlDecimalsMultiplier()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingImplementation()": FunctionFragment;
    "setVRTConverter(address)": FunctionFragment;
    "vestings(address,uint256)": FunctionFragment;
    "vrtConversionAddress()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TOTAL_VESTING_TIME"
      | "_become"
      | "_notEntered"
      | "admin"
      | "deposit"
      | "getCurrentTime"
      | "getWithdrawableAmount"
      | "implementation"
      | "initialize"
      | "initialized"
      | "nwl"
      | "nwlDecimalsMultiplier"
      | "pendingAdmin"
      | "pendingImplementation"
      | "setVRTConverter"
      | "vestings"
      | "vrtConversionAddress"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TOTAL_VESTING_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_become",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_notEntered",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawableAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nwl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nwlDecimalsMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVRTConverter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vestings",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vrtConversionAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "TOTAL_VESTING_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_notEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nwl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nwlDecimalsMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVRTConverter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vestings", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vrtConversionAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "NWLVested(address,uint256,uint256,uint256)": EventFragment;
    "NWLWithdrawn(address,uint256)": EventFragment;
    "VRTConversionSet(address)": EventFragment;
    "VestedTokensClaimed(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NWLVested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NWLWithdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VRTConversionSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VestedTokensClaimed"): EventFragment;
}

export interface NWLVestedEventObject {
  recipient: string;
  startTime: BigNumber;
  amount: BigNumber;
  withdrawnAmount: BigNumber;
}
export type NWLVestedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  NWLVestedEventObject
>;

export type NWLVestedEventFilter = TypedEventFilter<NWLVestedEvent>;

export interface NWLWithdrawnEventObject {
  recipient: string;
  amount: BigNumber;
}
export type NWLWithdrawnEvent = TypedEvent<
  [string, BigNumber],
  NWLWithdrawnEventObject
>;

export type NWLWithdrawnEventFilter = TypedEventFilter<NWLWithdrawnEvent>;

export interface VRTConversionSetEventObject {
  vrtConversionAddress: string;
}
export type VRTConversionSetEvent = TypedEvent<
  [string],
  VRTConversionSetEventObject
>;

export type VRTConversionSetEventFilter =
  TypedEventFilter<VRTConversionSetEvent>;

export interface VestedTokensClaimedEventObject {
  recipient: string;
  amountClaimed: BigNumber;
}
export type VestedTokensClaimedEvent = TypedEvent<
  [string, BigNumber],
  VestedTokensClaimedEventObject
>;

export type VestedTokensClaimedEventFilter =
  TypedEventFilter<VestedTokensClaimedEvent>;

export interface NWLVesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NWLVestingInterface;

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
    TOTAL_VESTING_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    _become(
      nwlVestingProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      recipient: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCurrentTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWithdrawableAmount(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalWithdrawableAmount: BigNumber;
        totalVestedAmount: BigNumber;
        totalWithdrawnAmount: BigNumber;
      }
    >;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _nwlAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    nwl(overrides?: CallOverrides): Promise<[string]>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingImplementation(overrides?: CallOverrides): Promise<[string]>;

    setVRTConverter(
      _vrtConversionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  TOTAL_VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  _become(
    nwlVestingProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _notEntered(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  deposit(
    recipient: PromiseOrValue<string>,
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

  getWithdrawableAmount(
    recipient: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalWithdrawableAmount: BigNumber;
      totalVestedAmount: BigNumber;
      totalWithdrawnAmount: BigNumber;
    }
  >;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    _nwlAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  nwl(overrides?: CallOverrides): Promise<string>;

  nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingImplementation(overrides?: CallOverrides): Promise<string>;

  setVRTConverter(
    _vrtConversionAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    TOTAL_VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    _become(
      nwlVestingProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    _notEntered(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    deposit(
      recipient: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    getWithdrawableAmount(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalWithdrawableAmount: BigNumber;
        totalVestedAmount: BigNumber;
        totalWithdrawnAmount: BigNumber;
      }
    >;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialize(
      _nwlAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    nwl(overrides?: CallOverrides): Promise<string>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingImplementation(overrides?: CallOverrides): Promise<string>;

    setVRTConverter(
      _vrtConversionAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NWLVested(address,uint256,uint256,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      startTime?: null,
      amount?: null,
      withdrawnAmount?: null
    ): NWLVestedEventFilter;
    NWLVested(
      recipient?: PromiseOrValue<string> | null,
      startTime?: null,
      amount?: null,
      withdrawnAmount?: null
    ): NWLVestedEventFilter;

    "NWLWithdrawn(address,uint256)"(
      recipient?: null,
      amount?: null
    ): NWLWithdrawnEventFilter;
    NWLWithdrawn(recipient?: null, amount?: null): NWLWithdrawnEventFilter;

    "VRTConversionSet(address)"(
      vrtConversionAddress?: null
    ): VRTConversionSetEventFilter;
    VRTConversionSet(vrtConversionAddress?: null): VRTConversionSetEventFilter;

    "VestedTokensClaimed(address,uint256)"(
      recipient?: null,
      amountClaimed?: null
    ): VestedTokensClaimedEventFilter;
    VestedTokensClaimed(
      recipient?: null,
      amountClaimed?: null
    ): VestedTokensClaimedEventFilter;
  };

  estimateGas: {
    TOTAL_VESTING_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    _become(
      nwlVestingProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _notEntered(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      recipient: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCurrentTime(overrides?: CallOverrides): Promise<BigNumber>;

    getWithdrawableAmount(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _nwlAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    nwl(overrides?: CallOverrides): Promise<BigNumber>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    setVRTConverter(
      _vrtConversionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vrtConversionAddress(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TOTAL_VESTING_TIME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _become(
      nwlVestingProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      recipient: PromiseOrValue<string>,
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWithdrawableAmount(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _nwlAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nwl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nwlDecimalsMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setVRTConverter(
      _vrtConversionAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vestings(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vrtConversionAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
