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

export interface ComptrollerV9StorageInterface extends utils.Interface {
  functions: {
    "accountAssets(address,uint256)": FunctionFragment;
    "admin()": FunctionFragment;
    "allMarkets(uint256)": FunctionFragment;
    "borrowCapGuardian()": FunctionFragment;
    "borrowCaps(address)": FunctionFragment;
    "closeFactorMantissa()": FunctionFragment;
    "comptrollerImplementation()": FunctionFragment;
    "comptrollerLens()": FunctionFragment;
    "liquidationIncentiveMantissa()": FunctionFragment;
    "liquidatorContract()": FunctionFragment;
    "markets(address)": FunctionFragment;
    "maxAssets()": FunctionFragment;
    "minReleaseAmount()": FunctionFragment;
    "mintNAIGuardianPaused()": FunctionFragment;
    "mintedNAIs(address)": FunctionFragment;
    "naiController()": FunctionFragment;
    "naiMintRate()": FunctionFragment;
    "naiVaultAddress()": FunctionFragment;
    "narwhalAccrued(address)": FunctionFragment;
    "narwhalBorrowState(address)": FunctionFragment;
    "narwhalBorrowerIndex(address,address)": FunctionFragment;
    "narwhalNAIVaultRate()": FunctionFragment;
    "narwhalRate()": FunctionFragment;
    "narwhalSpeeds(address)": FunctionFragment;
    "narwhalSupplierIndex(address,address)": FunctionFragment;
    "narwhalSupplyState(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "pauseGuardian()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingComptrollerImplementation()": FunctionFragment;
    "protocolPaused()": FunctionFragment;
    "releaseStartBlock()": FunctionFragment;
    "repayNAIGuardianPaused()": FunctionFragment;
    "supplyCaps(address)": FunctionFragment;
    "treasuryAddress()": FunctionFragment;
    "treasuryGuardian()": FunctionFragment;
    "treasuryPercent()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accountAssets"
      | "admin"
      | "allMarkets"
      | "borrowCapGuardian"
      | "borrowCaps"
      | "closeFactorMantissa"
      | "comptrollerImplementation"
      | "comptrollerLens"
      | "liquidationIncentiveMantissa"
      | "liquidatorContract"
      | "markets"
      | "maxAssets"
      | "minReleaseAmount"
      | "mintNAIGuardianPaused"
      | "mintedNAIs"
      | "naiController"
      | "naiMintRate"
      | "naiVaultAddress"
      | "narwhalAccrued"
      | "narwhalBorrowState"
      | "narwhalBorrowerIndex"
      | "narwhalNAIVaultRate"
      | "narwhalRate"
      | "narwhalSpeeds"
      | "narwhalSupplierIndex"
      | "narwhalSupplyState"
      | "oracle"
      | "pauseGuardian"
      | "pendingAdmin"
      | "pendingComptrollerImplementation"
      | "protocolPaused"
      | "releaseStartBlock"
      | "repayNAIGuardianPaused"
      | "supplyCaps"
      | "treasuryAddress"
      | "treasuryGuardian"
      | "treasuryPercent"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountAssets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allMarkets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowCapGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowCaps",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "closeFactorMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "comptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "comptrollerLens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationIncentiveMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidatorContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "maxAssets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minReleaseAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintNAIGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintedNAIs",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "naiController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "naiMintRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "naiVaultAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalAccrued",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalBorrowState",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalBorrowerIndex",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalNAIVaultRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalSpeeds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalSupplierIndex",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalSupplyState",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingComptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releaseStartBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayNAIGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supplyCaps",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryPercent",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowCapGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeFactorMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptrollerLens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationIncentiveMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidatorContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxAssets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minReleaseAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintNAIGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintedNAIs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "naiController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "naiMintRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "naiVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalBorrowState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalBorrowerIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalNAIVaultRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalSpeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalSupplierIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalSupplyState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingComptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseStartBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayNAIGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "supplyCaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "treasuryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryPercent",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ComptrollerV9Storage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComptrollerV9StorageInterface;

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
    accountAssets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    allMarkets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<[string]>;

    borrowCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;

    comptrollerLens(overrides?: CallOverrides): Promise<[string]>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    liquidatorContract(overrides?: CallOverrides): Promise<[string]>;

    markets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, boolean] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isNarwhal: boolean;
      }
    >;

    maxAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    minReleaseAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintNAIGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    mintedNAIs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    naiController(overrides?: CallOverrides): Promise<[string]>;

    naiMintRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    naiVaultAddress(overrides?: CallOverrides): Promise<[string]>;

    narwhalAccrued(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    narwhalBorrowState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    narwhalBorrowerIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    narwhalNAIVaultRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    narwhalRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    narwhalSpeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    narwhalSupplierIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    narwhalSupplyState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    pauseGuardian(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<[string]>;

    protocolPaused(overrides?: CallOverrides): Promise<[boolean]>;

    releaseStartBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    repayNAIGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    supplyCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    treasuryAddress(overrides?: CallOverrides): Promise<[string]>;

    treasuryGuardian(overrides?: CallOverrides): Promise<[string]>;

    treasuryPercent(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  accountAssets(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  allMarkets(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  borrowCapGuardian(overrides?: CallOverrides): Promise<string>;

  borrowCaps(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  comptrollerLens(overrides?: CallOverrides): Promise<string>;

  liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  liquidatorContract(overrides?: CallOverrides): Promise<string>;

  markets(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, boolean] & {
      isListed: boolean;
      collateralFactorMantissa: BigNumber;
      isNarwhal: boolean;
    }
  >;

  maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

  minReleaseAmount(overrides?: CallOverrides): Promise<BigNumber>;

  mintNAIGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  mintedNAIs(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  naiController(overrides?: CallOverrides): Promise<string>;

  naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

  naiVaultAddress(overrides?: CallOverrides): Promise<string>;

  narwhalAccrued(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  narwhalBorrowState(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

  narwhalBorrowerIndex(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  narwhalNAIVaultRate(overrides?: CallOverrides): Promise<BigNumber>;

  narwhalRate(overrides?: CallOverrides): Promise<BigNumber>;

  narwhalSpeeds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  narwhalSupplierIndex(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  narwhalSupplyState(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

  oracle(overrides?: CallOverrides): Promise<string>;

  pauseGuardian(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  protocolPaused(overrides?: CallOverrides): Promise<boolean>;

  releaseStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

  repayNAIGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  supplyCaps(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  treasuryAddress(overrides?: CallOverrides): Promise<string>;

  treasuryGuardian(overrides?: CallOverrides): Promise<string>;

  treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    accountAssets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    allMarkets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<string>;

    borrowCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

    comptrollerLens(overrides?: CallOverrides): Promise<string>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    liquidatorContract(overrides?: CallOverrides): Promise<string>;

    markets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, boolean] & {
        isListed: boolean;
        collateralFactorMantissa: BigNumber;
        isNarwhal: boolean;
      }
    >;

    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

    minReleaseAmount(overrides?: CallOverrides): Promise<BigNumber>;

    mintNAIGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    mintedNAIs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    naiController(overrides?: CallOverrides): Promise<string>;

    naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

    naiVaultAddress(overrides?: CallOverrides): Promise<string>;

    narwhalAccrued(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalBorrowState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    narwhalBorrowerIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalNAIVaultRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalSpeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalSupplierIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalSupplyState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, number] & { index: BigNumber; block: number }>;

    oracle(overrides?: CallOverrides): Promise<string>;

    pauseGuardian(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<string>;

    protocolPaused(overrides?: CallOverrides): Promise<boolean>;

    releaseStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    repayNAIGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    supplyCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<string>;

    treasuryGuardian(overrides?: CallOverrides): Promise<string>;

    treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    accountAssets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    allMarkets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    borrowCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    comptrollerLens(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    liquidatorContract(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxAssets(overrides?: CallOverrides): Promise<BigNumber>;

    minReleaseAmount(overrides?: CallOverrides): Promise<BigNumber>;

    mintNAIGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    mintedNAIs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    naiController(overrides?: CallOverrides): Promise<BigNumber>;

    naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

    naiVaultAddress(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalAccrued(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalBorrowState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalBorrowerIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalNAIVaultRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalSpeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalSupplierIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    narwhalSupplyState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolPaused(overrides?: CallOverrides): Promise<BigNumber>;

    releaseStartBlock(overrides?: CallOverrides): Promise<BigNumber>;

    repayNAIGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    supplyCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasuryAddress(overrides?: CallOverrides): Promise<BigNumber>;

    treasuryGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    treasuryPercent(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountAssets(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allMarkets(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeFactorMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comptrollerLens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidatorContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markets(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minReleaseAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintNAIGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintedNAIs(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    naiController(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    naiMintRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    naiVaultAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    narwhalAccrued(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalBorrowState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalBorrowerIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalNAIVaultRate(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    narwhalSpeeds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalSupplierIndex(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    narwhalSupplyState(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    releaseStartBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayNAIGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supplyCaps(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    treasuryAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasuryGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treasuryPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
