import React from 'react';
import { IProps as RepositoryTileProps, RepositoryTile } from './../content/RepositoryTile'
import { Link } from 'react-router-dom';
import { NodeData } from '../../api/api';

interface IProps {
    repoTiles: RepositoryTileProps[];
    firstNode: NodeData;
}


export default class Dashboard extends React.Component<IProps> {

    // constructor(props: IProps) {
    //     super(props)
    // }

    componentDidMount() {
        console.log("dashboard", " mounted")
    }

    render() {
        return (
            <div className="Dashboard">
                {this.props.repoTiles && this.props.repoTiles.map(tileProps => {
                    return (<Link key={tileProps.uri} to={tileProps.uri}><RepositoryTile {...tileProps} /> </Link>)
                })}
                <Link to={this.props.firstNode.uri}>Browse</Link>
            </div>
        )
    };
}