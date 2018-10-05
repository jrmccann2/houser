import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Header />
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
