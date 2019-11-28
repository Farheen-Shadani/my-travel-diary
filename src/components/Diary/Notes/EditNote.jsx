import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NoteContext } from '../Contexts';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class EditNote extends Component {
    static contextType = NoteContext;

    paramID = Number(this.props.match.params.id);
    filtered = this.context.notes.filter(note => note.id === this.paramID)[0]

    state = {
        id: this.paramID,
        title: this.filtered.title,
        description: this.filtered.description
    }

    change = editedNote => {
        this.setState({
            [editedNote.target.name]: editedNote.target.value
        })
    }

    submit = editedNote => {
        editedNote.preventDefault();
        const { id, title, description } = this.state;

        const err = {
            title: alert('Please Insert a Title !'),
            description: alert('Please Insert a Discription !')
        }

        //  IF TITLE & DESCRIPTION NOT GIVEN
        if (title === '' && description === '') {
            this.setState({
                errors: {
                    title: err.title,
                    description: err.description
                }
            });
            return;
        }
        //  IF TITLE IS NOT GIVEN
        if (title === '') {
            this.setState({
                errors: {
                    title: err.title,
                    description: ''
                }
            });
            return;
        }
        //  IF DESCRIPTION IS NOT GIVEN
        if (description === '') {
            this.setState({
                errors: {
                    title: '',
                    description: err.description
                }
            });
            return;
        }
        //  IF TITLE & DESCRIPTION ARE GIVEN
        if (title !== '' && description !== '') {
            const editedNote = { id, title, description }
            this.context.editNote(editedNote);
            this.props.history.push('/');
            return;
        }

    }

    render() {

        const { id, title, description } = this.state;

        return (
            <Card.Body className="EditNote">

                <Card.Title> Edit Note </Card.Title>

                <form onSubmit={this.submit} >

                    <input className="input-text"
                        name="title"
                        value={title}
                        onChange={this.change}
                        placeholder="Enter Title Of Note"
                    />

                    <textarea className="input-textarea"
                        name="description"
                        value={description}
                        onChange={this.change}
                        placeholder="Enter Note's Description"
                        rows="5" >
                    </textarea>

                    <ButtonGroup className="button-group" aria-label="Basic example">

                        <Button className="text-danger" variant="light" onClick={() => this.context.delete(id)}>
                            Delete<FontAwesomeIcon icon={faTrash} />
                        </Button>

                        <Button className="text-danger" variant="light">
                            <Link to="/">Don't Save</Link>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>

                        <Button className="text-info" variant="light" onClick={this.submit} >
                            Save Note<FontAwesomeIcon icon={faCheck} />
                        </Button>

                    </ButtonGroup>

                </form>

            </Card.Body>

        )
    }
}