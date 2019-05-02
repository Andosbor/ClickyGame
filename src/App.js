import React, {Component} from 'react';
import './styles/App.css';
import Header from "./components/Header";
import ClickBox from "./components/ClickBox";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
 

//on click, if isClicked is false then add 1 to score and shuffle
          //if isClicked is true, reset Game


class App extends Component {

    state = {
      characters : characters,
      index: characters.index
    };

    

 shuffle(array) {
  var shuffled = array.sort(() => Math.random() - 0.5);
  console.log("shuffling");
  return shuffled;
}

 updateIsClicked() {
  // Note: this will *not* work as intended.
  //this.setState({isClicked: true});
  
    console.log(this.props.name)
  
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

// var randomized = shuffle(characters);
// console.log({randomized});

 resetGame(){
  //resetScore() (need to build this function)
  //setTopScore() (need to build this function)
  this.shuffle(characters);
}
//must add an index to each image

render() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="jumbotron">
        <div className="row">
        {this.state.characters.map((character,index)=>{
           return (<div className="col-3">
            <ClickBox onClick={this.shuffle(characters)}test={console.log(character.index)}
              name={character.name}
              image={character.image}
              key={character.index}
            />
          </div>)
        })}
        </div>
      </div>
    </div>
  );
}
}

export default App;