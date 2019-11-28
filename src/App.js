import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotesProvider from './components/Diary/NotesProvider';
import AddNote from './components/Diary/Notes/AddNote';
import EditNote from './components/Diary/Notes/EditNote';
import Note from './components/Diary/Notes/Note';
import AllNotes from './components/Diary/Notes/AllNotes';
import PageNotFound from './components/Diary/Notes/PageNotFound';
import Header from './components/Diary/Header/Header';
import Footer from './components/Diary/Footer/Footer';

const App=()=> {

    return (

      <div className="App">

        <NotesProvider>


          <Header />

          <Router>
            <Switch>
              <Route path="/add" component={AddNote} />
              <Route path="/edit/:id" component={EditNote} />
              <Route path="/:id" component={Note} />
              <Route path="/" component={AllNotes} exact />
              <Route component={PageNotFound} />
            </Switch>
          </Router>

          <Footer />

        </NotesProvider>

      </div>

    );

  }

export default App;