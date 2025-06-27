## 타입 계층도 - type_hierarchy_tree

```text
/**
 * # Type Hierarchy Tree (타입 계층도)
 *         [unknown - 전체 집합]
 *                  |
 *               [ any ] - 치트키
 *                  |
 * [null]  ------ [void] ------ [number] ------ [bigint] ------ [boolean] ------ [string] ------ [symbol] ------ [object]
 *    |              |              |               |                |              |               |                |----------| ----------- |
 *    |          [undefined]  [number enum]         |                |           [string enum]  [unique symbol]    [array]  [ function] [construnctor]
 *    |              |              |               |                |              |               |                 |           |            |
 *    |              |              |               |                |              |               |              [tuple]        |            |
 *    | --------------------------------------------------------------------------------------------------------------|----------------------- |
 *                   |
 *                [never - 공집합]
 *
 *
 *
 */
```

---

### **Unknown** 타입

```ts
// 업 캐스팅(슈퍼 타입 <- 서브 타입)  => 가능
let a: unknown = 1;
let b: unknown = 'hi';
let c: unknown = true;
let d: unknown = null;
let e: unknown = undefined;

// 다운 캐스팅(서브 타입 <- 슈퍼 타입>) => 불가능
let unknownVar: unknown;

let num: number = unknownVar; // error
let str: string = unknownVar; // error
let bool: boolean = unknownVar; // error
```

### **Never** 타입

- 공집합, 아무것도 없다
- 어떤 값도 저장되어서는 안 되는 변수 타입으로 활용 (어떤 타입도 다운캐스팅 불가능)

```ts
function neverFunc(): never {
	while (true) {}
}
//  never 타입은 모든 타입의 서브 타입이기 때문에 모든 타입에 업캐스팅 되어 가능하나 반대는 불가능 =>
let num: numver = neverFunc(); // ok
let str: string = neverFunc(); // ok
let bool: boolean = neverFunc(); // ok
```

### **Void** 타입

```ts
function voidFunc(): void {
	console.log('ho');
}

let voidVar: void = undefined;
```

### **any** 타입

- any 타입은 unknown 타입의 서브 타입이나 any타입은 계층도를 무시 => 모든 타입의 슈퍼 타입도, 서브타입도 가능하다
- 타입계층을 무시하는 타입이므로 웬만해서는 쓰지 않는게 좋다
- 예외적으로 never 타입에는 다운캐스팅 할 수 없음

```ts
let unknownVar: unknown;
let anyVar: any;
let undefinedVar: undefined;
let neverVar: never;

anyVar = unknownVar; //다운 캐스팅 케이스라도 any는 가능하다
undefinedVar = anyVar; //다운 캐스팅 가능

// 아래는 불가능한 케이스
neverVar = anyVar; // never에는 어떤 타입도 다운캐스팅이 불가능하므로 오류 발생
```
