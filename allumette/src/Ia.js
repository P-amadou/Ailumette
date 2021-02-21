import React from 'react'
import {Link} from 'react-router-dom'

class Ia extends React.Component{
    constructor(props) {
        super(props);
        this.state = { inputX: '',
                       inputY:'' ,
                       selectChart:'',
                       show:false
                      };
      }

    render(){

    return(
    <div>
      <h1>IA niveau</h1>
      <p>Choisir le niveau de diificulté</p>
      <select id="selectChart"  value={this.state.selectNiv} onChange={this.myChangeHandler3}>
        <option value="DEFAULT" disabled >Choisir une option</option>
        <option value="1" >Facile</option>
        <option value="2">Moyen</option>
        <option value="3">Difficile</option>
        </select><br/>
    </div>
    )
    }
}

export default Ia