import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NoteContext } from '../Contexts'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Note extends Component {
    static contextType = NoteContext;

    edit = id => {
        this.props.history.push(`/edit/${id}`);
    }

    delete = id => {
        this.context.delete(id);
        this.props.history.push('/')
    }

    render() {
        const paramID = Number(this.props.match.params.id)
        const filtered = this.context.notes.filter(note => note.id === paramID)[0]
        const { title, description } = filtered;
        if (!filtered) {
            this.props.history.push("/")
        }

        return (
            <Card.Body className="Note">

                <Card.Title>{title}</Card.Title>

                <Card.Text>{description}</Card.Text>

                <ButtonGroup className="button-group" aria-label="Basic example">

                    <Button className="text-danger" variant="light" onClick={() => this.delete(paramID)}>
                        Delete<FontAwesomeIcon icon={faTrash} />
                    </Button>

                    <Button className="text-danger" variant="light">
                        <Link to="/">Don't Save</Link>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>

                    <Button className="text-info" variant="light" onClick={() => this.edit(paramID)}>
                        Edit<FontAwesomeIcon icon={faEdit} />
                    </Button>

                </ButtonGroup>

            </Card.Body>
        )
    }
}