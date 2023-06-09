/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BytesLike, Signer, utils } from "ethers";

export interface LibNoteInterface extends utils.Interface {
  functions: {};

  events: {
    "LogNote(bytes4,address,bytes32,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
}

export interface LogNoteEventObject {
  sig: string;
  usr: string;
  arg1: string;
  arg2: string;
  data: string;
}
export type LogNoteEvent = TypedEvent<
  [string, string, string, string, string],
  LogNoteEventObject
>;

export type LogNoteEventFilter = TypedEventFilter<LogNoteEvent>;

export interface LibNote extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LibNoteInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "LogNote(bytes4,address,bytes32,bytes32,bytes)"(
      sig?: PromiseOrValue<BytesLike> | null,
      usr?: PromiseOrValue<string> | null,
      arg1?: PromiseOrValue<BytesLike> | null,
      arg2?: PromiseOrValue<BytesLike> | null,
      data?: null
    ): LogNoteEventFilter;
    LogNote(
      sig?: PromiseOrValue<BytesLike> | null,
      usr?: PromiseOrValue<string> | null,
      arg1?: PromiseOrValue<BytesLike> | null,
      arg2?: PromiseOrValue<BytesLike> | null,
      data?: null
    ): LogNoteEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
