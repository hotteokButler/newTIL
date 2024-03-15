# React-hook-form에서 map을 이용해 input 생성



### 문제의 코드

reigster을 사용하여 required 속성을 입력하였을때 react-hook-form의 required가 아닌 input의 prop 속성인 required가 우선적으로 타입 적용 되어 string값은 적용 안된다고 오류뜸

```javascript
export default function FindToggle(props: IFindToggle) {
  const { toggle_title, setToggleAction, find_input_data } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFindToggleForm>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IFindToggleForm> = () => {};
  return (
    <>
      <div className='find_toggle_con'>
        <h4 className='toggle_title'>
          {toggle_title}
          <button type='button'>
            <IoIosArrowDown />
          </button>
        </h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          {findTestObj &&
            findTestObj.map((elem, idx) => (
              <input
                key={idx}
                type={elem.type || 'text'}
                placeholder={elem.placeholder || ''}
                {...register(`${elem.name}`, { required : '필수입력값입니다.'})}
              ></input>
            ))}
          <button type='submit'>확인</button>
        </form>
      </div>
    </>
  );
}

```

### 해결...? (일단 error는 뜨지 않음)

map으로 돌릴 수 있는 기능으로 찾아보자 제공되는 useFieldArray가 눈에 띄였지만 form의 여러 같은 객체의 다차원 데이터 배열 관리를 위한 동일 폼 동적 추가 및 관리용으로 적합한 것 같아 패스..


required 속성이 아닌 validation 으로 유효성 검사 시 정상 작동 된다. -> 다른 방법이 있는지 한번 더 고려해 볼 필요가 있고 추후 db연결 후 오류가 날 수 있으니 


```javascript
  <form onSubmit={handleSubmit(onSubmit)}>
      {findTestObj &&
        findTestObj.map((elem, idx) => (
          <input
            key={idx}
            type={elem.type || 'text'}
            placeholder={elem.placeholder || ''}
            {...register(`${elem.name}`, { validate: (val) => (val ? true : '필수입력값입니다') })}
          ></input>
        ))}
      <button type='submit'>확인</button>
    </form>
```