import React from 'react';
import './App.css';
import Profile from './components/Profile'


class App extends React.Component{
  constructor(){
    super()
    this.state={
    show : false
    }
  }
toggle =() => {
  this.setState({show: !this.state.show}) 
}
  render(){
  return (
  <div>
    <button type="text" onClick={ () => this.toggle ()}> {this.state.show ? 'click to hide' : 'click to show'}</button>
    {this.state.show && <Profile/>}
  </div>
  );
    
  }
}

export default App;
