// package: Metis_Showcase
// file: proto/showcase.proto

import * as proto_showcase_pb from "../proto/showcase_pb";
export class Site {
  static serviceName = "Metis_Showcase.Site";
}
export namespace Site {
  export class Configuration {
    static readonly methodName = "Configuration";
    static readonly service = Site;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = proto_showcase_pb.EmptyRequest;
    static readonly responseType = proto_showcase_pb.Config;
  }
}
