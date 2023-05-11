/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
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

export interface InterestRateModelInterface extends utils.Interface {
  functions: {
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isInterestRateModel()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getBorrowRate"
      | "getSupplyRate"
      | "isInterestRateModel"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;

  events: {};
}

export interface InterestRateModel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: InterestRateModelInterface;

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
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;
  };

  getBorrowRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: PromiseOrValue<BigNumberish>,
    borrows: PromiseOrValue<BigNumberish>,
    reserves: PromiseOrValue<BigNumberish>,
    reserveFactorMantissa: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getBorrowRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: PromiseOrValue<BigNumberish>,
      borrows: PromiseOrValue<BigNumberish>,
      reserves: PromiseOrValue<BigNumberish>,
      reserveFactorMantissa: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInterestRateModel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}