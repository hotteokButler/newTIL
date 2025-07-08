/**
 * ## 템플릿 리터럴 타입(Template Literal Type)
 * - 문자열로 여러가지의 상황들을 표현할 때 편하다
 * - 실사용 케이스 그렇게 많지 않음
 */
type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`; // Color type와 Animal type으로 올 수 있는 모든 타입들이 조합됨(Union type)
