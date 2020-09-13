import React from 'react';
import { Link } from 'react-router-dom';
import {BrowseData, NavigationType, GroupNodeData, RepoNodeData} from './../../api/api'
import { GroupTile } from '../content/GroupTile';
import { RepositoryTile } from '../content/RepositoryTile';

export default class Browse extends React.Component<BrowseData> {

    // constructor(props: BrowseData) {
    //     super(props)
    // }

    componentDidMount(){
        console.log("browse", " mounted")
    }


    render() {
        console.log(this.props)
        const links = new Array<React.ReactFragment>();
        this.props.Children.forEach((children, key) => {
            // links.push(children.data)
            const uri = this.props.uri+"/"+children.data.uri;
            switch (children.data.type) {
                case NavigationType.Group:
                    console.log("It shulda made group")
                    links.push(<><Link key={children.data.uri} to={uri}> <GroupTile {...children.data as GroupNodeData} /> </Link></>)
                default:
                    console.log("It shulda made showcase")
                    links.push(<><Link key={children.data.uri} to={uri}><RepositoryTile {...children.data as RepoNodeData} /> </Link></>)
            }
        });
        return (
            <div className="Browse">
                <h1>{this.props.title}</h1>
                <h1>Browse</h1>
                {links}
                {/* {links.map((x)=> x as React.Component} */}
                {}
            </div>
        )
    };
}