// 타입스크립트는 기본적으로 각가의 파일을 전역 모듈로 취급
//
// 1. export , import 등 모듈 시슽메을 사용하는 문법 키워드를 파일 내 한 번 이상 작성 시 독립된 공간으로 인식
// 2. compilerOption의 moduleDetection 옵션을 force로 설정하기

const a = 1;
