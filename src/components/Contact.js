import React, { Component } from 'react';

class Game extends Component{

    render(){
        const StartMarch = () =>{
        const stars = 5;
        
        return(
            <div className="game">

                <div className="help">
                    <h2>Pick 1 or none numbers that sum to the numbers of stars</h2>
                </div>
                <div className="body">
                    <div className="left">
                        {utils.range(1, stars).map(starId =>
                        <div key={startId} className="star"/>
                            )}
                    </div>
                    <div className="right">
                        {utils.range(1, 9).map(number =>
                          <button key={number} className="number">{number}</button>

                            )}
                    </div>
                </div>
                <div className="timer">Time Remaming: 10</div>
            </div>
        )
    }
}


}
export default Game