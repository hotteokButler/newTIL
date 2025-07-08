/**
 * ## 템플릿 리터럴 타입(Template Literal Type)
 */
type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`; // Color type와 Animal type으로 올 수 있는 모든 타입들이 조합됨(Union type)
