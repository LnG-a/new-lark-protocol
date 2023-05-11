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
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface ComptrollerImplInterfaceInterface extends utils.Interface {
  functions: {
    "getAssetsIn(address)": FunctionFragment;
    "mintedNAIs(address)": FunctionFragment;
    "naiMintRate()": FunctionFragment;
    "narwhalAccrued(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "protocolPaused()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getAssetsIn"
      | "mintedNAIs"
      | "naiMintRate"
      | "narwhalAccrued"
      | "oracle"
      | "protocolPaused"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAssetsIn",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mintedNAIs",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "naiMintRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "narwhalAccrued",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolPaused",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintedNAIs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "naiMintRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "narwhalAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolPaused",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ComptrollerImplInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComptrollerImplInterfaceInterface;

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
    getAssetsIn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    mintedNAIs(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    naiMintRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    narwhalAccrued(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    protocolPaused(overrides?: CallOverrides): Promise<[boolean]>;
  };

  getAssetsIn(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  mintedNAIs(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

  narwhalAccrued(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  protocolPaused(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getAssetsIn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    mintedNAIs(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalAccrued(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    protocolPaused(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getAssetsIn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintedNAIs(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    naiMintRate(overrides?: CallOverrides): Promise<BigNumber>;

    narwhalAccrued(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    protocolPaused(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetsIn(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintedNAIs(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    naiMintRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    narwhalAccrued(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
