// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.3
// source: datastore_service.proto

package datastore_rpc_api_bindings

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// DatastoreServiceClient is the client API for DatastoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type DatastoreServiceClient interface {
	//Used to check service availability
	IsAvailable(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error)
	//Checks if a given key Exists
	Exists(ctx context.Context, in *ExistsArgs, opts ...grpc.CallOption) (*ExistsResponse, error)
	//Gets the value for a given key from the datastore
	Get(ctx context.Context, in *GetArgs, opts ...grpc.CallOption) (*GetResponse, error)
	//Puts a value for the given key into the datastore
	Upsert(ctx context.Context, in *UpsertArgs, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type datastoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewDatastoreServiceClient(cc grpc.ClientConnInterface) DatastoreServiceClient {
	return &datastoreServiceClient{cc}
}

func (c *datastoreServiceClient) IsAvailable(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/datastore_api.DatastoreService/IsAvailable", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datastoreServiceClient) Exists(ctx context.Context, in *ExistsArgs, opts ...grpc.CallOption) (*ExistsResponse, error) {
	out := new(ExistsResponse)
	err := c.cc.Invoke(ctx, "/datastore_api.DatastoreService/Exists", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datastoreServiceClient) Get(ctx context.Context, in *GetArgs, opts ...grpc.CallOption) (*GetResponse, error) {
	out := new(GetResponse)
	err := c.cc.Invoke(ctx, "/datastore_api.DatastoreService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *datastoreServiceClient) Upsert(ctx context.Context, in *UpsertArgs, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/datastore_api.DatastoreService/Upsert", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// DatastoreServiceServer is the server API for DatastoreService service.
// All implementations must embed UnimplementedDatastoreServiceServer
// for forward compatibility
type DatastoreServiceServer interface {
	//Used to check service availability
	IsAvailable(context.Context, *emptypb.Empty) (*emptypb.Empty, error)
	//Checks if a given key Exists
	Exists(context.Context, *ExistsArgs) (*ExistsResponse, error)
	//Gets the value for a given key from the datastore
	Get(context.Context, *GetArgs) (*GetResponse, error)
	//Puts a value for the given key into the datastore
	Upsert(context.Context, *UpsertArgs) (*emptypb.Empty, error)
	mustEmbedUnimplementedDatastoreServiceServer()
}

// UnimplementedDatastoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedDatastoreServiceServer struct {
}

func (UnimplementedDatastoreServiceServer) IsAvailable(context.Context, *emptypb.Empty) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IsAvailable not implemented")
}
func (UnimplementedDatastoreServiceServer) Exists(context.Context, *ExistsArgs) (*ExistsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Exists not implemented")
}
func (UnimplementedDatastoreServiceServer) Get(context.Context, *GetArgs) (*GetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedDatastoreServiceServer) Upsert(context.Context, *UpsertArgs) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Upsert not implemented")
}
func (UnimplementedDatastoreServiceServer) mustEmbedUnimplementedDatastoreServiceServer() {}

// UnsafeDatastoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to DatastoreServiceServer will
// result in compilation errors.
type UnsafeDatastoreServiceServer interface {
	mustEmbedUnimplementedDatastoreServiceServer()
}

func RegisterDatastoreServiceServer(s grpc.ServiceRegistrar, srv DatastoreServiceServer) {
	s.RegisterService(&DatastoreService_ServiceDesc, srv)
}

func _DatastoreService_IsAvailable_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatastoreServiceServer).IsAvailable(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/datastore_api.DatastoreService/IsAvailable",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatastoreServiceServer).IsAvailable(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatastoreService_Exists_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExistsArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatastoreServiceServer).Exists(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/datastore_api.DatastoreService/Exists",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatastoreServiceServer).Exists(ctx, req.(*ExistsArgs))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatastoreService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatastoreServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/datastore_api.DatastoreService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatastoreServiceServer).Get(ctx, req.(*GetArgs))
	}
	return interceptor(ctx, in, info, handler)
}

func _DatastoreService_Upsert_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpsertArgs)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(DatastoreServiceServer).Upsert(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/datastore_api.DatastoreService/Upsert",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(DatastoreServiceServer).Upsert(ctx, req.(*UpsertArgs))
	}
	return interceptor(ctx, in, info, handler)
}

// DatastoreService_ServiceDesc is the grpc.ServiceDesc for DatastoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var DatastoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "datastore_api.DatastoreService",
	HandlerType: (*DatastoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "IsAvailable",
			Handler:    _DatastoreService_IsAvailable_Handler,
		},
		{
			MethodName: "Exists",
			Handler:    _DatastoreService_Exists_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _DatastoreService_Get_Handler,
		},
		{
			MethodName: "Upsert",
			Handler:    _DatastoreService_Upsert_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "datastore_service.proto",
}
