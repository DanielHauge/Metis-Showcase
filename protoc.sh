protoc -I . --plugin=protoc-gen-ts=./metis-showcase/node_modules/.bin/protoc-gen-ts --ts_out=service=true:./metis-showcase/src --js_out=import_style=commonjs,binary:./metis-showcase/src ./proto/showcase.proto