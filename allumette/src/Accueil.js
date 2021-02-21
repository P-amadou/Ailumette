import React from 'react'
import { Link} from 'react-router-dom'

function Accueil(){
    return(
    <div>
      <h1>Accueil</h1>
      <p>Choisir un mode de jeu</p>
      <Link to="/Pvp"><button>PVP</button></Link>
      <Link to="/Ia"><button>IA</button></Link>
    </div>
    )
}

export default Accueil