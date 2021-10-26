// GENERATED CODE -- DO NOT EDIT!

// package: datastore_api
// file: datastore_service.proto

import * as datastore_service_pb from "./datastore_service_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDatastoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  isAvailable: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  exists: grpc.MethodDefinition<datastore_service_pb.ExistsArgs, datastore_service_pb.ExistsResponse>;
  get: grpc.MethodDefinition<datastore_service_pb.GetArgs, datastore_service_pb.GetResponse>;
  upsert: grpc.MethodDefinition<datastore_service_pb.UpsertArgs, google_protobuf_empty_pb.Empty>;
}

export const DatastoreServiceService: IDatastoreServiceService;

export interface IDatastoreServiceServer extends grpc.UntypedServiceImplementation {
  isAvailable: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, google_protobuf_empty_pb.Empty>;
  exists: grpc.handleUnaryCall<datastore_service_pb.ExistsArgs, datastore_service_pb.ExistsResponse>;
  get: grpc.handleUnaryCall<datastore_service_pb.GetArgs, datastore_service_pb.GetResponse>;
  upsert: grpc.handleUnaryCall<datastore_service_pb.UpsertArgs, google_protobuf_empty_pb.Empty>;
}

export class DatastoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  isAvailable(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  isAvailable(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  isAvailable(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  exists(argument: datastore_service_pb.ExistsArgs, callback: grpc.requestCallback<datastore_service_pb.ExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: datastore_service_pb.ExistsArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<datastore_service_pb.ExistsResponse>): grpc.ClientUnaryCall;
  exists(argument: datastore_service_pb.ExistsArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<datastore_service_pb.ExistsResponse>): grpc.ClientUnaryCall;
  get(argument: datastore_service_pb.GetArgs, callback: grpc.requestCallback<datastore_service_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: datastore_service_pb.GetArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<datastore_service_pb.GetResponse>): grpc.ClientUnaryCall;
  get(argument: datastore_service_pb.GetArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<datastore_service_pb.GetResponse>): grpc.ClientUnaryCall;
  upsert(argument: datastore_service_pb.UpsertArgs, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  upsert(argument: datastore_service_pb.UpsertArgs, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  upsert(argument: datastore_service_pb.UpsertArgs, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
