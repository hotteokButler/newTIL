# Typescript

## Why? Typescript

  <table>
    <tr>
      <th>Javascript</th>
      <th>Typescript</th>
    </tr>
    <tr>
      <td>동적타입 언어</td>
      <td>정적타입 언어</td>
    </tr>
    <tr>
      <td>인터프리터 언어</td>
      <td>컴파일 언어</td>
    </tr>
    <tr>
      <td>독립적으로 사용 O</td>
      <td>자바스크립트에 의존적 (JS로 컴파일 후 실행)</td>
    </tr>
    <tr>
      <td>type의 유연성</td>
      <td>간결, 일관성, 재사용성, 더 나은 구조 <br> 버그 줄어듦, 개발 효율성 증대, 협업 및 유지보수성</td>
    </tr>
    <tr>
      <td>.js 확장자</td>
      <td>.ts 확장자</td>
    </tr>
    <tr>
      <td>소규모 플젝에 적합</td>
      <td>복잡한 플젝에 적합</td>
    </tr>
  </table>

## 🙂기본타입

1. Boolean
   ```ts
   let isLogin: boolean = false;
   //  위와 같이 :를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(Type Annotation)
   ```
2. Number
   ```ts
   const num: number = 7777;
   ```
3. String
   ```ts
   const str: string = "It's string";
   ```
4. Object

   ```ts

   ```

5. Array

   ```ts
   //1.배열 요소들을 나타내는 타입 뒤에 []
   const list: number[] = [1, 2, 3];
   //2.Generic 배열 타입 Array<elemType>
   const list: Array<number> = [1, 2, 3];
   ```

6. Tuple

- 요소의 타입과 개수가 고정된 배열을 표현
- 요소들의 타입이 모두 같을 필요는 없음
- 정해진 인덱스에 위치한 요소에 접근하면 해당 타입이 나타남
- 정해진 인덱스를 벗어난 요소 접근 시 오류

  ```ts
  let x: [string, number];
  //ok
  x = ['str', 1];
  //err
  x = [1, 'str'];
  ```

7. Enum

- 특정 값(상수)들의 집합
- 열거형을 사용하면 의도를 문서화 하거나 구분되는 사례 집합을 더 쉽게 만들수 있음
- numeric and string-based enum 제공
- 인덱스 번호로도 접근 가능, 인덱스 변경 가능

  ```ts
  enum Fruit {
    Apple,
    Banana,
    Orange,
  }
  let fruitLi: Fruit = Fruit.Apple;

  //index
  enum Fruit {
    Apple,
    Banana,
    Orange,
  }
  let fruitLi: Fruit = Fruit.Apple;
  let fruitName: string = fruitLi[2]; // 'Orange'

  //index 임의 변경
  enum Fruit {
    Apple = 2,
    Banana,
    Orange,
  } // enum Fruit {Apple=2, Banana=5, Orange=8} 가능
  let fruitLi: Fruit = Fruit.Apple;
  let fruitName: string = fruitLi[2]; // 'Apple'
  ```

8. any

- 알지 못하는 타입을 표현 | 타입검사 X(모든타입 허용)
- 사용자로부터 받은 데이터나 서드 파티 라이브러리 같은 동적인 컨텐츠

9. void

- 어떤 타입도 존재할 수 없음
- 반환 값이 없는 함수의 반환 타입
- 변수를 선언하는 것은 X (변수에는 null, undefined만 할당 가능);

  ```ts
  function printSomething(): void {
    console.log('sth');
  }

  function returnNothing(): void {
    return;
  }
  ```

10. null

- 값이 없다

11. undefined

- 아직 정의하지 않았음

12. never

- never는 절대 반환하지 않는 함수 타입

13. bigint

- bigint는 JS와 TS에 새로 추가된 타입
- 라운딩 관련 에러 걱정 없이 큰 정수를 처리 (number는 2의 53승까지의 정수를 표현)

### Optional Parameter

- 있어도 되고 없어도 되는 parameter는 ?를 앞에 추가

  ```ts
  type Player = {
    name: string;
    age?: number;
  };

  const palyMaker = (name: string, age?: number): Player => (age ? { name, age } : { name });
  ```
