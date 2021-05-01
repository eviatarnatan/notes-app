import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@material-ui/icons/Add';
import { Button, Container, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import NoteForm from "../components/noteForm";
import { useHistory, useLocation } from "react-router";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import './formStyle.css';
import setNoteDetails, { setBody, setColor, setId, setIsRead, setPriority } from "../noteActions";
import setTitle from "../noteActions";


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
export default function NotesMain() {
    const classes = useStyles();
    
    //getting the token from the reducer
    const [notesList, setNotesList] = useState([])
    const history = useHistory();
    const noteDispatch = useDispatch();
    const location = useLocation();
    const token = useSelector((state) => {
        return state.user.token;
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
      noteDispatch(setIsRead(""));
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
      noteDispatch(setIsRead(noteItem.isRead));
      history.push("/notes-app/notesMain/editNote");
    }

    useEffect(
        () => {
            console.log("Am I here?");
            if (!token) return;
            console.log("Am I there?")
            loadNotes();
        },
        [token, ]
    )
    return (
        <div className="list-class">
            <ul className="list-class">
            {
                notesList.map(function(noteItem) {
                    return (
                        <div className="div-distance">
                        <li>
                          <Button onClick={() => {handleEditNote(noteItem)}}
                          >
                        <h1 className="button-change">
                            {
                                noteItem.title
                            }
                        </h1>
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
        
            <IconButton
             onClick = {() => {handleAddNote()}}
             color= "primary"
             >
            

            <AddIcon
            >
            </AddIcon>
            </IconButton>
            
           {/*} <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
        </div>*/}
        </div>
    )
}