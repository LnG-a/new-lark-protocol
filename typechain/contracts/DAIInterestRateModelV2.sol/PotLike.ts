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

export interface PotLikeInterface extends utils.Interface {
  functions: {
    "chi()": FunctionFragment;
    "drip()": FunctionFragment;
    "dsr()": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "join(uint256)": FunctionFragment;
    "pie(address)": FunctionFragment;
    "rho()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "chi"
      | "drip"
      | "dsr"
      | "exit"
      | "join"
      | "pie"
      | "rho"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "chi", values?: undefined): string;
  encodeFunctionData(functionFragment: "drip", values?: undefined): string;
  encodeFunctionData(functionFragment: "dsr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "exit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pie",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "rho", values?: undefined): string;

  decodeFunctionResult(functionFragment: "chi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dsr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pie", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rho", data: BytesLike): Result;

  events: {};
}

export interface PotLike extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PotLikeInterface;

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
    chi(overrides?: CallOverrides): Promise<[BigNumber]>;

    drip(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dsr(overrides?: CallOverrides): Promise<[BigNumber]>;

    exit(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    join(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pie(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rho(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  chi(overrides?: CallOverrides): Promise<BigNumber>;

  drip(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dsr(overrides?: CallOverrides): Promise<BigNumber>;

  exit(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  join(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pie(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rho(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    chi(overrides?: CallOverrides): Promise<BigNumber>;

    drip(overrides?: CallOverrides): Promise<BigNumber>;

    dsr(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    join(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    pie(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rho(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    chi(overrides?: CallOverrides): Promise<BigNumber>;

    drip(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dsr(overrides?: CallOverrides): Promise<BigNumber>;

    exit(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    join(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pie(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rho(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    chi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    drip(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dsr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exit(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    join(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pie(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rho(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
