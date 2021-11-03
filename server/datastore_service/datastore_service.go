package datastore_service

import (
	"context"
	"github.com/kurtosis-tech/example-datastore-server/api/golang/datastore_rpc_api_bindings"
	"github.com/kurtosis-tech/stacktrace"
	"google.golang.org/protobuf/types/known/emptypb"
	"sync"
)

type DatastoreService struct {
	// This embedding is required by gRPC
	datastore_rpc_api_bindings.UnimplementedDatastoreServiceServer
	keyValueStore map[string]string
	mutex sync.Mutex
}

func NewDatastoreService(keyValueStore map[string]string, mutex sync.Mutex) *DatastoreService {
	return &DatastoreService{keyValueStore: keyValueStore, mutex: mutex}
}

func (datastoreService DatastoreService) IsAvailable(ctx context.Context, args *emptypb.Empty) (*emptypb.Empty, error) {
	return &emptypb.Empty{}, nil
}

func (datastoreService DatastoreService) Exists(ctx context.Context, args *datastore_rpc_api_bindings.ExistsArgs) (*datastore_rpc_api_bindings.ExistsResponse, error) {
	datastoreService.mutex.Lock()
	defer datastoreService.mutex.Unlock()

	key := args.Key

	_, found := datastoreService.keyValueStore[key]

	response := &datastore_rpc_api_bindings.ExistsResponse{
		Exists: found,
	}

	return response,nil
}

func (datastoreService DatastoreService) Get(ctx context.Context, args *datastore_rpc_api_bindings.GetArgs) (*datastore_rpc_api_bindings.GetResponse, error) {
	datastoreService.mutex.Lock()
	defer datastoreService.mutex.Unlock()

	key := args.Key

	value, found := datastoreService.keyValueStore[key]
	if !found {
		return nil, stacktrace.NewError("There is not record with key '%v' in the datastore", key)
	}

	response := &datastore_rpc_api_bindings.GetResponse{
		Value: value,
	}

	return response, nil
}

func (datastoreService DatastoreService) Upsert(ctx context.Context, args *datastore_rpc_api_bindings.UpsertArgs) (*emptypb.Empty, error) {
	datastoreService.mutex.Lock()
	defer datastoreService.mutex.Unlock()

	key := args.Key
	value := args.Value

	datastoreService.keyValueStore[key] = value

	return &emptypb.Empty{}, nil
}
