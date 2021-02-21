import React from 'react'
import { Link} from 'react-router-dom'

class plateau extends React.Component{
 
    render(){
    let nbAlumettesMax=16
let nbMatchesRemoves
let line
//console.log(`${typePlayer} removed ${nbMatchesRemoves} match(es) from line ${line}`);
let nbAllumette = nbAlumettesMax
let player1="test1"
let player2 ="test2"
let nbTour=0




function partiePVP() {
    while (nbAllumette>0) {
        
        if (nbAllumette==0) {
            if (nbTour % 2 == 0) {
            console.log(`${Player1} lost, too bad..`);     
            } else {
            console.log(`${Player2} lost, too bad..`);
            }
        } else {
            if(nbTour%2 == 0){
                console.log(`${player1} turn: `);
                console.log(`Line: ${line}`);
                console.log(`Matches: ${nbMatchesRemoves}`);
                nbAllumette = nbAllumette-nbMatchesRemoves
                nbTour++
            }else{
                console.log(`${player2} turn: `);
                console.log(`Line: ${line}`);
                console.log(`Matches: ${nbMatchesRemoves}`);
                nbAllumette = nbAllumette-nbMatchesRemoves
                nbTour++
            }
            console.log(`Matches restant: ${nbAllumette}`);
        }
    
    }
    
}

function partieIA() {
    while (nbAllumette>0) {
       
        if (nbAllumette==0) {
            if (nbTour % 2 == 0) {
            console.log(`${Player1} lost, too bad..`);     
            } else {
            console.log(`${Player2} lost, too bad..`);
            }
        } else {
            if(nbTour%2 == 0){
                console.log(`${player1} turn: `);
                console.log(`Line: ${line}`);
                console.log(`Matches: ${nbMatchesRemoves}`);
                nbAllumette = nbAllumette-nbMatchesRemoves
                nbTour++
            }else{
                if (nbAllumette % 4==3) {
                    console.log(`IA turn: `);
                    nbMatchesRemoves=2
                    nbAllumette = nbAllumette-nbMatchesRemoves
                    nbTour++
                } else if(nbAllumette % 4 == 2) {
                    console.log(`IA turn: `);
                    nbMatchesRemoves=1
                    nbAllumette = nbAllumette-nbMatchesRemoves

                }else if (nbAllumette % 4 == 0) {
                    console.log(`IA turn: `);
                    nbMatchesRemoves=3
                    nbAllumette = nbAllumette-nbMatchesRemoves
                    nbTour++

                } else {
                    console.log(`IA turn: `);
                    nbMatchesRemoves=1
                    nbAllumette = nbAllumette-nbMatchesRemoves
                    nbTour++
                }
            }
            console.log(`Matches restant: ${nbAllumette}`);
        }
    }
}

            return(
            <div>
                <table>
                <tr>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                </tr>
                <tr>
                <td className="ast">*</td>
                <td></td>
                <td></td>
                <td></td>
                <td id="l1">|</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="ast">*</td>
                </tr>
                <tr>
                <td className="ast">*</td>
                <td></td>
                <td></td>
                <td id="l21">|</td>
                <td id="l22">|</td>
                <td id="l23">|</td>
                <td ></td>
                <td></td>
                <td className="ast">*</td>
                </tr>
                <tr>
                <td className="ast">*</td>
                <td></td>
                <td id="l31">|</td>
                <td id="l32">|</td>
                <td id="l33">|</td>
                <td id="l34">|</td>
                <td id="l35">|</td>
                <td></td>
                <td className="ast">*</td>
                </tr>
                <tr>
                <td className="ast">*</td>
                <td id="l41">|</td>
                <td id="l42">|</td>
                <td id="l43">|</td>
                <td id="l44">|</td>
                <td id="l45">|</td>
                <td id="l46">|</td>
                <td className="ast">*</td>
                </tr>
                <tr>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                <td className="ast">*</td>
                </tr>
                </table>
            </div>    
          )
      }     
}

export default plateau