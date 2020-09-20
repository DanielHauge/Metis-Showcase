import React from 'react';
import Card from 'react-bootstrap/Card'



export interface IProps {
    title: string;
    description: string;
    lastUpdated: Date;
    uri: string;
}

export class RepositoryTile extends React.Component<IProps> {

    render() {
        return (
            <Card>
                <Card.Header>{this.props.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            {this.props.description}
                            {' '}
                        </p>
                    </blockquote>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>

            </Card>
        )
    };
}