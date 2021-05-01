import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import  { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Error404 from './pages/Error404';
import NotesMain from './pages/notesMain';
import AddNote from './pages/addNote';
function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/notesMain" exact>
            <NotesMain/>
          </Route>
          <Route path="/notesMain/addNote" exact>
            <AddNote/>
          </Route>
          <Route path="/notesMain/editNote" exact >
            <AddNote/>
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
