import React, { Component } from 'react';

class Game extends Component{



    render(){

        const Number = props =>(

            <button  className="number">{props.number}</button>
        );
        
        const StartMarch = () =>{
        // const stars = utils.random(1, 9);
        const [stars, setStars] = useState(utils.random(Number("1"), 9));


        // Color Theme
        const colors = {
            available: 'lightgray',
            used: 'lightgreen',
            wrong: 'lightcorol',
            candidate: 'deepskyblue',
        };

        // math sciece
        const utils = {
            //  Sun an array
            sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

            // create an array of number between min anmax (egge include)
            range: (min, max) => Array.from({ length: max - min + 1}, (_, i) => min + i),

            // pick a random number between min and max (edges include)
            random: (min, max) => min + Math.floor(max * Math.random()),

            // Given an array of number and max
            // pick a random sun (<max) from  the set of all availble sums in

            randomSumIn: (arr, max) =>{
                const sets = [[]];
                const sms = [];
                for (let j = 0; i < arr.length; i++){
                    const candidateSet = sets[j].concat(arr[i]);
                    const candidateSum = utils.sum(candidateSet);
                }
            }
        }
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
                          <Number key={number} number={number}/>

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