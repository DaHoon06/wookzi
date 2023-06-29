// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";


// const App = () =>{
  // return <EventPractice />;
  // return <Say />;
  // return <Counter />;
  // return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// }

import React, { Component } from 'react';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

//랜덤 색상을 생성
function getRandomColor() {
  return '#'+ Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      // <IterationSample/>  
      // <ValidationSample/>
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;