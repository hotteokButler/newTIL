# Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

<hr/>

> 자바스크립트 객체 키는 string,symbol만 가능, 숫자나 다른 타입의 값을 키로 사용할 경우 자바스크립트 런타임 시 string문자열 변환

> Object.keys()에서 리턴되는 값은 string[]! 따라서 자바스크립트에서 사용하던 코드를 그대로 사용하면 컴파일 에러 발생함

### 1. `Index Signature` 생성
  Index Signature는 객체가 {key, val} 형식으로 key와 val의 타입을 정확히 명시해야 오류가 생기기 않는다.

```javascript
type EmailSelectionType = {
  [index: string]: string;
  self: string;
  naver: string;
  hanmail: string;
  gmail: string;
  nate: string;
  hotmail: string;
};

const EmailSelection: EmailSelectionType = {
  self: '직접입력',
  naver: '@naver.com',
  hanmail: '@hanmail.com',
  gmail: '@gmail.com',
  nate: '@nate.com',
  hotmail: '@hotmail.com',
};

//또는
const EmailSelection: {[key : string] : string} = {
  self: '직접입력',
  naver: '@naver.com',
  hanmail: '@hanmail.com',
  gmail: '@gmail.com',
  nate: '@nate.com',
  hotmail: '@hotmail.com',
};
```


```javascript
<select id='email_select' {...register('email_selection')}>
  {Object.keys(EmailSelection).map((elem, idx) => (
    <option value={EmailSelection[elem]} key={idx}>
      {EmailSelection[elem]}
    </option>
  ))}
</select>
```
