package datastore_service

import (
	"context"
	"github.com/kurtosis-tech/example-datastore/api/golang/datastore_rpc_api_bindings"
	"google.golang.org/protobuf/types/known/emptypb"
	"github.com/palantir/stacktrace"
	"sync"
)

type DatastoreService struct {
	// This embedding is required by gRPC
	datastore_rpc_api_bindings.UnimplementedDatastoreServiceServer
	repository map[string]string
	mutex sync.Mutex
}

func NewDatastoreService(repository map[string]string, mutex sync.Mutex) *DatastoreService {
	return &DatastoreService{repository: repository, mutex: mutex}
}

func (datastoreService DatastoreService) IsAvailable(ctx context.Context, args *emptypb.Empty) (*emptypb.Empty, error) {
	return &emptypb.Empty{}, nil
}

func (datastoreService DatastoreService) Exists(ctx context.Context, args *datastore_rpc_api_bindings.ExistsArgs) (*datastore_rpc_api_bindings.ExistsResponse, error) {
	datastoreService.mutex.Lock()
	defer datastoreService.mutex.Unlock()

	key := args.Key

	var exists bool
	_, found := datastoreService.repository[key]
	if found {
		exists = true
	}

	response := &datastore_rpc_api_bindings.ExistsResponse{
		Exists: exists,
	}

	return response,nil
}

func (datastoreService DatastoreService) Get(ctx context.Context, args *datastore_rpc_api_bindings.GetArgs) (*datastore_rpc_api_bindings.GetResponse, error) {
	datastoreService.mutex.Lock()
	defer datastoreService.mutex.Unlock()

	key := args.Key

	value, found := datastoreService.repository[key]
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

	datastoreService.repository[key] = value

	return &emptypb.Empty{}, nil
}
