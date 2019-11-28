import React, { Component } from 'react'
import { NoteContext } from '../Contexts';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

export default class AllNotes extends Component {
    static contextType = NoteContext;

    state = {
        search: ''
    }

    searchSubmit = searchedNote => {
        searchedNote.preventDefault();

        this.props.history.push("/search")
    }

    change = searchedNote => {
        this.setState({
            [searchedNote.target.name]: searchedNote.target.value
        })
    }

    note = id => {
        this.props.history.push(`/${id}`)
    }

    edit = id => {
        this.props.history.push(`/edit/${id}`);
    }

    render() {
        const { notes } = this.context;

        return (
            <div className="AllNotes">
                <div >
                    <h1>All Notes <sup>{notes.length}</sup></h1>

                    <form onSubmit={this.searchSubmit} >
                        <input
                            type="search"
                            className="search-input"
                            name="search"
                            onChange={this.change}
                            value={this.state.search}
                            placeholder="Search Notes..."
                        />
                    </form>
                </div>

                {notes.length < 1 ? <h2 className="page-err">No more notes are available...</h2> : null}

                {
                    notes.map((note, index) => {
                        return (

                            <Card className="note-card" key={index}>

                                <Card.Body className="note-info" onClick={() => this.note(note.id)}>
                                    <Card.Title>{note.title}</Card.Title>
                                    <Card.Text>{note.description}</Card.Text>
                                </Card.Body>

                                <ButtonGroup className="button-group" aria-label="Basic example">

                                    <Button className="text-danger" variant="light" onClick={this.context.delete(note.id)}>
                                        Delete<FontAwesomeIcon icon={faTrash} />
                                    </Button>

                                    <Button className="text-info" variant="light" onClick={() => this.edit(note.id)}>
                                        Edit<FontAwesomeIcon icon={faEdit} />
                                    </Button>

                                </ButtonGroup>

                            </Card>

                        )
                    })
                }
            </div>
        )
    }
}