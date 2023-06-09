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

export interface VRTConverterInterface extends utils.Interface {
  functions: {
    "DEAD_ADDRESS()": FunctionFragment;
    "_become(address)": FunctionFragment;
    "_notEntered()": FunctionFragment;
    "admin()": FunctionFragment;
    "conversionEndTime()": FunctionFragment;
    "conversionPeriod()": FunctionFragment;
    "conversionRatio()": FunctionFragment;
    "conversionStartTime()": FunctionFragment;
    "convert(uint256)": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256)": FunctionFragment;
    "initialized()": FunctionFragment;
    "isConversionActive()": FunctionFragment;
    "nwl()": FunctionFragment;
    "nwlDecimalsMultiplier()": FunctionFragment;
    "nwlVesting()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingImplementation()": FunctionFragment;
    "setNWLVesting(address)": FunctionFragment;
    "totalVrtConverted()": FunctionFragment;
    "vrt()": FunctionFragment;
    "vrtDecimalsMultiplier()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEAD_ADDRESS"
      | "_become"
      | "_notEntered"
      | "admin"
      | "conversionEndTime"
      | "conversionPeriod"
      | "conversionRatio"
      | "conversionStartTime"
      | "convert"
      | "implementation"
      | "initialize"
      | "initialized"
      | "isConversionActive"
      | "nwl"
      | "nwlDecimalsMultiplier"
      | "nwlVesting"
      | "pendingAdmin"
      | "pendingImplementation"
      | "setNWLVesting"
      | "totalVrtConverted"
      | "vrt"
      | "vrtDecimalsMultiplier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEAD_ADDRESS",
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
    functionFragment: "conversionEndTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conversionPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conversionRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "conversionStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convert",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isConversionActive",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nwl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nwlDecimalsMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nwlVesting",
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
    functionFragment: "setNWLVesting",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalVrtConverted",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vrt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vrtDecimalsMultiplier",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEAD_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_notEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "conversionEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conversionPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conversionRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "conversionStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convert", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isConversionActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nwl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nwlDecimalsMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nwlVesting", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNWLVesting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalVrtConverted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vrt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vrtDecimalsMultiplier",
    data: BytesLike
  ): Result;

  events: {
    "ConversionInfoSet(uint256,uint256,uint256,uint256)": EventFragment;
    "NWLVestingSet(address)": EventFragment;
    "TokenConverted(address,address,uint256,address,uint256)": EventFragment;
    "TokenWithdraw(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConversionInfoSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NWLVestingSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenConverted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWithdraw"): EventFragment;
}

export interface ConversionInfoSetEventObject {
  conversionRatio: BigNumber;
  conversionStartTime: BigNumber;
  conversionPeriod: BigNumber;
  conversionEndTime: BigNumber;
}
export type ConversionInfoSetEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  ConversionInfoSetEventObject
>;

export type ConversionInfoSetEventFilter =
  TypedEventFilter<ConversionInfoSetEvent>;

export interface NWLVestingSetEventObject {
  nwlVestingAddress: string;
}
export type NWLVestingSetEvent = TypedEvent<[string], NWLVestingSetEventObject>;

export type NWLVestingSetEventFilter = TypedEventFilter<NWLVestingSetEvent>;

export interface TokenConvertedEventObject {
  reedeemer: string;
  vrtAddress: string;
  vrtAmount: BigNumber;
  nwlAddress: string;
  nwlAmount: BigNumber;
}
export type TokenConvertedEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber],
  TokenConvertedEventObject
>;

export type TokenConvertedEventFilter = TypedEventFilter<TokenConvertedEvent>;

export interface TokenWithdrawEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type TokenWithdrawEvent = TypedEvent<
  [string, string, BigNumber],
  TokenWithdrawEventObject
>;

export type TokenWithdrawEventFilter = TypedEventFilter<TokenWithdrawEvent>;

export interface VRTConverter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRTConverterInterface;

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
    DEAD_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    _become(
      vrtConverterProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    conversionEndTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    conversionPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    conversionRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    conversionStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    convert(
      vrtAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _nwlAddress: PromiseOrValue<string>,
      _conversionRatio: PromiseOrValue<BigNumberish>,
      _conversionStartTime: PromiseOrValue<BigNumberish>,
      _conversionPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    isConversionActive(overrides?: CallOverrides): Promise<[boolean]>;

    nwl(overrides?: CallOverrides): Promise<[string]>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    nwlVesting(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingImplementation(overrides?: CallOverrides): Promise<[string]>;

    setNWLVesting(
      _nwlVestingAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalVrtConverted(overrides?: CallOverrides): Promise<[BigNumber]>;

    vrt(overrides?: CallOverrides): Promise<[string]>;

    vrtDecimalsMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  DEAD_ADDRESS(overrides?: CallOverrides): Promise<string>;

  _become(
    vrtConverterProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _notEntered(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  conversionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

  conversionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  conversionRatio(overrides?: CallOverrides): Promise<BigNumber>;

  conversionStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  convert(
    vrtAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    _vrtAddress: PromiseOrValue<string>,
    _nwlAddress: PromiseOrValue<string>,
    _conversionRatio: PromiseOrValue<BigNumberish>,
    _conversionStartTime: PromiseOrValue<BigNumberish>,
    _conversionPeriod: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  isConversionActive(overrides?: CallOverrides): Promise<boolean>;

  nwl(overrides?: CallOverrides): Promise<string>;

  nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  nwlVesting(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingImplementation(overrides?: CallOverrides): Promise<string>;

  setNWLVesting(
    _nwlVestingAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalVrtConverted(overrides?: CallOverrides): Promise<BigNumber>;

  vrt(overrides?: CallOverrides): Promise<string>;

  vrtDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DEAD_ADDRESS(overrides?: CallOverrides): Promise<string>;

    _become(
      vrtConverterProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    _notEntered(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    conversionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    conversionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    conversionRatio(overrides?: CallOverrides): Promise<BigNumber>;

    conversionStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    convert(
      vrtAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _nwlAddress: PromiseOrValue<string>,
      _conversionRatio: PromiseOrValue<BigNumberish>,
      _conversionStartTime: PromiseOrValue<BigNumberish>,
      _conversionPeriod: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    isConversionActive(overrides?: CallOverrides): Promise<boolean>;

    nwl(overrides?: CallOverrides): Promise<string>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    nwlVesting(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingImplementation(overrides?: CallOverrides): Promise<string>;

    setNWLVesting(
      _nwlVestingAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalVrtConverted(overrides?: CallOverrides): Promise<BigNumber>;

    vrt(overrides?: CallOverrides): Promise<string>;

    vrtDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ConversionInfoSet(uint256,uint256,uint256,uint256)"(
      conversionRatio?: null,
      conversionStartTime?: null,
      conversionPeriod?: null,
      conversionEndTime?: null
    ): ConversionInfoSetEventFilter;
    ConversionInfoSet(
      conversionRatio?: null,
      conversionStartTime?: null,
      conversionPeriod?: null,
      conversionEndTime?: null
    ): ConversionInfoSetEventFilter;

    "NWLVestingSet(address)"(
      nwlVestingAddress?: null
    ): NWLVestingSetEventFilter;
    NWLVestingSet(nwlVestingAddress?: null): NWLVestingSetEventFilter;

    "TokenConverted(address,address,uint256,address,uint256)"(
      reedeemer?: null,
      vrtAddress?: null,
      vrtAmount?: null,
      nwlAddress?: null,
      nwlAmount?: null
    ): TokenConvertedEventFilter;
    TokenConverted(
      reedeemer?: null,
      vrtAddress?: null,
      vrtAmount?: null,
      nwlAddress?: null,
      nwlAmount?: null
    ): TokenConvertedEventFilter;

    "TokenWithdraw(address,address,uint256)"(
      token?: null,
      to?: null,
      amount?: null
    ): TokenWithdrawEventFilter;
    TokenWithdraw(
      token?: null,
      to?: null,
      amount?: null
    ): TokenWithdrawEventFilter;
  };

  estimateGas: {
    DEAD_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    _become(
      vrtConverterProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _notEntered(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    conversionEndTime(overrides?: CallOverrides): Promise<BigNumber>;

    conversionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    conversionRatio(overrides?: CallOverrides): Promise<BigNumber>;

    conversionStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    convert(
      vrtAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _nwlAddress: PromiseOrValue<string>,
      _conversionRatio: PromiseOrValue<BigNumberish>,
      _conversionStartTime: PromiseOrValue<BigNumberish>,
      _conversionPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    isConversionActive(overrides?: CallOverrides): Promise<BigNumber>;

    nwl(overrides?: CallOverrides): Promise<BigNumber>;

    nwlDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    nwlVesting(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    setNWLVesting(
      _nwlVestingAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalVrtConverted(overrides?: CallOverrides): Promise<BigNumber>;

    vrt(overrides?: CallOverrides): Promise<BigNumber>;

    vrtDecimalsMultiplier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEAD_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _become(
      vrtConverterProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conversionEndTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conversionPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conversionRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    conversionStartTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convert(
      vrtAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _nwlAddress: PromiseOrValue<string>,
      _conversionRatio: PromiseOrValue<BigNumberish>,
      _conversionStartTime: PromiseOrValue<BigNumberish>,
      _conversionPeriod: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isConversionActive(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nwl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nwlDecimalsMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nwlVesting(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setNWLVesting(
      _nwlVestingAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalVrtConverted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vrt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vrtDecimalsMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
