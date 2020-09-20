import React from 'react';
import Card from 'react-bootstrap/Card'
import { GroupNodeData } from './../../api/api'



export class GroupTile extends React.Component<GroupNodeData> {

    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.picture} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    };
}