import React, { Component } from 'react';

/**
 * @description: Class Component 방법
 */
class LifeCycleSample extends Component {
    
  /**
   * @description
   * state 라는 Object 객체 생성
   * 이 객체 안에 number 라는 key에 0을 할당해주고
   * color 라는 key에 null 값을 할당해줌
   * 
   * 자바에서 사용했을 때 전역 변수를 생성하는 것과 동일
   */
  state = {
    number: 0,
    color: null,
  }

  myRef = null; // ref를 사용하기 위한 변수 선언

  /**
   * @description: 기본 생성자 생성
   * @param {*} props: 상위 컴포넌트 (부모 컴포넌트)로 부터 값을 전달받는 것으로 properties 를 의미
   */
  constructor(props) {
      super(props);
  }
  
  /**
   * @description: props에 있는 값을 state에 동기화할 때 사용하는 메서드
   * @param {*} nextProps: props 
   * @param {*} prevState: state
   * @returns 
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 전달받은 데이터와 state 값이 다르다면 데이터 동기화  
    if (nextProps.color !== prevState.color) {
          return { color: nextProps.color };
    }
    // 동기화 할게 없다면 null을 return
    return null;
  }
  /**
   * @description: 웹 브라우저가 화면에 그려진 (render) 후 실행되는 메서드
   */
  componentDidMount() {
      console.log('componentDidMount');
  }

  /**
   * @description: re-rendering을 여부를 판단하는 메서드
   * default 값으로 true 값을 반환
   * true 일경우 shouldComponentUpdate() => getSnapshotBeforeUpdate() 순으로 실행되며,
   * false 일경우 재 렌더링이 되지 않는다. 
   */
  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate : ', nextProps, nextState);
      // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
      return nextProps.number % 10 !== 4;
  }

  componentWillUnmount() {
      console.log('componentWillUnmount');
  }

  /**
   * @description: shouldComponentUpdate() 가 true 를 반환해야 실행되는 메서드
   * 실제 DOM 에 변화가 적용되기 직전에 호출됨 (DOM이 업데이트 되기 직전에 실행)
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate');
      if (prevProps.color !== this.props.color) {
          return this.myRef.style.color;
      }
      return null;
  }

  /**
   * @description: render 함수가 호출된 후 실행
   * 
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('componentDidUpdate', prevProps, prevState, snapshot);
      if (snapshot) {
          console.log(`업데이트되기 직전 색상 : ${snapshot}`)
      }
  }
/*========    여기까지가 React 에서 사용하는 LifeCycle Methods    ==================== */

  handleClick = () => {
    this.setState({
        number: this.state.number + 1
    })
  }

    // 화면에 UI를 렌더링할 때 호출
    render() {
        console.log('render');

        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button 
                    type='button'
                    onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;