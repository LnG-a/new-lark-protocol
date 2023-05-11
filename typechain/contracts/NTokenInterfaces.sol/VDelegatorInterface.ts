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
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface VDelegatorInterfaceInterface extends utils.Interface {
  functions: {
    "_setImplementation(address,bool,bytes)": FunctionFragment;
    "implementation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "_setImplementation" | "implementation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_setImplementation",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_setImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;

  events: {
    "NewImplementation(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewImplementation"): EventFragment;
}

export interface NewImplementationEventObject {
  oldImplementation: string;
  newImplementation: string;
}
export type NewImplementationEvent = TypedEvent<
  [string, string],
  NewImplementationEventObject
>;

export type NewImplementationEventFilter =
  TypedEventFilter<NewImplementationEvent>;

export interface VDelegatorInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VDelegatorInterfaceInterface;

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
    _setImplementation(
      implementation_: PromiseOrValue<string>,
      allowResign: PromiseOrValue<boolean>,
      becomeImplementationData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;
  };

  _setImplementation(
    implementation_: PromiseOrValue<string>,
    allowResign: PromiseOrValue<boolean>,
    becomeImplementationData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _setImplementation(
      implementation_: PromiseOrValue<string>,
      allowResign: PromiseOrValue<boolean>,
      becomeImplementationData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewImplementation(address,address)"(
      oldImplementation?: null,
      newImplementation?: null
    ): NewImplementationEventFilter;
    NewImplementation(
      oldImplementation?: null,
      newImplementation?: null
    ): NewImplementationEventFilter;
  };

  estimateGas: {
    _setImplementation(
      implementation_: PromiseOrValue<string>,
      allowResign: PromiseOrValue<boolean>,
      becomeImplementationData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _setImplementation(
      implementation_: PromiseOrValue<string>,
      allowResign: PromiseOrValue<boolean>,
      becomeImplementationData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
