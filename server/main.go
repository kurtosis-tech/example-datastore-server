/*
 * Copyright (c) 2021 - present Kurtosis Technologies Inc.
 * All Rights Reserved.
 */

package main

import (
	"fmt"
	"github.com/kurtosis-tech/example-datastore-server/api/golang/datastore_rpc_api_bindings"
	"github.com/kurtosis-tech/example-datastore-server/server/datastore_service"
	minimal_grpc_server "github.com/kurtosis-tech/minimal-grpc-server/golang/server"
	"github.com/kurtosis-tech/stacktrace"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"os"
	"sync"
	"time"
)

const (
	successExitCode = 0
	failureExitCode = 1

	grpcServerStopGracePeriod = 5 * time.Second

	listenPort = 1323
	listenProtocol = "tcp"
)

var defaultKurtosisLogLevel = logrus.DebugLevel

func main() {
	// NOTE: we'll want to change the ForceColors to false if we ever want structured logging
	logrus.SetFormatter(&logrus.TextFormatter{
		ForceColors:   true,
		FullTimestamp: true,
	})
	logrus.SetLevel(defaultKurtosisLogLevel)

	err := runMain()
	if err != nil {
		logrus.Errorf("An error occurred when running the main function")
		fmt.Fprintln(logrus.StandardLogger().Out, err)
		os.Exit(failureExitCode)
	}
	os.Exit(successExitCode)
}

func runMain () error {
	newKeyValueStore := map[string]string{}
	mutex := sync.Mutex{}

	datastoreService := datastore_service.NewDatastoreService(newKeyValueStore, mutex)

	datastoreServiceRegistrationFunc := func(grpcServer *grpc.Server) {
		datastore_rpc_api_bindings.RegisterDatastoreServiceServer(grpcServer, datastoreService)
	}
	datastoreServiceServer := minimal_grpc_server.NewMinimalGRPCServer(
		uint32(listenPort),
		listenProtocol,
		grpcServerStopGracePeriod,
		[]func(*grpc.Server){
			datastoreServiceRegistrationFunc,
		},
	)

	logrus.Info("Running server...")
	if err := datastoreServiceServer.Run(); err != nil {
		return stacktrace.Propagate(err, "An error occurred running the server.")
	}
	return nil
}
