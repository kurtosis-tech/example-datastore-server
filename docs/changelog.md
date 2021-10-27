# TBD

# 0.1.1
### Features
* Created `DatastoreService` which implements the service on the server side
* Configured the `RPC` server that will handle the `DatastoreService` requests
* Added `Dockerfile` which defines `example-datastore-server` Docker image
* Added `.dockerignore` to improve velocity during Docker buildings
* Added `example_datastore_server_version.go` which contains the server version value
* Added `update-own-version-constants.sh` script to automatically update the version value in `example_datastore_server_version.go` file
* Added `get-docker-image-tag.sh` script to automatically set Docker image tag
* Added `build.sh` script which builds the `example-datastore-server` binary field and build the Docker image
* Updated Circle CI configuration adding two jobs: `check_server_code` and `push_server_artifacts` to check server code and publish the image in Docker Hub

### Changes
* Moved `supported-languages.txt` file into the `api` directory because it defines the supported languages of the API

### Fixes
* Fix GO package name in Golang API

# 0.1.0
### Features
* Created datastore service API protobuf definition in `datastore_service.proto` file
* Added `regenerate-protobuf-output.sh` shell script to regenerate rpc Golang and Typescript binding files
* Edited `index.ts` file to export Typescript binding class
* Configured `package.json` file with the repository information
