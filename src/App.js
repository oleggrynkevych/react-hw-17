import './App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import PostsPage from "./components/PostsPage/PostsPage";
import PhotosPage from './components/PhotosPage/PhotosPage';
import ContactsPage from './components/ContactsPage/ContactsPage';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts" component={PostsPage}/>
          <Route path="/photos" component={PhotosPage}/>
          <Route path="/contacts" component={ContactsPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
