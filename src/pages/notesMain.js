import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@material-ui/icons/Add';
import { Button, IconButton, ListItem, makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import './formStyle.css';
import { setBody, setColor, setIcon, setId, setReadFlag, setPriority } from "../noteActions";
import setTitle from "../noteActions";


export default function NotesMain() {
    
    //getting the token from the reducer
    const [notesList, setNotesList] = useState([])
    const history = useHistory();
    const noteDispatch = useDispatch();
    const token = useSelector((state) => {
        return state.user.token;
    })
    const username = useSelector((state) => {
      return state.user.username;
    })
    //const [notes, setNotes] = useState();
    //for fetching the user's notes
    //"http://localhost:8080/notesManager/getnotes"
    const loadNotes = async () => {
        const response = await fetch (
            "http://localhost:8080/notesManager/getnotes" , {
            method:'GET',
            //body: JSON.stringify(values),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
                //'Access-Control-Allow-Origin': '*',
                //'Access-Control-Allow-Methods': 'POST',
                //'Access-Control-Allow-Headers': 'Content-Type'
            }
        }
        );
        const notesList = await response.json();
        console.log(notesList[0])
        //console.log("Notes title is: " + notesList[0].title);
        //console.log("Notes title is: " + notesList[1].title);
        setNotesList(notesList);
    }
    //for deleting a note
    //"http://localhost:8080/notesManager/deleteNote"
    //const loadNotes = async ()


    const handleDeleteNote = async(noteItem) => {
        console.log("I'm inside delete note")
        console.log(noteItem);
        await fetch (
            "http://localhost:8080/notesManager/delete", {
            method:'DELETE',
            body: JSON.stringify(noteItem),
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        //extra for response?

        )
        loadNotes();
    }

    //see later if you need event
    const handleAddNote = () => {
      console.log("Add me!");
      //removing note details, to be able to add a new note
      noteDispatch(setId(""));
      noteDispatch(setTitle(""));
      noteDispatch(setBody(""));
      noteDispatch(setPriority(""));
      noteDispatch(setColor(""));
      noteDispatch(setReadFlag(false));
      noteDispatch(setIcon(""));
        history.push("/notes-app/notesMain/addNote");
    }

    const handleEditNote = (noteItem) => {
      console.log("Edit me!");
      //saving to state note details, to be able to display them when editing the note
      noteDispatch(setId(noteItem.id))
      noteDispatch(setTitle(noteItem.title));
      noteDispatch(setBody(noteItem.body));
      noteDispatch(setPriority(noteItem.priority));
      noteDispatch(setColor(noteItem.color));
      noteDispatch(setReadFlag(noteItem.readFlag));
      noteDispatch(setIcon(noteItem.icon));
      console.log("before going to edit, read status is: " + Object.keys(noteItem));
      history.push("/notes-app/notesMain/editNote");
    }

    useEffect(
        () => {
            if (!token) return;
            loadNotes();
        },
        [token, ]
    )
    return (
      <div>
        <h1> welcome, {username}</h1>
      
        <div className="list-class">
            <ul className="list-class">
            {
                notesList.map(function(noteItem) {
                    return (
                        <div className="div-distance">
                        <li>
                          <Button onClick={() => {handleEditNote(noteItem)}}
                          >
                        <h3 className="button-change">
                            {
                                noteItem.title
                            }
                        </h3>
                        </Button>
                        <IconButton onClick={() => {handleDeleteNote(noteItem)}}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>      
                        </li>
                        </div>
                    )
                })
            }
            </ul> 
            <div className="add-class">
            <IconButton
             onClick = {() => {handleAddNote()}}
             color= "primary"
             >
            

            <AddIcon
            >
            </AddIcon>
            </IconButton>
            </div>

        </div>

        </div>
    )
}