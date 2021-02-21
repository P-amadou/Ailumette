import React,{Component} from 'react';
import Allumette from './allumette';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Ia from './Ia';
import Accueil from './Accueil';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputX: '',
                   inputY:'' ,
                   selectChart:'',
                   show:false
                  };
  }
  myChangeHandler3=(event)=>{
    this.setState({selectChart: event.target.value})

  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <h1>Jeu des allumettes</h1>
        </header>
        <Router>
        <Route path="/" exact component={Accueil} />
        {/* <Route path="/" exact component={Accueil}/> */}
        <Route path="/Ia" exact component={Ia} />
      </Router>
      </div>
    );
  }

}

export default App;
