import React from 'react';
import Card from 'react-bootstrap/Card'
import {GroupNodeData} from './../../api/api'



export class GroupTile extends React.Component<GroupNodeData> {

    render() {
        console.log("uuh hallo!")
        return (
            <Card>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    </blockquote>
                </Card.Body>

            </Card>
        )
    };
}