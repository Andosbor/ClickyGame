import React from 'react';
import './styles/App.css';
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
 
// class App extends Component {
//   state = {
//     isClicked: false;
//   };
//on click, if isClicked is false then add 1 to score and shuffle
          //if isClicked is true, reset Game

function shuffle(array) {
  var shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled;
}


function updateIsClicked() {
  // Note: this will *not* work as intended.
  //this.setState({isClicked: true});
  if(2===2){
    console.log(this.props.name)
  }
}

/*
resetIsClicked(index) {
  for() {
  this.setState({this.state.randomized[index].isClicked: true})
  }
}

handleSomething() {
  // Let's say `this.state.count` starts at 0.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();
  // When React re-renders the component, `this.state.count` will be 1, but you expected 3.

  // This is because `incrementCount()` function above reads from `this.state.count`,
  // but React doesn't update `this.state.count` until the component is re-rendered.
  // So `incrementCount()` ends up reading `this.state.count` as 0 every time, and sets it to 1.

  // The fix is described below!
}
*/

var randomized = shuffle(characters);
console.log({randomized});

function resetGame(){
  //resetScore() (need to build this function)
  //setTopScore() (need to build this function)
  shuffle(characters);
}

function createBox(){
{/* mapping each character into each box */}

}

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="jumbotron">
        <div className="row">
        {/* add a map function to insert the images into each box */}
          <div className="col-3">
            <ClickBox 
              name={randomized[0].name}
              image={randomized[0].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[1].name}
              image={randomized[1].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[2].name}
              image={randomized[2].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[3].name}
              image={randomized[3].image}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ClickBox 
              name={randomized[4].name}
              image={randomized[4].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[5].name}
              image={randomized[5].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[6].name}
              image={randomized[6].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[7].name}
              image={randomized[7].image}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ClickBox 
              name={randomized[8].name}
              image={randomized[8].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[9].name}
              image={randomized[9].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[10].name}
              image={randomized[10].image}
            />
          </div>
          <div className="col-3">
            <ClickBox 
              name={randomized[11].name}
              image={randomized[11].image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;