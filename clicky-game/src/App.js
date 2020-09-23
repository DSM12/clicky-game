import React, { Component } from "react";
import HerosCard from "./components/HerosCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heros from "../src/heros.json";
import Score from "./components/Score";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  //set this.state.heros to heros json
  state = {
    heros,
    score: 0, 
    highScore: 0, 
    showAlert: 0, 
    showSuccess: 0, 
    clickedIcons: []
  };

  clickedImage = id => {
    let clickedIcons = this.state.clickedIcons; 
    let score = this.state.score; 
    let highScore = this.state.highScore; 
    this.setState({
      showAlert: 0
    });

    if (clickedIcons.indexOf(id) === -1) {
      clickedIcons.push(id);
      console.log(clickedIcons);

      this.handleIncrement();
      this.makeShuffle();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1, 
        score: 0, 
        clickedIcons: []
      });
    } else {
      this.setState({
        score: 0, 
        clickedIcons: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > highScore) {
      this.setState({
        highScore: score
      });
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  }; 

  makeShuffle = () => {
    this.setState({ heros: shuffle(heros) });
  };

  render() {
    return (
      <div className="container">
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }}
        >
          Whomp, whomp, whomp! 
        </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}
        >
          Good job, friend!
        </div>
        <Score
          Title="clicky game"
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Title>Clicky-Game</Title>
        <Wrapper>
        <div className="row">
          {this.state.heros.map(heros => (
            <HerosCard
              key={heros.id}
              id={heros.id}
              name={heros.name}
              image={heros.image}
              clickedImage={this.clickedImage}
            />
          ))}
        </div>
        </Wrapper>
      </div>
    );
  }

}

export default App; 