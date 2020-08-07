import { httpclient } from 'typescript-http-client'
import { IProps as RepositoryTileProps } from './../components/content/RepositoryTile'


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
    uri: string;
    constructor(title: string, uri: string) {
        this.title = title;
        this.type = NavigationType.Group;
        this.uri = uri;
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


    testNavigationConfig(): Config {
        return {
            featuredRepos:[new RepoNodeData("Featured1", "This is description featured test", new Date(), "main/One/Two/Tree/Featured")],
            rootNavigationNode: {
                data:{title:"main title", type:NavigationType.Group, uri:"main"},
                Children: new Map([["hejsa 1", {
                    data:{title:"first title", type:NavigationType.Showcase, uri:"first"},
                    Children: new Map([]),
                } as Node], ["hejsa 2", {
                    data:{title:"second title", type:NavigationType.Showcase, uri:"second"},
                    Children: new Map([]),
                } as Node]]),
            }
        }

    }
}