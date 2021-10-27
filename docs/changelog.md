# TBD

# 0.3.1
### Changes
* Exported `EXAMPLE_DATASTORE_SERVER_VERSION` constant in Typescript library, allowing users to get it

### Fixes
* Fix `Dockerfile` filepath in `.dockerignore` file

# 0.3.0
### Changes
* Renamed `DatastoreService.repository` field to `DatastoreService.keyValueStore`

### Breaking Changes
* Revert change in protobuf file, `GetResponse.value` field type and `UpsertArgs.value` both are string type again
  * Users should use string field type when are setting these values

# 0.2.0
### Breaking Changes
* Updated protobuf file, `GetResponse.value` field type and `UpsertArgs.value` field type were changed from string to uint32
  * Users should use unit32 field type when are setting these values

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
