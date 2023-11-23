# Generics (제네릭)

- 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용
- 클래스 또는 함수에서 사용할 타입(Type)을, 그 클래스나 함수를 사용할 때 결정하는 프로그래밍 기법

    ```ts

    // any를 쓰게되면 어떤 타입이든 받을 수 있으나, return시 타입 정보 상실
    const func = (arg: any) : any => arg;

    // Generics 사용
    // 1. 일반함수
    function func<T>(arg:T):T {
      return arg;
    }

    // 2. arrow function

    const func = <T> (arg:T):void => console.log(arg); 
    // ts파일에서는 ok, tsx에서는 error : <>는 태그를 나타낼 때 사용하므로 tsx에서는 오류가 날 수 있음

    // 2-1. extends {} 를 사용했을 경우 원시 타입을 포함한(string, number 등) 거의 모든 값을 제네릭으로 받을 수 있으나, null과 undefined 는 제네릭으로 사용할 수 없음
    const func = <T extends {}> (arg:T):void => console.log(arg); 

    //2-2. 의 모든 타입을 포함하는 탑 타입인 unknown 을 사용하면 <T>(arg: T): T 와 동일하게 사용가능
    const func = <T extends unknown> (arg:T):void => console.log(arg); 

    ```

- 타입 매개변수를 두 개 이상 사용 할 경우 ","로 구분

참고

<a href="https://typescript-kr.github.io/pages/generics.html">`제네릭 - TypeScript-Handbook 한글 문서`</a>
<br>
<br>
<a href="https://joshua1988.github.io/ts/guide/generics.html">`제네릭 - 타입스크립트 핸드북`</a>