import { useState } from "react";

const Counter = () => {
  /**
   * @description: useState 
   * 배열을 반환 [getter, setter]
   */
  const [value, setValue] = useState(0); // 초기값 0으로 설정

  const plus = () => {
    setValue(value + 1);
  }

  const minus = () => {
    setValue(value - 1);
  }

  return (
    <article>
      <section>
        <h1>
          현재 카운터 값은 <b>{value}</b> 입니다.
        </h1>
        <button type="button" onClick={plus}>+ 1</button>
        <button type="button" onClick={minus}>- 1</button>
      </section>
    </article>
  )
}

export default Counter;