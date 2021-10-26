// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var datastore_service_pb = require('./datastore_service_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_datastore_api_ExistsArgs(arg) {
  if (!(arg instanceof datastore_service_pb.ExistsArgs)) {
    throw new Error('Expected argument of type datastore_api.ExistsArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datastore_api_ExistsArgs(buffer_arg) {
  return datastore_service_pb.ExistsArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datastore_api_ExistsResponse(arg) {
  if (!(arg instanceof datastore_service_pb.ExistsResponse)) {
    throw new Error('Expected argument of type datastore_api.ExistsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datastore_api_ExistsResponse(buffer_arg) {
  return datastore_service_pb.ExistsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datastore_api_GetArgs(arg) {
  if (!(arg instanceof datastore_service_pb.GetArgs)) {
    throw new Error('Expected argument of type datastore_api.GetArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datastore_api_GetArgs(buffer_arg) {
  return datastore_service_pb.GetArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datastore_api_GetResponse(arg) {
  if (!(arg instanceof datastore_service_pb.GetResponse)) {
    throw new Error('Expected argument of type datastore_api.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datastore_api_GetResponse(buffer_arg) {
  return datastore_service_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_datastore_api_UpsertArgs(arg) {
  if (!(arg instanceof datastore_service_pb.UpsertArgs)) {
    throw new Error('Expected argument of type datastore_api.UpsertArgs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_datastore_api_UpsertArgs(buffer_arg) {
  return datastore_service_pb.UpsertArgs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var DatastoreServiceService = exports.DatastoreServiceService = {
  // Used to check service availability
isAvailable: {
    path: '/datastore_api.DatastoreService/IsAvailable',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Checks if a given key Exists
exists: {
    path: '/datastore_api.DatastoreService/Exists',
    requestStream: false,
    responseStream: false,
    requestType: datastore_service_pb.ExistsArgs,
    responseType: datastore_service_pb.ExistsResponse,
    requestSerialize: serialize_datastore_api_ExistsArgs,
    requestDeserialize: deserialize_datastore_api_ExistsArgs,
    responseSerialize: serialize_datastore_api_ExistsResponse,
    responseDeserialize: deserialize_datastore_api_ExistsResponse,
  },
  // Gets the value for a given key from the datastore
get: {
    path: '/datastore_api.DatastoreService/Get',
    requestStream: false,
    responseStream: false,
    requestType: datastore_service_pb.GetArgs,
    responseType: datastore_service_pb.GetResponse,
    requestSerialize: serialize_datastore_api_GetArgs,
    requestDeserialize: deserialize_datastore_api_GetArgs,
    responseSerialize: serialize_datastore_api_GetResponse,
    responseDeserialize: deserialize_datastore_api_GetResponse,
  },
  // Puts a value for the given key into the datastore
upsert: {
    path: '/datastore_api.DatastoreService/Upsert',
    requestStream: false,
    responseStream: false,
    requestType: datastore_service_pb.UpsertArgs,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_datastore_api_UpsertArgs,
    requestDeserialize: deserialize_datastore_api_UpsertArgs,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.DatastoreServiceClient = grpc.makeGenericClientConstructor(DatastoreServiceService);
