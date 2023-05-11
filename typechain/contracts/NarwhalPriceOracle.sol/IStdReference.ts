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

export declare namespace IStdReference {
  export type ReferenceDataStruct = {
    rate: PromiseOrValue<BigNumberish>;
    lastUpdatedBase: PromiseOrValue<BigNumberish>;
    lastUpdatedQuote: PromiseOrValue<BigNumberish>;
  };

  export type ReferenceDataStructOutput = [BigNumber, BigNumber, BigNumber] & {
    rate: BigNumber;
    lastUpdatedBase: BigNumber;
    lastUpdatedQuote: BigNumber;
  };
}

export interface IStdReferenceInterface extends utils.Interface {
  functions: {
    "getReferenceData(string,string)": FunctionFragment;
    "getReferenceDataBulk(string[],string[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getReferenceData" | "getReferenceDataBulk"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getReferenceData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReferenceDataBulk",
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getReferenceData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReferenceDataBulk",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IStdReference extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStdReferenceInterface;

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
    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IStdReference.ReferenceDataStructOutput]>;

    getReferenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[IStdReference.ReferenceDataStructOutput[]]>;
  };

  getReferenceData(
    _base: PromiseOrValue<string>,
    _quote: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IStdReference.ReferenceDataStructOutput>;

  getReferenceDataBulk(
    _bases: PromiseOrValue<string>[],
    _quotes: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<IStdReference.ReferenceDataStructOutput[]>;

  callStatic: {
    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IStdReference.ReferenceDataStructOutput>;

    getReferenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<IStdReference.ReferenceDataStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReferenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getReferenceData(
      _base: PromiseOrValue<string>,
      _quote: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReferenceDataBulk(
      _bases: PromiseOrValue<string>[],
      _quotes: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}