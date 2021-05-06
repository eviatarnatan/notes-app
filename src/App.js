import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import  { Redirect, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Error404 from './pages/Error404';
import NotesMain from './pages/notesMain';
import NoteForm from './components/noteForm';
import { useSelector } from 'react-redux';
function App() {

  const token = useSelector((state) => {
    return state.user.token;
})
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
            {token? <NotesMain/> : <Redirect to="/notes-app"/>}
          </Route>
          <Route path="/notes-app/notesMain/addNote" exact>
            {token? <NoteForm/> : <Redirect to="/notes-app" /> }
          </Route>
          <Route path="/notes-app/notesMain/editNote" exact >
            {token? <NoteForm/> : <Redirect to="/notes-app" /> } 
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
