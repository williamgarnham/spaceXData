import './App.css';
/*import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Missions from './Missions'

/*const navbar = {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Button variant="flat" size="xxl">Flat button</Button>
  )
}*/

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/ship" component={Shop}/>
        <Route path="/missions" component={Missions}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
  return(
  <div>
    <h1>Homepage</h1>
  </div>
)
}



export default App;
