import React from 'react';
import { Link } from 'react-router-dom';
import {BrowseData, NavigationType, GroupNodeData, RepoNodeData} from './../../api/api'
import { GroupTile } from '../content/GroupTile';
import { RepositoryTile } from '../content/RepositoryTile';

export default class Browse extends React.Component<BrowseData> {

    constructor(props: BrowseData) {
        super(props)
    }

    componentDidMount(){
        console.log("browse", " mounted")
    }

    render() {
        return (
            <div className="Browse">
                <h1>{this.props.title}</h1>
                {this.props.immediateChildren && this.props.immediateChildren.map(children => {
                    switch (children.type) {
                        case NavigationType.Group:
                            return (<Link key={children.uri} to={children.uri}> <GroupTile {...children as GroupNodeData} /> </Link>)
                        default:
                            return (<Link key={children.uri} to={children.uri}><RepositoryTile {...children as RepoNodeData} /> </Link>)
                    }
                })}
            </div>
        )
    };
}