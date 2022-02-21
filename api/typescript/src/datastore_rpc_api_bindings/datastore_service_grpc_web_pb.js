/**
 * @fileoverview gRPC-Web generated client stub for datastore_api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.datastore_api = require('./datastore_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.datastore_api.DatastoreServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.datastore_api.DatastoreServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatastoreService_IsAvailable = new grpc.web.MethodDescriptor(
  '/datastore_api.DatastoreService/IsAvailable',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datastore_api.DatastoreServiceClient.prototype.isAvailable =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datastore_api.DatastoreService/IsAvailable',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_IsAvailable,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.datastore_api.DatastoreServicePromiseClient.prototype.isAvailable =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/datastore_api.DatastoreService/IsAvailable',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_IsAvailable);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.datastore_api.ExistsArgs,
 *   !proto.datastore_api.ExistsResponse>}
 */
const methodDescriptor_DatastoreService_Exists = new grpc.web.MethodDescriptor(
  '/datastore_api.DatastoreService/Exists',
  grpc.web.MethodType.UNARY,
  proto.datastore_api.ExistsArgs,
  proto.datastore_api.ExistsResponse,
  /**
   * @param {!proto.datastore_api.ExistsArgs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.datastore_api.ExistsResponse.deserializeBinary
);


/**
 * @param {!proto.datastore_api.ExistsArgs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.datastore_api.ExistsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.datastore_api.ExistsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datastore_api.DatastoreServiceClient.prototype.exists =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datastore_api.DatastoreService/Exists',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Exists,
      callback);
};


/**
 * @param {!proto.datastore_api.ExistsArgs} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.datastore_api.ExistsResponse>}
 *     Promise that resolves to the response
 */
proto.datastore_api.DatastoreServicePromiseClient.prototype.exists =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/datastore_api.DatastoreService/Exists',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Exists);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.datastore_api.GetArgs,
 *   !proto.datastore_api.GetResponse>}
 */
const methodDescriptor_DatastoreService_Get = new grpc.web.MethodDescriptor(
  '/datastore_api.DatastoreService/Get',
  grpc.web.MethodType.UNARY,
  proto.datastore_api.GetArgs,
  proto.datastore_api.GetResponse,
  /**
   * @param {!proto.datastore_api.GetArgs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.datastore_api.GetResponse.deserializeBinary
);


/**
 * @param {!proto.datastore_api.GetArgs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.datastore_api.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.datastore_api.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datastore_api.DatastoreServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datastore_api.DatastoreService/Get',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Get,
      callback);
};


/**
 * @param {!proto.datastore_api.GetArgs} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.datastore_api.GetResponse>}
 *     Promise that resolves to the response
 */
proto.datastore_api.DatastoreServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/datastore_api.DatastoreService/Get',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.datastore_api.UpsertArgs,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_DatastoreService_Upsert = new grpc.web.MethodDescriptor(
  '/datastore_api.DatastoreService/Upsert',
  grpc.web.MethodType.UNARY,
  proto.datastore_api.UpsertArgs,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.datastore_api.UpsertArgs} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.datastore_api.UpsertArgs} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.datastore_api.DatastoreServiceClient.prototype.upsert =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/datastore_api.DatastoreService/Upsert',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Upsert,
      callback);
};


/**
 * @param {!proto.datastore_api.UpsertArgs} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.datastore_api.DatastoreServicePromiseClient.prototype.upsert =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/datastore_api.DatastoreService/Upsert',
      request,
      metadata || {},
      methodDescriptor_DatastoreService_Upsert);
};


module.exports = proto.datastore_api;

