module github.com/kurtosis-tech/example-datastore-server/server

go 1.15

replace github.com/kurtosis-tech/example-datastore-server/api/golang => ../api/golang

require (
	github.com/kurtosis-tech/example-datastore-server/api/golang v0.0.0 // Local import
	github.com/kurtosis-tech/minimal-grpc-server/golang v0.0.0-20210921153930-d70d7667c51b
	github.com/kurtosis-tech/stacktrace v0.0.0-20211028211901-1c67a77b5409
	github.com/sirupsen/logrus v1.8.1
	golang.org/x/net v0.0.0-20210226172049-e18ecbb05110 // indirect
	golang.org/x/sys v0.0.0-20210615035016-665e8c7367d1 // indirect
	google.golang.org/grpc v1.38.0
	google.golang.org/protobuf v1.26.0
)
