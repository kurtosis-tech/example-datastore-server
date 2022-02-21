import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ExistsArgs extends jspb.Message {
  getKey(): string;
  setKey(value: string): ExistsArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsArgs.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsArgs): ExistsArgs.AsObject;
  static serializeBinaryToWriter(message: ExistsArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsArgs;
  static deserializeBinaryFromReader(message: ExistsArgs, reader: jspb.BinaryReader): ExistsArgs;
}

export namespace ExistsArgs {
  export type AsObject = {
    key: string,
  }
}

export class ExistsResponse extends jspb.Message {
  getExists(): boolean;
  setExists(value: boolean): ExistsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExistsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExistsResponse): ExistsResponse.AsObject;
  static serializeBinaryToWriter(message: ExistsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExistsResponse;
  static deserializeBinaryFromReader(message: ExistsResponse, reader: jspb.BinaryReader): ExistsResponse;
}

export namespace ExistsResponse {
  export type AsObject = {
    exists: boolean,
  }
}

export class GetArgs extends jspb.Message {
  getKey(): string;
  setKey(value: string): GetArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetArgs.AsObject;
  static toObject(includeInstance: boolean, msg: GetArgs): GetArgs.AsObject;
  static serializeBinaryToWriter(message: GetArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetArgs;
  static deserializeBinaryFromReader(message: GetArgs, reader: jspb.BinaryReader): GetArgs;
}

export namespace GetArgs {
  export type AsObject = {
    key: string,
  }
}

export class GetResponse extends jspb.Message {
  getValue(): string;
  setValue(value: string): GetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    value: string,
  }
}

export class UpsertArgs extends jspb.Message {
  getKey(): string;
  setKey(value: string): UpsertArgs;

  getValue(): string;
  setValue(value: string): UpsertArgs;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertArgs.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertArgs): UpsertArgs.AsObject;
  static serializeBinaryToWriter(message: UpsertArgs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertArgs;
  static deserializeBinaryFromReader(message: UpsertArgs, reader: jspb.BinaryReader): UpsertArgs;
}

export namespace UpsertArgs {
  export type AsObject = {
    key: string,
    value: string,
  }
}

