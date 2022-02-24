import * as grpcWeb from 'grpc-web';

import * as datastore_service_pb from './datastore_service_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class DatastoreServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isAvailable(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  exists(
    request: datastore_service_pb.ExistsArgs,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: datastore_service_pb.ExistsResponse) => void
  ): grpcWeb.ClientReadableStream<datastore_service_pb.ExistsResponse>;

  get(
    request: datastore_service_pb.GetArgs,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: datastore_service_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<datastore_service_pb.GetResponse>;

  upsert(
    request: datastore_service_pb.UpsertArgs,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class DatastoreServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  isAvailable(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  exists(
    request: datastore_service_pb.ExistsArgs,
    metadata?: grpcWeb.Metadata
  ): Promise<datastore_service_pb.ExistsResponse>;

  get(
    request: datastore_service_pb.GetArgs,
    metadata?: grpcWeb.Metadata
  ): Promise<datastore_service_pb.GetResponse>;

  upsert(
    request: datastore_service_pb.UpsertArgs,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

