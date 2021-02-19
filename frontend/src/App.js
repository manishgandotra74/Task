import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Note from './components/note';
import Bucket from './components/bucket';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Header } from 'antd/lib/layout/layout';


function App() {
  return (
    <div className="App">
 <Header style={{color:"#FFF" , marginBottom:"5px"}}>To Do App</Header>

      <Router>
        <Switch>
          <Route path="/note/:id/edit-note/:noteId">
            <Note />
          </Route>
          <Route path="/note/:id/add-note/">
            <Note />
          </Route>
          <Route path="/">
            <Bucket />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
