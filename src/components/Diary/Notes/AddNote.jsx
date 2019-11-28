import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from '../Contexts';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class AddNote extends Component {
    static contextType = NoteContext;

    state = {
        id: this.context.notes.length,
        title: '',
        description: '',
        errors: {}
    }

    changeNote = newNote => {
        this.setState({
            [newNote.target.name]: newNote.target.value
        })
    }

    submitNewNote = newNote => {

        newNote.preventDefault();

        const {
            id,
            title,
            description
        } = this.state;

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
            const note = {
                id,
                title,
                description
            }
            this.context.addNote(note);
            this.props.history.push('/');
            this.setState({});
            return;
        }

    }

    render() {
        const {
            title,
            description
        } = this.state;
        return (
            <Card.Body className="AddNote">

                <Card.Title> Add Note </Card.Title>

                <form onSubmit={this.submitNewNote} >


                    <input className="input input-text"
                        name="title"
                        value={title}
                        onChange={this.changeNote}
                        placeholder="Enter Title Of Note" />

                    <textarea className="input input-text"
                        name="description"
                        value={description}
                        onChange={this.changeNote}
                        placeholder="Enter Note's Description"
                        rows="5" >
                    </textarea>


                    <ButtonGroup className="button-group" aria-label="Basic example">

                        <Button className="text-danger" variant="light">
                            <Link to="/">Don't Save</Link>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>

                        <Button className="text-info" variant="light" onClick={this.submitNewNote} >
                            Add Note<FontAwesomeIcon icon={faCheck} />
                        </Button>

                    </ButtonGroup>

                </form>
            </Card.Body>
        )
    }
}

export default AddNote;