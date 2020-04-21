// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_showcase_pb = require('../proto/showcase_pb.js');

function serialize_Metis_Showcase_Config(arg) {
  if (!(arg instanceof proto_showcase_pb.Config)) {
    throw new Error('Expected argument of type Metis_Showcase.Config');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Metis_Showcase_Config(buffer_arg) {
  return proto_showcase_pb.Config.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Metis_Showcase_EmptyRequest(arg) {
  if (!(arg instanceof proto_showcase_pb.EmptyRequest)) {
    throw new Error('Expected argument of type Metis_Showcase.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Metis_Showcase_EmptyRequest(buffer_arg) {
  return proto_showcase_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SiteService = exports.SiteService = {
  configuration: {
    path: '/Metis_Showcase.Site/Configuration',
    requestStream: false,
    responseStream: false,
    requestType: proto_showcase_pb.EmptyRequest,
    responseType: proto_showcase_pb.Config,
    requestSerialize: serialize_Metis_Showcase_EmptyRequest,
    requestDeserialize: deserialize_Metis_Showcase_EmptyRequest,
    responseSerialize: serialize_Metis_Showcase_Config,
    responseDeserialize: deserialize_Metis_Showcase_Config,
  },
};

exports.SiteClient = grpc.makeGenericClientConstructor(SiteService);
