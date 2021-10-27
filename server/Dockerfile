# ============= Execution Stage ================
FROM alpine:3.12 AS execution

WORKDIR /run

# Copy the code into the container
COPY ./build/example-datastore-server.bin .

# Execute Kurtosis Engine
CMD ./example-datastore-server.bin
