import React from 'react';
/**
 * JSX 주의 사항
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
 *    (if, for문은 값으로써 평가받을 수 없어 표현식이 아님 쓸 수 없음)
 * 2. 숫자, 문자열, 배열 값만 정상적으로 렌더링 된다<div className=""></div>
 * 3. 모든 태그는 닫혀있어야 한다.
 * 4. 최상위 태그는 반드시 하나여야만 한다.
 */


export default function Main() {
  const number = 9; 
  const obj = { a: 1 }; // object 자체는 렌더링 불가
  return (
    <main style={{ border: '1px solid #efefef', padding: '1rem' }}>
      <h2>Main</h2>
      <h3>
        {number % 2 === 0 ? '짝수' : '홀수'}
        <br />
        {10}
        <br />
        {[1, 2, 3]}
        <br />
        {obj.a}
      </h3>
    </main>
  );
}
