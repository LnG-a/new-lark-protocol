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
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace SnapshotLens {
  export type AccountSnapshotStruct = {
    account: PromiseOrValue<string>;
    assetName: PromiseOrValue<string>;
    nTokenAddress: PromiseOrValue<string>;
    underlyingAssetAddress: PromiseOrValue<string>;
    supply: PromiseOrValue<BigNumberish>;
    supplyInUsd: PromiseOrValue<BigNumberish>;
    collateral: PromiseOrValue<BigNumberish>;
    borrows: PromiseOrValue<BigNumberish>;
    borrowsInUsd: PromiseOrValue<BigNumberish>;
    assetPrice: PromiseOrValue<BigNumberish>;
    accruedInterest: PromiseOrValue<BigNumberish>;
    nTokenDecimals: PromiseOrValue<BigNumberish>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
    exchangeRate: PromiseOrValue<BigNumberish>;
    isACollateral: PromiseOrValue<boolean>;
  };

  export type AccountSnapshotStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    account: string;
    assetName: string;
    nTokenAddress: string;
    underlyingAssetAddress: string;
    supply: BigNumber;
    supplyInUsd: BigNumber;
    collateral: BigNumber;
    borrows: BigNumber;
    borrowsInUsd: BigNumber;
    assetPrice: BigNumber;
    accruedInterest: BigNumber;
    nTokenDecimals: BigNumber;
    underlyingDecimals: BigNumber;
    exchangeRate: BigNumber;
    isACollateral: boolean;
  };
}

export interface SnapshotLensInterface extends utils.Interface {
  functions: {
    "getAccountSnapshot(address,address)": FunctionFragment;
    "getAccountSnapshot(address,address,address)": FunctionFragment;
    "isACollateral(address,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAccountSnapshot(address,address)"
      | "getAccountSnapshot(address,address,address)"
      | "isACollateral"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAccountSnapshot(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountSnapshot(address,address,address)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isACollateral",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAccountSnapshot(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountSnapshot(address,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isACollateral",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SnapshotLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SnapshotLensInterface;

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
    "getAccountSnapshot(address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "getAccountSnapshot(address,address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      nToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isACollateral(
      account: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  "getAccountSnapshot(address,address)"(
    account: PromiseOrValue<string>,
    comptrollerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "getAccountSnapshot(address,address,address)"(
    account: PromiseOrValue<string>,
    comptrollerAddress: PromiseOrValue<string>,
    nToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isACollateral(
    account: PromiseOrValue<string>,
    asset: PromiseOrValue<string>,
    comptrollerAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    "getAccountSnapshot(address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SnapshotLens.AccountSnapshotStructOutput[]>;

    "getAccountSnapshot(address,address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      nToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SnapshotLens.AccountSnapshotStructOutput>;

    isACollateral(
      account: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    "getAccountSnapshot(address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "getAccountSnapshot(address,address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      nToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isACollateral(
      account: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "getAccountSnapshot(address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "getAccountSnapshot(address,address,address)"(
      account: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      nToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isACollateral(
      account: PromiseOrValue<string>,
      asset: PromiseOrValue<string>,
      comptrollerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}