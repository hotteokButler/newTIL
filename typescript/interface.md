# Interface

### 1. interface 기본 선언 및 optional property

```ts
interface LabeledValue {
  size?: number;
  label: string;
}

const printObj = (labeledObj: LabeledValue): void => console.log(labeledObj.size ? labeledObj.label + ' ' + labeledObj.size : labeledObj.label);

const myObj = { size: 12, label: 'test' };
const myObj2 = { label: 'test___' };

printObj(myObj); // "test 12"
printObj(myObj2); // "test___"

// type checking
interface ChickBrand {
  brand?: string;
}

function orderChicken(beer: ChickBrand) {
  // ..
}
orderChicken({ beer: 'what' }); // error
//ㄴ> 타입 추론 무시 원 할 시 오버라이드
let myChicken = { beer: 'what' };
orderChicken(myChicken as ChickBrand);

// 인터페이스에서 정의 안한 속성 추가 사용 원할 시
interface ChickBrand {
  brand?: string;
  [propName: string]: any;
}
```

### 2. Readonly properties - 읽기전용

- 객체가 처음 생성될 때만 수정 가능, 읽기 전용 `readonly` 사용

  ```ts
  interface PointPos {
    readonly x: number;
    readonly y: number;
  }

  const pos1: PointPos = { x: 10, y: 15 };
  pos1.x = 25; // error!!!!!!!!!!!!!!
  ```

- 모든 변경 메서드(Mutating Methods)가 제거된 `Array<T>`와 동일한 `ReadonlyArray<T>` 타입을 제공

  ```ts
  const a: number[] = [1, 2, 3, 4, 5];
  const b: ReadonlyArray<number> = a;
  b[0] = 12; // error!!!!!!!!!!!!!!
  b.push(5); // error!!!!!!!!!!!!!!
  b.length = 20; // error!!!!!!!!!!!!!!
  a = b; // error!!!!!!!!!!!!!!

  a = b as number[]; // 타입 단언으로 오버라이드하는 것은 가능
  ```

### 3. 인터페이스 확장

- 클래스와 마찬가지로 인터페이스 간 확장 가능

  ```ts
  interface Person {
    name: string;
  }
  interface Food extends Person {
    food: string;
  }
  interface Chief extends Food {
    skill: string;
  }

  const per = {} as Chief;
  per.name = 'jamse';
  per.skill = 'korean';
  per.food = 'kimchi';

  console.log(per); // {"name": "jamse",  "skill": "korean",  "food": "kimchi"}
  ```

### 4. 인터페이스 하이브리드 타입

- 여러 가지 타입을 조합해서 만들 수 있는 타입

  ```ts
  //함수 타입이면서 객체 타입을 정의할 수 있는 인터페이스
  interface CraftBeer {
    (beer: string): string;
    brand: string;
    brew(): void;
  }

  function myBeer(): CraftBeer {
    let my = function (beer: string) {} as CraftBeer;
    my.brand = 'Beer Kitchen';
    my.brew = function () {
      console.log('dd');
    };
    return my;
  }

  let brewedBeer = myBeer();
  brewedBeer('My First Beer');
  brewedBeer.brand = 'Pangyo Craft';
  brewedBeer.brew(); // "dd"
  console.log(brewedBeer.brand); //"Pangyo Craft"
  ```
