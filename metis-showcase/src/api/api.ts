import { httpclient } from 'typescript-http-client'
import { IProps as RepositoryTileProps, RepositoryTile } from './../components/content/RepositoryTile'


export interface Config {

    featuredRepos: RepoNodeData[];
    rootNavigationNode: Node;
}


export interface Node {
    data: NodeData;
    children: Node[];
}

export interface NodeData {
    title: string;
    uri: string;
    type: NavigationType;
}

export class BrowseData implements NodeData {
    immediateChildren: NodeData[];
    title: string;
    uri: string;
    type: NavigationType;

    constructor(self: Node, uriContext: string) {
        this.title = self.data.title;
        this.uri = uriContext + self.data.uri;
        const thatUri = this.uri;
        this.type = self.data.type;
        this.immediateChildren = self.children.slice().map(c => {
            let data = c.data;
            data.uri = thatUri + "/" + data.uri;
            return {...data};
        })
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

export enum NavigationType {
    Group = 0, Showcase = 1
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
            featuredRepos: [new RepoNodeData("first level 2", "this is a description for first level 2", new Date(), "current/level2/first"), new RepoNodeData("first level 2", "this is a description for first level 2", new Date(), "current/level2/level3/first")],
            rootNavigationNode: {
                data: new GroupNodeData("Root level", "current"),
                children: [
                    {
                        data: new GroupNodeData("level 2", "level2"),
                        children: [
                            {
                                data: new RepoNodeData("first level 2", "this is a description for first level 2", new Date(), "first"),
                                children: []
                            },
                            {
                                data: new GroupNodeData("Level 3", "level3"),
                                children: [
                                    {
                                        data: new RepoNodeData("first level 3", "this is a description for first level 3", new Date(), "first"),
                                        children: []
                                    }
                                ]
                            },
                        ],
                    },
                    {
                        data: new RepoNodeData("second level 1", "this is a description for second level 1", new Date(), "second"),
                        children: []
                    },
                    {
                        data: new RepoNodeData("third level 1", "this is a description for third level 1", new Date(), "third"),
                        children: []
                    },
                ]
            }
        }

    }
}