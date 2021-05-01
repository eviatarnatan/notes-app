import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import  { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Error404 from './pages/Error404';
import NotesMain from './pages/notesMain';
import NoteForm from './components/noteForm';
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Switch>
          <Route path="/notes-app" exact>
            <Login/>
          </Route>
          <Route path="/notes-app/register" exact>
            <Register/>
          </Route>
          <Route path="/notes-app/notesMain" exact>
            <NotesMain/>
          </Route>
          <Route path="/notes-app/notesMain/addNote" exact>
            <NoteForm/>
          </Route>
          <Route path="/notes-app/notesMain/editNote" exact >
            <NoteForm/>
          </Route>
          <Route>
            <Error404/>
          </Route>
          
        </Switch>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
