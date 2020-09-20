import { httpclient } from 'typescript-http-client'
import { IProps as RepositoryTileProps } from './../components/content/RepositoryTile'


const GG = "https://img.etimg.com/thumb/width-1200,height-900,imgsize-124491,resizemode-1,msid-76304052/tech/internet/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg";
export interface Config {

    featuredRepos: RepoNodeData[];
    rootNavigationNode: Node;
}



export enum NavigationType {
    Group = 0, Showcase = 1
}

export interface Node {
    data: NodeData;
    Children: Map<string,Node>;
}

export interface NodeData {
    title: string;
    uri: string;
    type: NavigationType;
}

export class BrowseData implements NodeData {
    Children: Map<string,Node>;
    title: string;
    uri: string;
    type: NavigationType;

    constructor(self: Node) {
        this.title = self.data.title;
        this.uri = self.data.uri;
        this.type = self.data.type;
        this.Children = self.Children;
    }
}

export class GroupNodeData implements NodeData {
    title: string;
    type: NavigationType;
    picture: string;
    uri: string;
    constructor(title: string, uri: string, picture: string) {
        this.title = title;
        this.type = NavigationType.Group;
        this.uri = uri;
        this.picture = picture;
    }
}

export class RepoNodeData implements NodeData, RepositoryTileProps {
    title: string;
    description: string;
    lastUpdated: Date;
    uri: string;
    type: NavigationType;
    constructor(title: string, description: string, lastUpdated: Date, uri: string) {
        this.title = title;
        this.description = description;
        this.lastUpdated = lastUpdated;
        this.uri = uri;
        this.type = NavigationType.Showcase;
    }
}



export class ApiClient {
    client: httpclient.HttpClient;

    constructor() {
        this.client = httpclient.newHttpClient();
    }

    navigationConfig(): Config {
        const config = process.env.NODE_ENV === 'production' ? this.testNavigationConfig() : this.testNavigationConfig();
        return config;
    }

    // main/first
    // main/first/nested
    // main/second

    testNavigationConfig(): Config {
        return {
            featuredRepos:[new RepoNodeData("Featured1", "This is description featured test", new Date(), "main/first/nested")],
            rootNavigationNode: {
                data: new GroupNodeData("main title", "main", GG),
                Children: new Map([
                    ["first", {data: new GroupNodeData("first title", "first", GG),
                        Children: new Map([
                            ["nested", {data:{title:"Nested title", type:NavigationType.Showcase, uri:"nested"},
                                Children: new Map([]), 
                            } as Node]])
                    } as Node], 
                    ["second", {data: new GroupNodeData("second", "second", GG), Children: new Map([])} as Node],
                    ["Third", {data: new GroupNodeData("Third", "Third", GG), Children: new Map([])} as Node],
                    ["Fourth", {data: new GroupNodeData("Fourth", "Fourth", GG), Children: new Map([])} as Node],
                    ["first showcase", {data:{title:"first showcase", type:NavigationType.Showcase, uri:"showcase"},
                        Children: new Map([]),
                    } as Node]]),
            }
        }

    }
}