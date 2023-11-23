# Type Aliases

-  특정 타입이나 인터페이스를 참조할 수 있는 타입 변수

    ```ts
      type Name = string;
      const name:Name = 'hotteok';
    ```

- `interface` 레벨의 복잡한 타입에도 별칭 부여 가능
   ```ts
      type User = {
        name : string;
        level : number;
      }
   ```
- `Genetic` 사용 가능
   ```ts
     type User<T> = {
      name : T
     }

     //property 안에서 자기 자신을 참조하는 타입 별칭을 가지 수 있음
     type NewType<T> = {
      value : T;
      x: NewType<T>;
     }
   ```

 - 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여함

 - `interface`와 가장 큰 차이점은 확장 가능 여부, `Type Aliases`는 확장 불가능
   > 좋은 소프트웨어는 언제나 확장이 용이해야하므로 `interface`로 선언해주는 것이 좋다.