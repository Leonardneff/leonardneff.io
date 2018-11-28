import React, { Component } from 'react';
import './App.css';
import portrait from './images/leonard.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <figure className="image is-128x128">
            <img src={portrait} className='is-rounded' alt='Leonard' />
          </figure>
          <h1>
            Hi, I am Leonard. <span role='img' aria-label='wave'>👋</span> 
          </h1>
          <p>
            I am a Front-End Web Developer, based in Cologne, Germany.
          </p>
          <br />
          <a href='mailto:hi@leonardneff.com' className='button is-primary'>Leave me a message</a>
        </header>
      </div>
    );
  }
}

export default App;
