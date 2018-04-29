import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';

var styles = {
  container: {
    backgroundColor: '#dfe6e9'
  }
}
class App extends Component {
  render() {
    return (
      <div style= {styles.container}>
        <Header/>
        <Main/>
     </div>  
    );
  }
}

export default App;
