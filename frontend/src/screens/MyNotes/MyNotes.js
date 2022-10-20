import React from 'react';
import { Button, Card,Badge, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import notes, {} from "../../data/notes";

function MyNotes() {
   const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")) {

    }
   };

  return (
    <MainScreen title='Welcome Back Piyush Agarwal..'>
      <Link to='createnote'>
        <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
          Create New Note
        </Button>
        </Link>
        {notes.map(note => (
       <Accordion>
        <Accordion.Item eventKey="0">
        <Card style={{margin: 10}}>
        <Accordion.Header as={Card.Text} variant="link" eventKey="0">
          <Card.Header style={{display: "flex",textAlign:"left"}}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
                width: '60rem',
              }}
            >
            {note.title}
            </span>
          <div>
            <Button href={`/note/${note._id}`}>Edit</Button>
            <Button 
              variant="danger" 
              className='mx-2'
              onClick={() => deleteHandler(note._id)}
              >
              Delete
            </Button>
          </div>
        </Card.Header>
        </Accordion.Header>
        <Accordion.Body eventKey="0">
          <Card.Body>
            <h4>
              <Badge bg="success" text="light">Category - {note.category}</Badge>
            </h4>
          <blockquote className="blockquote mb-0">
          <p>
            {note.content}
          </p>
          <footer className="blockquote-footer">Created On - date</footer>
        </blockquote>
          </Card.Body>
          </Accordion.Body>
        </Card>
        </Accordion.Item>
        </Accordion>
          ))
        }
    </MainScreen>
  )
}

export default MyNotes
