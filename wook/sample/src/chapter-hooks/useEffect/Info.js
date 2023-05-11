import {useEffect, useState} from "react";

const Info = () => {
  const [name, setName] = useState('전다훈'); // 초기값 '전다훈' 할당
  const [nickname, setNickname] = useState('훈이'); // 초기값 '훈이' 할당
  const [visible, setVisible] = useState(false);

  /**
   * @description: 기본 개념
   */
  useEffect(() => {
    console.log('최초 마운트 됐을 경우에만 실행됨. 그 이후로는 실행되지 않음');
    console.log({name, nickname});
  }, []);

  useEffect(() => {
    console.log('name이 변경되면 실행')
  }, [name]);

  useEffect(() => {
    console.log('nickname이 변경되면 실행')
  }, [nickname]);

  useEffect(() => {
    console.log('name 또는 nickname이 변경되면 실행')
  }, [name, nickname]); // 배열 안에 감시할 대상을 넣어줌으로써
                              // 넣어준 대상이 변경되면 선언된 함수가 실행됨됨
                              // 감시 대상에는 어떠한 변수가 들어가도 상관없음
                              // ex) useState 로 선언한 state, props로 전달받은 state 등


  /**
   * @description: cleanup 개념
   * 언마운트 될 때, 감시 대상이 업데이트 되기 직전에 먼저 실행될 함수
   */
  useEffect(() => {
    console.log('render');
    return () => {
      console.log('clean up');
    }
  }, []) // 감시할 대상을 넣어주지 않으면 언마운트 될 때에만 실행됨
  useEffect(() => {
    console.log('render')
    return () => {
      console.log('visible이 업데이트 되기 직전에 호출됨')
    }
  }, [visible]) // 감시할 대상 설정
                      // visible 에 대한 값이 업데이트 되기 직전에 실행됨.

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setNickname(e.target.value);
  }

  return (
    <div>
      <h1>useEffect Hook</h1>

      {visible && (
        <>
          <input type={'text'} value={name} onChange={onChangeName} />
          <input type={'text'} value={nickname} onChange={onChangeNickname} />
        </>
      )}

      이름 : {name}
      닉네임 : {nickname}

      <button
        onClick={() => {setVisible(!visible)}}
        type={'button'}>
        {visible ? '숨기기' : '보이기'}
      </button>
    </div>
  )

}

export default Info;