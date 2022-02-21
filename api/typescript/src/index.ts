export { EXAMPLE_DATASTORE_SERVER_VERSION } from "./example_datastore_server_version/example_datastore_server_version";
export { LISTEN_PROTOCOL, LISTEN_PORT } from "./datastore_rpc_api_consts/datastore_rpc_api_consts";

//TODO: DELETE THIS LINE ADTER gRPC WEB IS IMPLEMENTED
export { DatastoreServiceClient } from "./datastore_rpc_api_bindings/datastore_service_grpc_pb";


//Datastore RPC API Bindings
export { DatastoreServiceClient as DatastoreServiceClientNode } from "./datastore_rpc_api_bindings/datastore_service_grpc_pb";
export { DatastoreServiceClient as DatastoreServiceClientWeb} from "./datastore_rpc_api_bindings/datastore_service_grpc_web_pb";
export { ExistsArgs, ExistsResponse, GetArgs, GetResponse, UpsertArgs } from "./datastore_rpc_api_bindings/datastore_service_pb";
