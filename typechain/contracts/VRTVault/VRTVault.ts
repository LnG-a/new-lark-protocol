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

export interface VRTVaultInterface extends utils.Interface {
  functions: {
    "_become(address)": FunctionFragment;
    "_notEntered()": FunctionFragment;
    "admin()": FunctionFragment;
    "claim()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getAccruedInterest(address)": FunctionFragment;
    "getBlockNumber()": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialize(address,uint256)": FunctionFragment;
    "interestRatePerBlock()": FunctionFragment;
    "pause()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingImplementation()": FunctionFragment;
    "resume()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
    "vaultPaused()": FunctionFragment;
    "vrt()": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawBep20(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_become"
      | "_notEntered"
      | "admin"
      | "claim"
      | "deposit"
      | "getAccruedInterest"
      | "getBlockNumber"
      | "implementation"
      | "initialize"
      | "interestRatePerBlock"
      | "pause"
      | "pendingAdmin"
      | "pendingImplementation"
      | "resume"
      | "userInfo"
      | "vaultPaused"
      | "vrt"
      | "withdraw"
      | "withdrawBep20"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_become",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "_notEntered",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccruedInterest",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "interestRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resume", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultPaused",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vrt", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawBep20",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_notEntered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccruedInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interestRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vaultPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vrt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBep20",
    data: BytesLike
  ): Result;

  events: {
    "AdminTransfered(address,address)": EventFragment;
    "Claim(address,uint256)": EventFragment;
    "Deposit(address,uint256)": EventFragment;
    "VaultPaused(address)": EventFragment;
    "VaultResumed(address)": EventFragment;
    "Withdraw(address,uint256,uint256,uint256)": EventFragment;
    "WithdrawToken(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminTransfered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultResumed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawToken"): EventFragment;
}

export interface AdminTransferedEventObject {
  oldAdmin: string;
  newAdmin: string;
}
export type AdminTransferedEvent = TypedEvent<
  [string, string],
  AdminTransferedEventObject
>;

export type AdminTransferedEventFilter = TypedEventFilter<AdminTransferedEvent>;

export interface ClaimEventObject {
  user: string;
  interestAmount: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface DepositEventObject {
  user: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface VaultPausedEventObject {
  admin: string;
}
export type VaultPausedEvent = TypedEvent<[string], VaultPausedEventObject>;

export type VaultPausedEventFilter = TypedEventFilter<VaultPausedEvent>;

export interface VaultResumedEventObject {
  admin: string;
}
export type VaultResumedEvent = TypedEvent<[string], VaultResumedEventObject>;

export type VaultResumedEventFilter = TypedEventFilter<VaultResumedEvent>;

export interface WithdrawEventObject {
  user: string;
  withdrawnAmount: BigNumber;
  totalPrincipalAmount: BigNumber;
  accruedInterest: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface WithdrawTokenEventObject {
  tokenAddress: string;
  receiver: string;
  amount: BigNumber;
}
export type WithdrawTokenEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawTokenEventObject
>;

export type WithdrawTokenEventFilter = TypedEventFilter<WithdrawTokenEvent>;

export interface VRTVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRTVaultInterface;

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
    _become(
      vrtVaultProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAccruedInterest(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _interestRatePerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    interestRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingImplementation(overrides?: CallOverrides): Promise<[string]>;

    resume(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        userAddress: string;
        accrualStartBlockNumber: BigNumber;
        totalPrincipalAmount: BigNumber;
        lastWithdrawnBlockNumber: BigNumber;
      }
    >;

    vaultPaused(overrides?: CallOverrides): Promise<[boolean]>;

    vrt(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawBep20(
      tokenAddress: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _become(
    vrtVaultProxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _notEntered(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    depositAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAccruedInterest(
    userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    _vrtAddress: PromiseOrValue<string>,
    _interestRatePerBlock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  interestRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingImplementation(overrides?: CallOverrides): Promise<string>;

  resume(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      userAddress: string;
      accrualStartBlockNumber: BigNumber;
      totalPrincipalAmount: BigNumber;
      lastWithdrawnBlockNumber: BigNumber;
    }
  >;

  vaultPaused(overrides?: CallOverrides): Promise<boolean>;

  vrt(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawBep20(
    tokenAddress: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _become(
      vrtVaultProxy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    _notEntered(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    deposit(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccruedInterest(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _interestRatePerBlock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    interestRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingImplementation(overrides?: CallOverrides): Promise<string>;

    resume(overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        userAddress: string;
        accrualStartBlockNumber: BigNumber;
        totalPrincipalAmount: BigNumber;
        lastWithdrawnBlockNumber: BigNumber;
      }
    >;

    vaultPaused(overrides?: CallOverrides): Promise<boolean>;

    vrt(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    withdrawBep20(
      tokenAddress: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminTransfered(address,address)"(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): AdminTransferedEventFilter;
    AdminTransfered(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): AdminTransferedEventFilter;

    "Claim(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      interestAmount?: null
    ): ClaimEventFilter;
    Claim(
      user?: PromiseOrValue<string> | null,
      interestAmount?: null
    ): ClaimEventFilter;

    "Deposit(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: PromiseOrValue<string> | null,
      amount?: null
    ): DepositEventFilter;

    "VaultPaused(address)"(
      admin?: PromiseOrValue<string> | null
    ): VaultPausedEventFilter;
    VaultPaused(admin?: PromiseOrValue<string> | null): VaultPausedEventFilter;

    "VaultResumed(address)"(
      admin?: PromiseOrValue<string> | null
    ): VaultResumedEventFilter;
    VaultResumed(
      admin?: PromiseOrValue<string> | null
    ): VaultResumedEventFilter;

    "Withdraw(address,uint256,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      withdrawnAmount?: null,
      totalPrincipalAmount?: null,
      accruedInterest?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: PromiseOrValue<string> | null,
      withdrawnAmount?: null,
      totalPrincipalAmount?: null,
      accruedInterest?: null
    ): WithdrawEventFilter;

    "WithdrawToken(address,address,uint256)"(
      tokenAddress?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawTokenEventFilter;
    WithdrawToken(
      tokenAddress?: PromiseOrValue<string> | null,
      receiver?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawTokenEventFilter;
  };

  estimateGas: {
    _become(
      vrtVaultProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _notEntered(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAccruedInterest(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _interestRatePerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    interestRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    resume(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaultPaused(overrides?: CallOverrides): Promise<BigNumber>;

    vrt(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawBep20(
      tokenAddress: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _become(
      vrtVaultProxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _notEntered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      depositAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAccruedInterest(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _vrtAddress: PromiseOrValue<string>,
      _interestRatePerBlock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    interestRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resume(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaultPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vrt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawBep20(
      tokenAddress: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
