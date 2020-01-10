import React, {Component} from 'react';

import './App.css';
const API = `http://localhost:3000/books`

class App extends Component {

  constructor () {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(books => this.setState({books: books}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Book Tracker</h1>

        </header>
      </div>
    );
  }
}

export default App;
