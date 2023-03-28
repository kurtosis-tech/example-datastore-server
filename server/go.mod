module github.com/kurtosis-tech/example-datastore-server/server

go 1.18

replace github.com/kurtosis-tech/example-datastore-server/api/golang => ../api/golang

require (
	github.com/kurtosis-tech/example-datastore-server/api/golang v0.0.0 // Local import
	github.com/kurtosis-tech/minimal-grpc-server/golang v0.0.0-20210921153930-d70d7667c51b
	github.com/kurtosis-tech/stacktrace v0.0.0-20211028211901-1c67a77b5409
	github.com/sirupsen/logrus v1.8.1
	google.golang.org/grpc v1.38.0
	google.golang.org/protobuf v1.26.0
)

require (
	github.com/golang/protobuf v1.5.0 // indirect
	github.com/palantir/stacktrace v0.0.0-20161112013806-78658fd2d177 // indirect
	golang.org/x/net v0.0.0-20210226172049-e18ecbb05110 // indirect
	golang.org/x/sys v0.1.0 // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/genproto v0.0.0-20200526211855-cb27e3aa2013 // indirect
)
