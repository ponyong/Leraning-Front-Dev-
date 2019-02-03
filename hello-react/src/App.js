import React, { Component } from 'react';
import './App.css'
import MyName from './MyName';
import Counter from './Counter';
// 클래스 형태로 만드는 컴포넌트에는 반드시 render 함수 가 있어야한다.
// 그리고 그 내부에는 jsx 를 return 해주어야 한다.

// props 와 state
// props 는 부모컴퍼넌트가 자식 컴포넌트에게 주는 값 ,  자식은 수정은 불가능
// state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있음.

class App extends Component {
  render() {

    return (
       <Counter/>
    );
  }
}

export default App;
