export { EXAMPLE_DATASTORE_SERVER_VERSION } from "./example_datastore_server_version/example_datastore_server_version";
export { LISTEN_PROTOCOL, LISTEN_PORT } from "./datastore_rpc_api_consts/datastore_rpc_api_consts";

//TODO: DELETE THIS LINE AFTER gRPC WEB IS IMPLEMENTED
export type { DatastoreServiceClient } from "./datastore_rpc_api_bindings/datastore_service_grpc_pb";

//Datastore RPC API Bindings
export type { DatastoreServiceClient as DatastoreServiceClientNode } from "./datastore_rpc_api_bindings/datastore_service_grpc_pb";
export type { DatastoreServiceClient as DatastoreServiceClientWeb} from "./datastore_rpc_api_bindings/datastore_service_grpc_web_pb";
export { ExistsArgs, ExistsResponse, GetArgs, GetResponse, UpsertArgs } from "./datastore_rpc_api_bindings/datastore_service_pb";
