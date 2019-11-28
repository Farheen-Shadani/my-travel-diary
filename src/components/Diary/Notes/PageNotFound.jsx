import React from 'react';
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';

export default function PageNotFound() {

    return (

        <Card.Body className="NoteNotFound">

            <Card.Title> Note Not Found ! </Card.Title>
            <Card.Text>Please go back to <Link to="/">Home Page</Link>.</Card.Text>

        </Card.Body>

    )
}